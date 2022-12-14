const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'awsalvin',
  authorAddress: 'awsalvin@amazon.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'ssm-param',
  repositoryUrl: 'https://github.com/awsalvin/ssm-param.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();