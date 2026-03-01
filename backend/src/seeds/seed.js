require("dotenv").config();
const pgp = require("pg-promise")();

const connStr = process.env.DATABASE_URL || "postgresql://postgres:@localhost:5432/quickhire?schema=public";
const ssl = connStr.includes("render.com") ? { rejectUnauthorized: false } : false;

const db = pgp({
    connectionString: connStr,
    ssl,
});

const jobs = [
    ["Senior Frontend Developer", "TechCorp", "San Francisco, CA", "Engineering", "We are looking for an experienced Frontend Developer proficient in React, TypeScript, and modern CSS frameworks.", "$120,000 - $150,000", "Full-time"],
    ["Backend Engineer", "DataFlow Inc.", "New York, NY", "Engineering", "Join our backend team to design and implement scalable APIs using Node.js and PostgreSQL.", "$110,000 - $140,000", "Full-time"],
    ["UI/UX Designer", "CreativeHub", "Remote", "Design", "We need a talented UI/UX Designer to create beautiful and intuitive interfaces for web and mobile apps.", "$90,000 - $115,000", "Remote"],
    ["DevOps Engineer", "CloudNine Solutions", "Austin, TX", "Engineering", "Manage CI/CD pipelines, infrastructure as code (Terraform), and cloud services (AWS).", "$125,000 - $155,000", "Full-time"],
    ["Marketing Intern", "GrowthLab", "Chicago, IL", "Marketing", "Assist with social media campaigns, email marketing, and content creation.", "$20/hr", "Internship"],
    ["Product Manager", "InnoVenture", "Seattle, WA", "Product", "Lead cross-functional teams to define, build, and launch products.", "$130,000 - $160,000", "Full-time"],
    ["Data Analyst", "InsightMetrics", "Remote", "Data", "Analyze large datasets to provide actionable business insights using SQL, Python, and Tableau.", "$85,000 - $105,000", "Remote"],
    ["Part-time Customer Support", "HelpDesk Pro", "Denver, CO", "Support", "Provide excellent customer support via chat and email. Flexible hours.", "$25/hr", "Part-time"],
    ["Mobile Developer (React Native)", "AppFactory", "Los Angeles, CA", "Engineering", "Build cross-platform mobile applications using React Native.", "$105,000 - $135,000", "Contract"],
    ["Full Stack Developer", "QuickHire", "Remote", "Engineering", "Work on both the frontend (Next.js) and backend (Node.js/Express) of our job platform.", "$100,000 - $130,000", "Remote"],
];

const seed = async () => {
    try {
        console.log("Connecting to PostgreSQL...");

        await db.none(`
            DROP TABLE IF EXISTS applications;
            DROP TABLE IF EXISTS jobs;
        `);

        await db.none(`
            CREATE TABLE jobs (
                id SERIAL PRIMARY KEY,
                title VARCHAR(150) NOT NULL,
                company VARCHAR(255) NOT NULL,
                location VARCHAR(255) NOT NULL,
                category VARCHAR(100) NOT NULL,
                description TEXT NOT NULL,
                salary VARCHAR(100) DEFAULT 'Negotiable',
                job_type VARCHAR(20) DEFAULT 'Full-time'
                    CHECK (job_type IN ('Full-time', 'Part-time', 'Contract', 'Remote', 'Internship')),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await db.none(`
            CREATE TABLE applications (
                id SERIAL PRIMARY KEY,
                job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                resume_link TEXT NOT NULL,
                cover_note TEXT DEFAULT '',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(job_id, email)
            );
        `);

        const insertJob = pgp.helpers.insert(
            jobs.map(([title, company, location, category, description, salary, job_type]) => ({
                title,
                company,
                location,
                category,
                description,
                salary,
                job_type,
            })),
            ["title", "company", "location", "category", "description", "salary", "job_type"],
            "jobs"
        ) + " RETURNING id";

        const inserted = await db.many(insertJob);
        console.log(`Inserted ${inserted.length} jobs`);

        await db.none(
            `INSERT INTO applications (job_id, name, email, resume_link, cover_note)
             VALUES ($1, $2, $3, $4, $5)`,
            [inserted[0].id, "Jane Doe", "jane.doe@example.com", "https://example.com/resume/jane-doe.pdf", "I am very excited about this opportunity and believe my 5 years of frontend experience make me a great fit."]
        );
        console.log("Inserted 1 sample application");

        console.log("Seeding complete!");
        process.exit(0);
    } catch (error) {
        console.error("Seeding error:", error.message);
        process.exit(1);
    }
};

seed();
