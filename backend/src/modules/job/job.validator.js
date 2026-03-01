const { body, param } = require("express-validator");

const createJobValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Job title is required")
        .isLength({ max: 150 })
        .withMessage("Title cannot exceed 150 characters"),
    body("company").trim().notEmpty().withMessage("Company name is required"),
    body("location").trim().notEmpty().withMessage("Location is required"),
    body("category").trim().notEmpty().withMessage("Category is required"),
    body("description").trim().notEmpty().withMessage("Description is required"),
    body("salary").optional().trim(),
    body("jobType")
        .optional()
        .isIn(["Full-time", "Part-time", "Contract", "Remote", "Internship"])
        .withMessage("Job type must be Full-time, Part-time, Contract, Remote, or Internship"),
];

const jobIdParam = [
    param("id").isInt({ gt: 0 }).withMessage("Job ID must be a positive integer"),
];

module.exports = { createJobValidator, jobIdParam };
