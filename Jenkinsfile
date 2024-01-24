pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  environment {
    GIT_CREDENTIALS = credentials('jenkinspw')
  }
  stages {
    stage('Checkout') {
      steps {
        script {
          // Install Git in the Docker image
          sh 'apk add --no-cache git'

          // Configure Git
          withCredentials([usernamePassword(credentialsId: 'jenkinspw', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
            sh 'git config --global credential.helper "store --file=$HOME/.git-credentials" && git config --global user.email "pranavatla@gmail.com" && git config --global user.name "Sai Pranav Atla"'
          }

          // Checkout the code
          checkout scm
        }
      }
    }

    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}
