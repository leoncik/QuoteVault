# QuoteVault

QuoteVault is a full-stack web application built to demonstrate modern development practices with Vue.js (frontend) and NestJS (backend). It provides a simple yet elegant interface for managing and displaying memorable quotes.

> ⚠️ **Project Status:** Active Development  
> This project is currently under construction — the backend and several frontend features are still being implemented.

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
- Expose the app on your local machines.
- The client will be available on: http://localhost:5173
- The server will be available on: http://localhost:3000
- The API documentation will be available on: http://localhost:3000/api

## Screenshots

<img width="1281" height="854" alt="image" src="https://github.com/user-attachments/assets/20e65250-c40e-47c2-984e-3fdf56d01f7d" />

<img width="599" height="884" alt="image" src="https://github.com/user-attachments/assets/407bc355-693c-4c7f-8036-afc7bec1aa02" />

<img width="1281" height="854" alt="image" src="https://github.com/user-attachments/assets/618d5b6f-74b5-4eff-81b1-578fc50186e4" />


