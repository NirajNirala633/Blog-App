# Blog Microservices

This repository contains the microservices for a blog application. The microservices are built using NestJS and Prisma.

## Microservices

- **Comment Service**: Manages comments on posts.
- **Post Service**: Manages blog posts.
- **User Service**: Manages user authentication and profiles.

## Project Structure

```
blog-microservices/
  comment-service/
  post-service/
  user-service/
```

## Getting Started

### Prerequisites

- Node.js
- Docker (optional, for running the services in containers)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NirajNirala633/Blog-App
cd blog-microservices
```

2. Install dependencies for each service:

```bash
cd comment-service
npm install
cd ../post-service
npm install
cd ../user-service
npm install
```

### Running the Services

#### Using Docker

1. Build and run the Docker containers:

```bash
docker-compose up --build
```

#### Without Docker

1. Set up the environment variables for each service by creating a `.env` file in each service directory.

2. Start each service:

```bash
cd comment-service
npm run start:dev
cd ../post-service
npm run start:dev
cd ../user-service
npm run start:dev
```

### Running Tests

1. Run tests for each service:

```bash
cd comment-service
npm run test
cd ../post-service
npm run test
cd ../user-service
npm run test
```

## Deployment

Refer to the [NestJS deployment documentation](https://docs.nestjs.com/deployment) for more information on deploying your NestJS applications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
