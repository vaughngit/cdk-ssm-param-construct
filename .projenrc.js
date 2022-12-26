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
  autoApproveUpgrades: true,
  // dependabot: true,
  autoApproveOptions: {
    allowedUsernames: ['github-bot', 'vaughngit', '*'],
    //secret: 'PROJEN_GITHUB_WORKFLOWS',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: 'vt-ssm-param-cdk-construct', /* The "name" in package.json. */
  gitignore: common_exclude,
  npmignore: common_exclude,
  //releaseToNpm: false,
  //buildWorkflow: false,
  publishToNuget: {
    dotNetNamespace: 'Vaughntech.cdk',
    packageId: 'construct.ssm.parameter',
  },

  gitpod: true,
});

project.gitpod.addCustomTask({
  init: 'yarn install && yarn run build',
  command: 'yarn run watch',
});

project.gitpod.addCustomTask({
  name: 'ConfigAlias',
  command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
});

project.gitpod.addCustomTask({
  name: 'Initialize & Configure AWS',
  command: 'bash $GITPOD_REPO_ROOT/configure_aws_with_gitpod.sh',
});

project.gitpod.addCustomTask({
  name: 'Install DOTNET 6.0',
  command: 'bash $GITPOD_REPO_ROOT/configure_dotnet.sh',
});

project.gitpod.addVscodeExtensions(
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);


project.synth();
