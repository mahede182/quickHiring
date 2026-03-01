const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const jobRoutes = require("./modules/job/job.routes");
const applicationRoutes = require("./modules/application/application.routes");
const { notFound, errorHandler } = require("./common/middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.nodeEnv === "development") {
    app.use(morgan("dev"));
}

app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Welcome to the QuickHire API",
        version: "1.0.0",
    });
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
