import * as cdk from 'aws-cdk-lib';
import * as eks from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';

export class EksAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, cluster: eks.Cluster, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Kubernetes Deployment that uses the ECR Docker image
    const appLabels = { app: 'my-app' };
    const appContainer = cluster.addManifest('AppContainer', {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: { name: 'my-app' },
      spec: {
        replicas: 2,
        selector: { matchLabels: appLabels },
        template: {
          metadata: { labels: appLabels },
          spec: {
            containers: [
              {
                name: 'my-app',
                image: 'YOUR_ECR_IMAGE_URI', // Replace with your ECR image URI
              },
            ],
          },
        },
      },
    });
  }
}
