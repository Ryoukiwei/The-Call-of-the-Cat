#!/bin/bash

# Build the Docker image
docker build -t my-app .

# Run the Docker container
docker run -p 5173:5173 my-app