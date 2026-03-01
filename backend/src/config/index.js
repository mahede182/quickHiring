require("dotenv").config();

module.exports = {
    port: process.env.PORT || 5000,
    databaseUrl:
        process.env.DATABASE_URL ||
        "postgresql://postgres:@localhost:5432/quickhire?schema=public",
    nodeEnv: process.env.NODE_ENV || "development",
};
