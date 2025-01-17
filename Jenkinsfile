pipeline{
    agent any
    environment {
        MONGODB_URI = 'mongodb://127.0.0.1:27017/mytaskdb'
        DOCKER_REGISTRY_URL = "myregistry.docker.com"
        DOCKER_IMAGE_TAG = "latest"
    }
    
    stages{
        stage('BuildBackend'){
            steps{
                script{
                    sh 'cd server && npm start'
                }
            }
        }
        
        stage('Test Bachend'){
            steps{
                script{
                    sh 'cd server && npm test'
                }
            }
        }
        
        stage('Build Frontend'){
            steps{
                script{
                    sh 'cd client && npm install'
                    sh 'cd client && npm run build'
                }
            }
        }
        
        stage('Build Docker Image'){
             steps{
                 script{
                    sh 'docker-compose build'
                 }
            }
        }
        
        stage('Push Docker Image'){
            steps{
                script{
                    sh 'docker-compose push docker-compose.yaml'
                }
            }
        }
    }
}
