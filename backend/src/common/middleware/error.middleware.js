const config = require("../../config");

const notFound = (req, res, next) => {
    const error = new Error(`Not Found – ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, _req, res, _next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: config.nodeEnv === "development" ? err.stack : undefined,
    });
};

module.exports = { notFound, errorHandler };
