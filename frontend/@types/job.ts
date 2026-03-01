export type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    category: string;
    description: string;
    salary: string;
    job_type: string;
    created_at: string;
    updated_at: string;
};

export type Pagination = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

export type JobsApiResponse = {
    success: boolean;
    message: string;
    data: {
        jobs: Job[];
        pagination: Pagination;
    };
};
