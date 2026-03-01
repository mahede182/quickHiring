const applicationService = require("./application.service");
const { successResponse, errorResponse } = require("../../common/helpers/response.helper");

const createApplication = async (req, res) => {
    try {
        const { jobId, name, email, resumeLink, coverNote } = req.body;
        const result = await applicationService.create({ jobId, name, email, resumeLink, coverNote });

        if (result.error) return errorResponse(res, result.error, result.status);

        return successResponse(res, result.data, "Application submitted successfully", 201);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const getApplications = async (req, res) => {
    try {
        const { jobId, page = 1, limit = 10 } = req.query;
        const pageNum = Math.max(Number(page), 1);
        const limitNum = Math.min(Math.max(Number(limit), 1), 50);
        const offset = (pageNum - 1) * limitNum;

        const { applications, total } = await applicationService.findAll({
            jobId,
            offset,
            limit: limitNum,
        });

        return successResponse(res, {
            applications,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum),
            },
        }, "Applications retrieved successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const getApplicationById = async (req, res) => {
    try {
        const application = await applicationService.findById(req.params.id);
        if (!application) return errorResponse(res, "Application not found", 404);

        return successResponse(res, application, "Application retrieved successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

module.exports = { createApplication, getApplications, getApplicationById };
