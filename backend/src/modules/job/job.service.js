const db = require("../../config/database");

const findAll = async ({ category, location, search, jobType, offset, limit }) => {
    const conditions = [];
    const values = [];
    let paramIndex = 1;

    if (category) {
        conditions.push(`category ILIKE $${paramIndex++}`);
        values.push(`%${category}%`);
    }
    if (location) {
        conditions.push(`location ILIKE $${paramIndex++}`);
        values.push(`%${location}%`);
    }
    if (jobType) {
        conditions.push(`job_type = $${paramIndex++}`);
        values.push(jobType);
    }
    if (search) {
        conditions.push(
            `(title ILIKE $${paramIndex} OR company ILIKE $${paramIndex} OR description ILIKE $${paramIndex})`
        );
        values.push(`%${search}%`);
        paramIndex++;
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    const [jobs, countRow] = await Promise.all([
        db.any(
            `SELECT * FROM jobs ${where} ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
            [...values, limit, offset]
        ),
        db.one(`SELECT COUNT(*)::int AS total FROM jobs ${where}`, values),
    ]);

    return { jobs, total: countRow.total };
};

const findById = (id) => {
    return db.oneOrNone("SELECT * FROM jobs WHERE id = $1", [id]);
};

const create = ({ title, company, location, category, description, salary, jobType }) => {
    return db.one(
        `INSERT INTO jobs (title, company, location, category, description, salary, job_type)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [title, company, location, category, description, salary || "Negotiable", jobType || "Full-time"]
    );
};

const remove = async (id) => {
    const job = await db.oneOrNone("SELECT * FROM jobs WHERE id = $1", [id]);
    if (!job) return null;

    await db.none("DELETE FROM jobs WHERE id = $1", [id]);
    return job;
};

module.exports = { findAll, findById, create, remove };
