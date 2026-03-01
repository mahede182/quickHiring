const db = require("../../config/database");

const create = async ({ jobId, name, email, resumeLink, coverNote }) => {
    const job = await db.oneOrNone("SELECT id FROM jobs WHERE id = $1", [jobId]);
    if (!job) return { error: "Job not found", status: 404 };

    const existing = await db.oneOrNone(
        "SELECT id FROM applications WHERE job_id = $1 AND email = $2",
        [jobId, email]
    );
    if (existing) return { error: "You have already applied to this job", status: 409 };

    const application = await db.one(
        `INSERT INTO applications (job_id, name, email, resume_link, cover_note)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [jobId, name, email, resumeLink, coverNote || ""]
    );

    return { data: application };
};

const findAll = async ({ jobId, offset, limit }) => {
    const conditions = [];
    const values = [];
    let paramIndex = 1;

    if (jobId) {
        conditions.push(`a.job_id = $${paramIndex++}`);
        values.push(jobId);
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    const [applications, countRow] = await Promise.all([
        db.any(
            `SELECT a.*, json_build_object('id', j.id, 'title', j.title, 'company', j.company, 'location', j.location) AS job
             FROM applications a
             JOIN jobs j ON j.id = a.job_id
             ${where}
             ORDER BY a.created_at DESC
             LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
            [...values, limit, offset]
        ),
        db.one(`SELECT COUNT(*)::int AS total FROM applications a ${where}`, values),
    ]);

    return { applications, total: countRow.total };
};

const findById = (id) => {
    return db.oneOrNone(
        `SELECT a.*, json_build_object('id', j.id, 'title', j.title, 'company', j.company, 'location', j.location, 'category', j.category) AS job
         FROM applications a
         JOIN jobs j ON j.id = a.job_id
         WHERE a.id = $1`,
        [id]
    );
};

module.exports = { create, findAll, findById };
