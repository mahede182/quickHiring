const pgp = require("pg-promise")();
const config = require("./index");

const ssl = config.nodeEnv !== "development" || config.databaseUrl.includes("render.com")
    ? { rejectUnauthorized: false }
    : false;

const db = pgp({
    connectionString: config.databaseUrl,
    ssl,
});

db.connect()
    .then((obj) => {
        console.log("PostgreSQL connected");
        obj.done();
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
        process.exit(1);
    });

module.exports = db;
