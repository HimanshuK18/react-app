//
//For automated tests of the complete example using bats and Terratest
//(which tests and deploys the example on AWS), see test.
module "example" {  
  source = "cloudposse/code-deploy/aws"
  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"
}

//Makefile Targets
Available targets:

  help                                Help screen
  help/all                            Display help for all targets
  help/short                          This help short screen
  lint                                Lint terraform code



//Configuration of deployment to stop when a CloudWatch alarm detects that a metric has fallen below or exceeded a defined threshold. alarms:   A list of alarms configured for the deployment group. ignore_poll_alarm_failure:   Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch.
object({    alarms                    = list(string)    ignore_poll_alarm_failure = bool  })

//any
{  "additional_tag_map": {},  "attributes": [],  "delimiter": null,  "descriptor_formats": {},  "enabled": true,  "environment": null,  "id_length_limit": null,  "label_key_case": null,  "label_order": [],  "label_value_case": null,  "labels_as_tags": [    "unset"  ],  "name": null,  "namespace": null,  "regex_replace_chars": null,  "stage": null,  "tags": {},  "tenant": null}

//Configuration of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.deployment_option:  Indicates whether to route deployment traffic behind a load balancer.   Possible values: WITH_TRAFFIC_CONTROL, WITHOUT_TRAFFIC_CONTROL.deployment_type:  Indicates whether to run an in-place deployment or a blue/green deployment.  Possible values: IN_PLACE, BLUE_GREEN.
object({    deployment_option = string    deployment_type   = string  })

//The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.Cannot be used in the same call as ec2TagSet.
set(object({    key   = string    type  = string    value = string  }))

//A list of sets of tag filters. If multiple tag groups are specified,any instance that matches to at least one tag filter of every tag group is selected.key:  The key of the tag filter.type:  The type of the tag filter, either KEY_ONLY, VALUE_ONLY, or KEY_AND_VALUE.value:  The value of the tag filter.
set(object(    {      ec2_tag_filter = set(object(        {          key   = string          type  = string          value = string        }      ))    }  ))

//Configuration block(s) of the ECS services for a deployment group.cluster_name:  The name of the ECS cluster. service_name:  The name of the ECS service.
list(object({    cluster_name = string    service_name = string  }))

//set(string)
[  "default"]

//type:  The type can either be FLEET_PERCENT or HOST_COUNT.value:  The value when the type is FLEET_PERCENT represents the minimum number of healthy instances   as a percentage of the total number of instances in the deployment.  When the type is HOST_COUNT, the value represents the minimum number of healthy instances as an absolute value.
object({    type  = string    value = number  })

//type:  Type of traffic routing config. One of TimeBasedCanary, TimeBasedLinear, AllAtOnce.interval:  The number of minutes between the first and second traffic shifts of a deployment.percentage:  The percentage of traffic to shift in the first increment of a deployment.
object({    type       = string    interval   = number    percentage = number  })

//list(string)
[  "DeploymentFailure"]

//See LICENSE for full details.
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
