# Node.js Docker Artifact Pipeline

This project demonstrates the **Containerization** phase of the CI/CD lifecycle. 
It transforms a Node.js/Express API into a production-ready Docker image, 
optimizing for size (using Alpine Linux) and security (excluding devDependencies).

## Core Topics Covered:
1. Writing a multi-layer `Dockerfile`.
2. Using `.dockerignore` to reduce attack surface and image size.
3. Mapping container ports to host environments.
4. Preparing an "Artifact" for automated registry pushing.
