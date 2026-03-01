# QuickHire

A full-stack job listing platform where users can browse jobs, search by keyword/location, and submit applications — built with **Next.js** and **Express + PostgreSQL**.

---

## Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| **Backend**  | Node.js, Express 4, pg-promise              |
| **Database** | PostgreSQL (local or Render)                |
| **Validation** | express-validator                        |

---# QuickHire — Job Listing & Application Platform

## 🌐 Live Demo

| Service    | URL                                                         |
| ---------- | ----------------------------------------------------------- |
| 🖥 Frontend | [quickhiring-frontend.onrender.com](https://quickhiring-frontend.onrender.com) |
| 🔧 Backend  | [https://quickhiring-1.onrender.com/](https://quickhiring-1.onrender.com/)         |
| 🐘 Database | `postgresql://quickhiring_user:****@dpg-d6i9seogjchc73d79dv0-a.singapore-postgres.render.com/quickhiring` |

## 📺 Preview

https://github.com/user-attachments/assets/eeaa440d-2669-44a9-8a64-f4f3b4387f48


## Project Structure

```
quickHire/
├── backend/            # Express REST API
│   ├── src/
│   │   ├── config/     # DB connection, env config, table init
│   │   ├── common/     # Response helpers, error & validation middleware
│   │   ├── modules/
│   │   │   ├── job/         # Job CRUD (controller, routes, service, validator)
│   │   │   └── application/ # Application submit & list
│   │   ├── seeds/      # Database seeder (10 jobs + 1 sample application)
│   │   ├── app.js      # Express app setup
│   │   └── server.js   # Server bootstrap
│   └── .env.example
├── frontend/           # Next.js App Router
│   ├── app/            # Pages & layout
│   ├── components/     # UI sections (Hero, Featured Jobs, Latest Jobs, Modal, etc.)
│   ├── @types/         # TypeScript type definitions
│   ├── lib/            # API utilities, mappers, constants
│   └── public/         # Static images
└── README.md
```

---

## Features

- **Job Listing** — Featured and latest jobs fetched from the backend via SSR
- **Search** — Real-time search by job title/keyword and location
- **Job Detail Modal** — Click any job card to view full details
- **Apply** — Submit applications (name, email, resume link, cover note) directly from the modal
- **Responsive** — Mobile-first design with Tailwind CSS

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **PostgreSQL** (local or remote — Render, Neon, Supabase, etc.)
- **yarn** or **npm**

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd quickHire
```

### 2. Backend Setup

```bash
cd backend
yarn install
```

Create a `.env` file (or copy from `.env.example`):

```bash
cp .env.example .env
```

| Variable       | Description                  | Default                                                        |
| -------------- | ---------------------------- | -------------------------------------------------------------- |
| `PORT`         | Server port                  | `5000`                                                         |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:@localhost:5432/quickhire?schema=public` |
| `NODE_ENV`     | Environment                  | `development`                                                  |

> If using a local database, create it first:
> ```sql
> CREATE DATABASE quickhire;
> ```

Seed the database:

```bash
yarn seed
```

Start the backend:

```bash
yarn dev      # development (nodemon, auto-reload)
yarn start    # production
```

Backend runs at **http://localhost:5000**.

### 3. Frontend Setup

```bash
cd frontend
yarn install   # or: pnpm install
```

Create `.env.local`:

```
API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
yarn dev
```


---

## API Endpoints

### Jobs

| Method   | Endpoint        | Description            |
| -------- | --------------- | ---------------------- |
| `GET`    | `/api/jobs`     | List jobs (filterable) |
| `GET`    | `/api/jobs/:id` | Get job by ID          |
| `POST`   | `/api/jobs`     | Create a job           |
| `DELETE` | `/api/jobs/:id` | Delete a job           |

**Query params for `GET /api/jobs`:**

| Param      | Type   | Description                             |
| ---------- | ------ | --------------------------------------- |
| `search`   | string | Search in title, company, description   |
| `category` | string | Filter by category                      |
| `location` | string | Filter by location                      |
| `jobType`  | string | Filter by job type                      |
| `page`     | number | Page number (default: 1)                |
| `limit`    | number | Results per page (default: 10, max: 50) |

### Applications

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| `POST` | `/api/applications`     | Submit an application  |
| `GET`  | `/api/applications`     | List all applications  |
| `GET`  | `/api/applications/:id` | Get application by ID  |

**Application fields (`POST /api/applications`):**

| Field        | Type   | Required | Description                 |
| ------------ | ------ | -------- | --------------------------- |
| `jobId`      | number | Yes      | ID of the job to apply for  |
| `name`       | string | Yes      | Applicant's full name       |
| `email`      | string | Yes      | Applicant's email           |
| `resumeLink` | string | Yes      | URL to resume               |
| `coverNote`  | string | No       | Optional cover note (max 2000 chars) |

---

## Response Format

**Success:**

```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": { ... }
}
```

**Validation error:**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```

---

## Scripts

### Backend (`/backend`)

| Script       | Command          | Description                |
| ------------ | ---------------- | -------------------------- |
| `yarn dev`   | `nodemon`        | Dev server with auto-reload |
| `yarn start` | `node`           | Production server          |
| `yarn seed`  | `node seeds/seed.js` | Seed database with sample data |

### Frontend (`/frontend`)

| Script        | Command       | Description           |
| ------------- | ------------- | --------------------- |
| `yarn dev`    | `next dev`    | Dev server            |
| `yarn build`  | `next build`  | Production build      |
| `yarn start`  | `next start`  | Start production build |
| `yarn lint`   | `eslint .`    | Lint the codebase     |

---

## License

ISC
