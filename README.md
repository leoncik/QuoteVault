# QuoteVault

QuoteVault is a full-stack web application built to demonstrate modern development practices with Vue.js (frontend) and NestJS (backend). It provides a simple yet elegant interface for managing and displaying memorable quotes.

The project is fully Dockerized for easy setup and consistent development environments.

## Table of contents

- [Features](#features)
- [Quick start (Dockerized setup)](#quick-start-dockerized-setup)
- [Screenshots](#screenshots)

## Features

- Frontend: Vue.js 3 with TypeScript and component-based architecture.
  - Server-state handling with [TanstackQuery](https://tanstack.com/)
  - Infinite scrolling to display quotes.
- Backend: NestJS with modular structure and RESTful API design
- Database: PostgreSQL.
- Dockerized: One-command startup using docker-compose
- API Integration: Full CRUD operations for quotes

## Quick start (Dockerized setup)

Make sure Docker is installed and running:

```sh
sudo systemctl start docker
```

Then launch the app with:

```sh
docker-compose up
```

The containers will automatically:

- Build and start the frontend and backend
- Connect to the configured database
- Expose the app on your local machine (default: http://localhost:5173/ for the client and http://localhost:3000/ for the server).

## Screenshots
