const { awscdk } = require('projen');


const common_exclude = ['cdk.out'];

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'vaughngit',
  authorName: 'Alvin Vaughn',
  authorAddress: 'alvin.vaughn@outlook.com',
  cdkVersion: '2.54.0',
  defaultReleaseBranch: 'main',
  name: 'ssm-param-cdk-construct',
  repositoryUrl: 'https://github.com/vaughngit/cdk-ssm-param-construct.git',
  docgen: true,
  // packageManager: NodePackageManager.NPM,
  keywords: [
    'cdk',
    'aws',
    'ssm',
    'parameter',
    'custom-resource',
    'sdk',
  ],
  license: 'Apache-2.0',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  gitignore: common_exclude,
  npmignore: common_exclude,
  releaseToNpm: false
});


project.synth();
