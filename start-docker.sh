#!/bin/bash

echo "Starting arifn.github.io Jekyll website in Docker container..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Error: Docker is not running. Please start Docker first."
    exit 1
fi

# Build and start the container
docker-compose up --build

echo "Your website should now be accessible at http://localhost:4000"