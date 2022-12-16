import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
//import { Template } from 'aws-cdk-lib/assertions';
//import { SSMParameter, SSMParameterType } from '../src';
import { SSMParameter } from '../src';
//import '@aws-cdk/assert/jest';

//const mockApp = new App();
//const stack = new Stack(mockApp);
//new SSMParameter(stack, 'testing-stack',{});
//const template = Template.fromStack(stack);

describe('SSMParameter', () => {
  test('Checks if parameter value is tokenized.', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    const param = new SSMParameter(stack, 'SSMParameterString', {
      parameterName: 'foo',
      defaultValue: 'fooValue',
    });

    expect(param.parameterValue).toContain('TOKEN');

  });

});


describe('SSMParameter Parameter Test ', () => {
  test('has custom resources putParameter', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');
    new SSMParameter(stack, 'SSMParameterString', {
      parameterName: 'foo',
      defaultValue: 'fooValue',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('Custom::AWS', {
    // Properties: {
      Update: Match.serializedJson({
        service: 'SSM',
        action: 'putParameter',
        ignoreErrorCodesMatching: '.*',
        parameters: {
          Name: 'foo',
          Type: 'String',
          Value: 'fooValue',
        },
        physicalResourceId: Match.anyValue(),
      }),
    // }
    });
  });

  test('has custom resource getParameter', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');
    new SSMParameter(stack, 'SSMParameterString', {
      parameterName: 'foo',
      defaultValue: 'fooValue',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('Custom::AWS', Match.objectLike({
      Update: Match.serializedJson({
        service: 'SSM',
        action: 'getParameter',
        parameters: {
          Name: 'foo',
        },
        physicalResourceId: Match.anyValue(),
      }),
    }));

  });

  test('with a long parameterName', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');
    const paramTmp = new SSMParameter(stack, 'SSMParameterString2', {
      parameterName: 'a'.repeat(2047),
      defaultValue: 'fooValue',
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('Custom::AWS', 2);

    expect(paramTmp.parameterValue).toContain('TOKEN');

    //expect(stack).toHaveResource('Custom::AWS');
  });

});


describe('Test custom resource ssm parameter delete property', () => {

  test('with delete property', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-delete-stack');
    new SSMParameter(stack, 'SSMParameterString3', {
      parameterName: 'fooDeleteName',
      defaultValue: 'fooDeleteValue',
      delete: true,
    });

    //expect(paramTmp.parameterValue).toContain('TOKEN');
    const template = Template.fromStack(stack);
    /*
    template.hasResourceProperties('Custom::AWS', {
      Delete: Match.serializedJson({
        service: 'SSM',
        action: 'deleteParameter',
        parameters: {
          Name: 'fooValue',
        },
      }),
    });
     */

    template.resourceCountIs('Custom::AWS', 3); // delete adds additional customer resource

  });
});


describe('fails', () => {
  test('with empty parameterName', () => {
    expect(() => {
      const mockApp = new App();
      const stack = new Stack(mockApp, 'testing-stack');
      new SSMParameter(stack, 'SSMParameter', {
        parameterName: '',
        defaultValue: 'fooValue',
      });
    }).toThrowError();
  });


  test('with to long parameterName', () => {
    expect(() => {
      const mockApp = new App();
      const stack = new Stack(mockApp, 'testing-stack');
      new SSMParameter(stack, 'SSMParameter', {
        parameterName: 'a'.repeat(2049),
        defaultValue: 'fooValue',
      });
    }).toThrowError();
  });


});


/*

      describe('as SSM Parameter StringList', () => {
        const param = new SSMParameter(stack, 'SSMParameterStringList', {
          parameterName: 'fooStringList',
          defaultValue: 'fooValue1,fooValue2,fooValue3',
          type: SSMParameterType.STRING_LIST,
        });

        test('which exist', () => {
          expect(param.parameterValue).toContain('TOKEN');
          expect(stack).toHaveResourceLike('Custom::AWS', {
            Update: {
              action: 'putParameter',
              ignoreErrorCodesMatching: '.*',
              parameters: {
                Name: 'fooStringList',
                Type: 'StringList',
                Value: 'fooValue1,fooValue2,fooValue3',
              },
            },
          });
          expect(stack).toHaveResourceLike('Custom::AWS', {
            Update: {
              action: 'getParameter',
              parameters: {
                Name: 'fooStringList',
              },
            },
          });
        });
      });
    });


  });


});

*/