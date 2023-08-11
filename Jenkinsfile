pipeline {
  agent any
  stages {
    stage('Build the react app') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Docker Image Build') {
      steps {
        sh 'npm run image_build'
      }
    }
    stage('Docker Push') {
      steps {
        sh 'docker push react-app-my'
      }
    }
  }
}