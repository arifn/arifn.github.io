#!/bin/bash

echo "Stopping arifn.github.io Docker container..."

# Stop and remove containers
docker-compose down

echo "Container has been stopped."