const jobService = require("./job.service");
const { successResponse, errorResponse } = require("../../common/helpers/response.helper");

const getJobs = async (req, res) => {
    try {
        const { category, location, search, jobType, page = 1, limit = 10 } = req.query;
        const pageNum = Math.max(Number(page), 1);
        const limitNum = Math.min(Math.max(Number(limit), 1), 50);
        const offset = (pageNum - 1) * limitNum;

        const { jobs, total } = await jobService.findAll({
            category,
            location,
            search,
            jobType,
            offset,
            limit: limitNum,
        });

        return successResponse(res, {
            jobs,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum),
            },
        }, "Jobs retrieved successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const getJobById = async (req, res) => {
    try {
        const job = await jobService.findById(req.params.id);
        if (!job) return errorResponse(res, "Job not found", 404);

        return successResponse(res, job, "Job retrieved successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const createJob = async (req, res) => {
    try {
        const job = await jobService.create(req.body);
        return successResponse(res, job, "Job created successfully", 201);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const deleteJob = async (req, res) => {
    try {
        const job = await jobService.remove(req.params.id);
        if (!job) return errorResponse(res, "Job not found", 404);

        return successResponse(res, null, "Job deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

module.exports = { getJobs, getJobById, createJob, deleteJob };
