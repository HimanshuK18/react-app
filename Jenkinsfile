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
    stage('Docker Push') {
      steps {
        bat 'docker push react-app-my'
      }
    }
  }
}