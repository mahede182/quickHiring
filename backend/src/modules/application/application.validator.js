const { body } = require("express-validator");

const createApplicationValidator = [
    body("jobId")
        .notEmpty()
        .withMessage("Job ID is required")
        .isInt({ gt: 0 })
        .withMessage("Job ID must be a positive integer"),
    body("name").trim().notEmpty().withMessage("Applicant name is required"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),
    body("resumeLink")
        .trim()
        .notEmpty()
        .withMessage("Resume link is required")
        .isURL()
        .withMessage("Resume link must be a valid URL"),
    body("coverNote")
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Cover note cannot exceed 2000 characters"),
];

module.exports = { createApplicationValidator };
