#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkCodeStack } from '../lib/aws-cdk-app-stack';
import { EksStack } from '../lib/aws-cdk-eks';
import { EksAppStack } from '../lib/aws-eks-app';
import { VpcStack } from '../lib/aws-vpc';

const app = new cdk.App();
const testStack = new AwsCdkCodeStack(app, 'TestStack', {
    env: {
        region: 'ap-southeast-2',
    },
});

const vpcStack = new VpcStack(app, 'VpcStack', {
    env: {
        region: 'ap-southeast-2',
    },
});

const eksStack = new EksStack(app, 'EksStack', vpcStack.vpc, {
    env: {
        region: 'ap-southeast-2',
    },
});

// Instantiate the new stack, passing the EKS cluster as a parameter
const deployApp = new EksAppStack(app, 'EksAppStack', eksStack.cluster, {
    env: {
        region: 'ap-southeast-2',
    },
});
eksStack.addDependency(vpcStack);
deployApp.addDependency(eksStack)