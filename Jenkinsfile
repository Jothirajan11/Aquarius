pipeline {
    agent any

    environment {
        // Set your environment variables
        DOCKER_REGISTRY = 'jothirajan1124' // Replace with your Docker Hub username
        IMAGE_NAME = 'vite-app'      // Replace with your image name
        REPO_URL = 'https://github.com/Jothirajan11/Aquarius.git' // Replace with your GitHub repo URL
        BRANCH = 'main'                            // Branch to pull from
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repository from GitHub..."
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    // Build the Docker image
                    sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                script {
                    // Log in to Docker Hub and push the image
                    withDockerRegistry([credentialsId: 'jothirajan', url: '']) {
                        sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                echo "Deploying the Docker container..."
                script {
                    // Run the Docker container
                    sh """
                    docker run -d --name ${IMAGE_NAME} \
                        -p 1000:5173 ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            script {
                // Clean up dangling images
                sh "docker image prune -f"
            }
        }
    }
}
