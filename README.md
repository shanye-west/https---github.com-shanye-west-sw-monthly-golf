# Monthly Golf PWA

A Progressive Web Application for managing monthly golf events, built with React/Vite, Express, and Neon PostgreSQL.

## Project Structure

- `client/` - React/Vite frontend application
- `server/` - Express backend API server

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Neon PostgreSQL database account

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the server directory with your Neon PostgreSQL credentials:
   ```
   DATABASE_URL=your_neon_postgres_connection_string
   PORT=3000
   ```
4. Create a `.env` file in the client directory:
   ```
   VITE_API_URL=http://localhost:3000
   ```
5. Start the development servers:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:client` - Start frontend development server
- `npm run dev:server` - Start backend development server
- `npm run build` - Build both frontend and backend
- `npm run start` - Start the production server

## Technologies Used

- Frontend:
  - React
  - Vite
  - TypeScript
  - TailwindCSS
  - PWA features

- Backend:
  - Express
  - TypeScript
  - Neon PostgreSQL
  - Prisma ORM

## License

ISC 