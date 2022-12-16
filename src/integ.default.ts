import { App, Stack } from 'aws-cdk-lib';
import { SSMParameter, SSMParameterType } from './index';


const aws_region = 'us-east-2';
const solution = 'apigateway_cognito_auth0';
const environment = 'dev';
const costcenter = 'ergon';

export class IntegTesting {
  readonly stack: Stack[];
  constructor() {
    const app = new App();

    const env = {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: aws_region || process.env.CDK_DEFAULT_REGION,
    };

    const stack = new Stack(app, 'my-demo-stack', {
      env,
      tags: {
        solution,
        environment,
        costcenter,
      },
    });

    // Create a loose coupled SSM Parameter from type String
    new SSMParameter(stack, 'SSMParameter', {
      parameterName: 'foo',
      defaultValue: 'fooValue',
    });

    // Create a loose coupled SSM Parameter from type StringList
    new SSMParameter(stack, 'SSMParameterStringList', {
      parameterName: 'fooStringList',
      defaultValue: 'fooValue1,fooValue2,fooValue3',
      type: SSMParameterType.STRING_LIST,
    });

    // Delete the SSM Parameter if the stack gets deleted
    new SSMParameter(stack, 'SSMParameterWithDelete', {
      parameterName: 'fooWithDelete',
      defaultValue: 'fooValue',
      delete: true,
    });

    this.stack = [stack];
  }
}

new IntegTesting();