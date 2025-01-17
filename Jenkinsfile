pipeline{
    agent any
    environment {
        MONGODB_URI = 'mongodb://127.0.0.1:27017/mytaskdb'
    }
    
    stages{
        
        stage('Checkout Code'){
            steps{
                script{
                    git url: 'https://github.com/shahab606/Task-Tracker.git' , branch: 'main'
                }    
            }
        } 
        
        
        
        stage('BuildBackend'){
            steps{
                script{
                    sh 'npm install express cors mongoose dotenv'
                    sh "echo Building backend for  ${env.NODE_ENV}"
                    sh "echo Using database url from mongodb://127.0.0.1:27017/mytaskdb"
                   //sh 'cd server && npm start'
                }
            }
        }
        
        //stage('Test Bachend'){
            //steps{
                //script{
                    //sh 'npm install --save-dev jest supertest'
                    //sh 'cd server && npm test'
                //}
            //}
        //}
        
        stage('Build Frontend'){
            steps{
                script{
                    sh 'npm install axios'
                    sh 'cd client && npm install'
                    sh 'cd client && npm run build'
                }
            }
        }
        
        stage('Docker Info'){
            steps{
                sh '''
                docker version
                docker info
                docker compose version
                curl --version
                jq --version
                '''
            }
        }
        stage('start Container'){
            steps{
                sh 'docker compose up -d --no-color --wait'
                sh 'docker compose ps'
                input 'Do you want stop container'
            }
        }
        
    }
    post{
        always{
            sh 'docker compose down --remove-orphans -v'
        }
    }
}
