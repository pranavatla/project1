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
          // Run the Docker container as root
          sh 'docker run -t -d -w /var/lib/jenkins/workspace/jenkins1 -v /var/lib/jenkins/workspace/jenkins1:/var/lib/jenkins/workspace/jenkins1:rw,z -v /var/lib/jenkins/workspace/jenkins1@tmp:/var/lib/jenkins/workspace/jenkins1@tmp:rw,z -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** node:16-alpine cat'
          
          // Install Docker inside the Docker container using sudo
          sh 'sudo apk --no-cache add docker'

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
