const { Router } = require("express");
const { createApplication, getApplications, getApplicationById } = require("./application.controller");
const { createApplicationValidator } = require("./application.validator");
const validate = require("../../common/middleware/validate.middleware");

const router = Router();

router.post("/", createApplicationValidator, validate, createApplication);
router.get("/", getApplications);
router.get("/:id", getApplicationById);

module.exports = router;
