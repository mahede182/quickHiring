# QuickHire Backend API

RESTful API for the **QuickHire** job listing platform built with **Express** and **PostgreSQL** (`pg-promise`).

---

## Tech Stack

| Layer       | Technology         |
| ----------- | ------------------ |
| Runtime     | Node.js            |
| Framework   | Express 4          |
| Database    | PostgreSQL         |
| DB Client   | pg-promise         |
| Validation  | express-validator  |
| Environment | dotenv             |

---

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── index.js
│   │   ├── database.js
│   │   └── init-db.js
│   ├── common/
│   │   ├── helpers/
│   │   │   └── response.helper.js
│   │   └── middleware/
│   │       ├── error.middleware.js
│   │       └── validate.middleware.js
│   ├── modules/
│   │   ├── job/
│   │   │   ├── job.controller.js
│   │   │   ├── job.routes.js
│   │   │   ├── job.service.js
│   │   │   └── job.validator.js
│   │   └── application/
│   │       ├── application.controller.js
│   │       ├── application.routes.js
│   │       ├── application.service.js
│   │       └── application.validator.js
│   ├── seeds/
│   │   └── seed.js
│   ├── app.js
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **PostgreSQL** running locally (or a remote URI)

### 1. Install dependencies

```bash
cd backend
yarn install
```

### 2. Configure environment

```bash
cp .env.example .env
```

| Variable       | Description                   | Default                                                        |
| -------------- | ----------------------------- | -------------------------------------------------------------- |
| `PORT`         | Server port                   | `5000`                                                         |
| `DATABASE_URL` | PostgreSQL connection string  | `postgresql://postgres:@localhost:5432/quickhire?schema=public` |
| `NODE_ENV`     | `development` / `production`  | `development`                                                  |

> Make sure the database exists before starting:
> ```sql
> CREATE DATABASE quickhire;
> ```

### 3. Seed the database (optional)

```bash
yarn seed
```

Inserts 10 sample jobs and 1 sample application.

### 4. Start the server

```bash
yarn dev      # development (nodemon)
yarn start    # production
```

API available at `http://localhost:5000`.

---

## API Endpoints

### Jobs

| Method   | Endpoint          | Description              | Access |
| -------- | ----------------- | ------------------------ | ------ |
| `GET`    | `/api/jobs`       | List jobs (filterable)   | Public |
| `GET`    | `/api/jobs/:id`   | Get job details          | Public |
| `POST`   | `/api/jobs`       | Create a job             | Admin  |
| `DELETE` | `/api/jobs/:id`   | Delete a job             | Admin  |

**Query params for `GET /api/jobs`:**

| Param      | Type   | Description                              |
| ---------- | ------ | ---------------------------------------- |
| `search`   | string | Search in title, company, description    |
| `category` | string | Filter by category                       |
| `location` | string | Filter by location                       |
| `jobType`  | string | Filter by job type                       |
| `page`     | number | Page number (default: 1)                 |
| `limit`    | number | Results per page (default: 10, max: 50)  |

### Applications

| Method   | Endpoint                | Description              | Access |
| -------- | ----------------------- | ------------------------ | ------ |
| `POST`   | `/api/applications`     | Submit application       | Public |
| `GET`    | `/api/applications`     | List applications        | Admin  |
| `GET`    | `/api/applications/:id` | Get application details  | Admin  |

---

## Example Requests

### Create a Job

```bash
curl -X POST http://localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Junior Developer",
    "company": "StartupXYZ",
    "location": "Remote",
    "category": "Engineering",
    "description": "Work on exciting projects with our team.",
    "salary": "$60,000 - $80,000",
    "jobType": "Remote"
  }'
```

### Submit an Application

```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "jobId": 1,
    "name": "John Smith",
    "email": "john@example.com",
    "resumeLink": "https://example.com/resume.pdf",
    "coverNote": "I would love to join your team!"
  }'
```

---

## Response Format

```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {}
}
```

Validation errors:

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

## License

ISC
