const { Router } = require("express");
const { getJobs, getJobById, createJob, deleteJob } = require("./job.controller");
const { createJobValidator, jobIdParam } = require("./job.validator");
const validate = require("../../common/middleware/validate.middleware");

const router = Router();

router.get("/", getJobs);
router.get("/:id", jobIdParam, validate, getJobById);
router.post("/", createJobValidator, validate, createJob);
router.delete("/:id", jobIdParam, validate, deleteJob);

module.exports = router;
