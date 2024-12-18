pipeline {
    agent any

    environment {
        // Set your environment variables
        DOCKER_REGISTRY = 'jothirajan1124' // Replace with your Docker Hub username
        IMAGE_NAME = 'vite-app2'      // Replace with your image name
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
        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                script {
                    // Log in to Docker Hub and push the image
                    withDockerRegistry([credentialsId: 'demo', url: '']) {
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
                    docker run -p 1001:5173 -d --name demo ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }
}
