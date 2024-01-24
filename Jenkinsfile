pipeline {
  agent any
  
  stages {
    stage('Test') {
      steps {
        // Use the host's Docker socket to run Docker commands
        script {
          sh 'docker run -v /var/run/docker.sock:/var/run/docker.sock -w /var/lib/jenkins/workspace/jenkins1 -v /var/lib/jenkins/workspace/jenkins1:/var/lib/jenkins/workspace/jenkins1:rw,z -v /var/lib/jenkins/workspace/jenkins1@tmp:/var/lib/jenkins/workspace/jenkins1@tmp:rw,z node:16-alpine cat'
        }

        // Install Node.js in the Docker container
        sh 'docker run -v /var/run/docker.sock:/var/run/docker.sock -w /var/lib/jenkins/workspace/jenkins1 -v /var/lib/jenkins/workspace/jenkins1:/var/lib/jenkins/workspace/jenkins1:rw,z -v /var/lib/jenkins/workspace/jenkins1@tmp:/var/lib/jenkins/workspace/jenkins1@tmp:rw,z node:16-alpine apk add --no-cache nodejs'

        // Verify Node.js installation
        sh 'docker run -v /var/run/docker.sock:/var/run/docker.sock -w /var/lib/jenkins/workspace/jenkins1 -v /var/lib/jenkins/workspace/jenkins1:/var/lib/jenkins/workspace/jenkins1:rw,z -v /var/lib/jenkins/workspace/jenkins1@tmp:/var/lib/jenkins/workspace/jenkins1@tmp:rw,z node:16-alpine node --version'
      }
    }
  }
}
