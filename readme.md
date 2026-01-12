# Campus Smart Portal API

MERN backend (Express + MongoDB/Mongoose). Work in progress.

# Project Goal

 Centralized campus portal for room/equipment booking + academic content (courses, syllabus, assignments, mid/final exams).

## Requirements

- Node.js 20+
- MongoDB (Atlas or local)

## Run locally

1. npm install
2. Copy `.env.example` → `.env` and fill values
3. npm run dev

## Implemented so far

- ✅ MongoDB connection (Mongoose)
- ✅ Server bootstrap (Express)
- ✅ Health endpoints:
  - `GET /api/v1/healthz` (liveness)
  - `GET /api/v1/readyz` (readiness: checks Mongo connection)
- ✅ Central error handling middleware
- ✅ Utilities: async handler wrapper, API error/response helpers, HttpError handler
- ✅ **User Model** (`User` schema):
  - Fields: `fullName`, `email`, `password`, `role` (`student`/`faculty`/`admin`), `department`, `registrationNumber`, `semester`, `section`, `designation`, `avatarUrl`, `isActive`
  - Security: bcrypt pre-save hook (`SALT_ROUNDS=10`)
  - JWT helpers: `generateAccessToken()`, `generateRefreshToken()`
  - Methods: `isPasswordCorrect(password)`

## Environment variables

Create a `.env` file in the project root (do not commit it):

- PORT=3000
- MONGODB_URL=sample
- DB_NAME=sample
- CORS_ORIGIN=sample
- ACCESS_TOKEN_SECRET=yourSecret
- ACCESS_TOKEN_EXPIRY=15m
- REFRESH_TOKEN_SECRET=yourSecret
- REFRESH_TOKEN_EXPIRY=14d

## Verify

- http://localhost:3000/api/v1/healthz
- http://localhost:3000/api/v1/readyz
