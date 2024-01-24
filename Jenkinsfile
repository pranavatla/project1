pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  environment {
    GIT_CREDENTIALS = credentials('jenkinspw')
  }
  stages {
    stage('Test') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'jenkinspw', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
          sh 'git config --global credential.helper "store --file=$HOME/.git-credentials" && git config --global user.email "pranavatla@gmai.com" && git config --global user.name "Sai Pranav Atla"'
          sh 'node --version'
        }
      }
    }
  }
}
