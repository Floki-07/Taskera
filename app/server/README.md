# Taskera Server

Backend server for Taskera - A modern task management application built with TypeScript, Express.js, and PostgreSQL.

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Passport.js with Google OAuth 2.0
- **Email Service**: Nodemailer
- **Input Validation**: Zod

## Project Structure

```
src/
├── lib/           # Library code and utilities
├── middlewares/   # Express middlewares
├── routers/       # API route definitions
├── types/         # Zod type definitions
├── utils/         # Utility functions
└── index.ts       # Application entry point
```

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm/yarn package manager
- Google OAuth credentials

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AaryanNarayani/Taskera
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```env
CLIENT_URL="http://localhost:5173"
CLIENT_ID="google Oauth client ID"
CLIENT_SECRET="google Oauth client secret"
EMAIL_USER="yourmail@gmail.com"
EMAIL_PASSWORD="generated App password"
JWT_SECRET="secret"
DATABASE_URL="postgresql://db url"
```


## Development

Start the development server:
```bash
npx tsc -b
```

```bash
node dist/index.js
```

## Database Management

This project uses Prisma as an ORM. Common Prisma commands:

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```


## Authentication

The server uses Passport.js with Google OAuth 2.0 for authentication. To set up:

1. Create a Google Cloud Project
2. Enable OAuth 2.0
3. Configure OAuth consent screen
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs
6. Update `.env` with credentials

## Email Service

Email functionality is handled by Nodemailer. To use Gmail:

1. Enable 2-factor authentication in your Google account
2. Generate an App Password
3. Use these credentials in `.env`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CLIENT_URL` | Frontend application URL |
| `CLIENT_ID` | Google OAuth client ID |
| `CLIENT_SECRET` | Google OAuth client secret |
| `EMAIL_USER` | Gmail address for notifications |
| `EMAIL_PASSWORD` | Gmail app password |
| `JWT_SECRET` | Secret for JWT signing |
| `DATABASE_URL` | PostgreSQL connection string |


## Security Features

- CORS configuration
- JWT authentication
- Input validation with Zod
- Session management
- Rate limiting (TODO)
- Request sanitization (TODO)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## TODO

- [ ] Implement rate limiting
- [ ] Set up automated testing
- [ ] Add API documentation using Swagger/OpenAPI
- [ ] Implement caching layer
- [ ] Add logging service
