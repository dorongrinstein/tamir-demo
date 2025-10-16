# tamir-demo

A simple Node.js Hello World application.

## Getting Started

### Prerequisites
- Node.js installed on your machine (for local development)
- Docker installed (for containerized deployment)

### Running the Application Locally

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to `http://127.0.0.1:3001/`

You should see "Hello World!" displayed in your browser.

Alternatively, you can run:
```bash
node index.js
```

### Running with Docker

1. Build the Docker image:
```bash
docker build -t tamir-demo .
```

2. Run the container:
```bash
docker run -p 3001:3001 tamir-demo
```

3. Open your browser and navigate to `http://127.0.0.1:3001/`

To run the container in detached mode:
```bash
docker run -d -p 3001:3001 --name tamir-demo-app tamir-demo
```

To stop the container:
```bash
docker stop tamir-demo-app
```

## CI/CD with GitHub Actions

This repository includes a GitHub Actions workflow that automatically builds and pushes Docker images to Docker Hub when a pull request is created.

### Setup

To enable the workflow, you need to add a Docker Hub access token to your GitHub repository secrets:

1. Create a Docker Hub access token:
   - Go to [Docker Hub](https://hub.docker.com/)
   - Navigate to Account Settings → Security → Access Tokens
   - Click "New Access Token"
   - Give it a name (e.g., "github-actions") and create it
   - Copy the token (you won't be able to see it again)

2. Add the token to GitHub Secrets:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `DOCKERHUB_TOKEN`
   - Value: Paste the Docker Hub access token
   - Click "Add secret"

### How It Works

When a pull request is created:
- The workflow automatically builds a Docker image
- Tags it as `doron/tamir-demo:<commit-hash>` (first 7 characters of the commit SHA)
- Pushes the image to Docker Hub under the username `doron`

Example image tag: `doron/tamir-demo:a1b2c3d`
