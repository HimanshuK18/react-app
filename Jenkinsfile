pipeline {
  agent any
  stages {
    stage('Build the react app') {
      steps {
        bat 'npm install  --force'
        bat 'npm run build'
      }
    }
    stage('Docker Image Build') {
      steps {
        bat 'npm run image_build'
      }
    }
    stage('Upload to ECR using AWS ECR Plugin') {
            steps {
                ecrUpload(
                    repositoryName: '<your-ecr-repository>',
                    imagePath: ".",
                    imageTag: 'latest',
                    forcePathStyle: false
                )
                }
            }
    }
  }
}