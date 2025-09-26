pipeline {
    agent any

    environment {
        REPO_URL   = 'https://github.com/venkateshkallu/Portfolio-task.git'
        BRANCH     = 'main'
        EC2_USER   = 'ubuntu'
        EC2_HOST   = '13.60.94.247'
        NGINX_DIR  = '/var/www/html'
        SSH_KEY_ID = 'EC2-key'   // Jenkins credential ID
        APP_DIR    = '/home/ubuntu/Portfolio-task'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Deploy on EC2') {
            steps {
                sshagent (credentials: ["${SSH_KEY_ID}"]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                            # remove old repo if exists
                            if [ -d "${APP_DIR}" ]; then
                                rm -rf ${APP_DIR}
                            fi

                            # clone fresh copy
                            git clone -b ${BRANCH} ${REPO_URL} ${APP_DIR}

                            # go into repo
                            cd ${APP_DIR}

                            # install deps and build
                            npm install
                            npm run build

                            # deploy build to nginx
                            sudo rm -rf ${NGINX_DIR}/*
                            sudo cp -r build/* ${NGINX_DIR}/

                            # restart nginx
                            sudo systemctl restart nginx
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Site hosted at http://${EC2_HOST}"
        }
        failure {
            echo "❌ Deployment failed!"
        }
    }