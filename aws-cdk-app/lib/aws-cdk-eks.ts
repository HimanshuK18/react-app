import * as eks from 'aws-cdk-lib/aws-eks';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class EksStack extends Stack {
  public readonly cluster: eks.Cluster;

  constructor(scope: Construct, id: string, vpc: ec2.Vpc, props?: StackProps) {
    super(scope, id, props);

    // Create an EKS Cluster
    this.cluster = new eks.Cluster(this, 'MyCluster', {
      vpc,
      defaultCapacity: 2,
      version: eks.KubernetesVersion.V1_24
    });

    // Add worker nodes to the cluster
    this.cluster.addAutoScalingGroupCapacity('WorkerGroup', {
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE2,
        ec2.InstanceSize.MICRO
      ),
      minCapacity: 2,
    });
  }
}
