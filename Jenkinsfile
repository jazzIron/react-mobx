pipeline {
    agent any
    stages {
        stage('Docker build') {
            steps {
                script {
                    try {
                        sh 'docker-compose down'
                        sh 'docker-compose build'
                    } catch (e) {
                        sh 'echo Docker build Fail!!!'
                        slackSend (channel: '#jenkins-dev', color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                    }
                }
            }
        }
        stage('Start') {
            steps {
                script {
                    try {
                        sh 'docker-compose up -d'
                        slackSend (channel: '#jenkins-dev', color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                    } catch (e) {
                        sh 'echo Docker-compose Fail!!!'
                        slackSend (channel: '#jenkins-dev', color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                    }
                }
            }
        }
    }
}
