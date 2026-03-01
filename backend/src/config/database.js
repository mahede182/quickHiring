const pgp = require("pg-promise")();
const config = require("./index");

const db = pgp(config.databaseUrl);

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
