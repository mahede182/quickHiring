import type { Job, JobsApiResponse } from '@/@types/job';

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type FetchJobsParams = {
    limit?: number;
    page?: number;
    category?: string;
    location?: string;
    search?: string;
    jobType?: string;
};

export async function fetchJobs(params: FetchJobsParams = {}): Promise<{
    jobs: Job[];
    pagination: { total: number; page: number; limit: number; totalPages: number };
}> {
    const searchParams = new URLSearchParams();

    if (params.limit) searchParams.set('limit', String(params.limit));
    if (params.page) searchParams.set('page', String(params.page));
    if (params.category) searchParams.set('category', params.category);
    if (params.location) searchParams.set('location', params.location);
    if (params.search) searchParams.set('search', params.search);
    if (params.jobType) searchParams.set('jobType', params.jobType);

    const url = `${API_URL}/jobs?${searchParams.toString()}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            console.error(`API error: ${res.status} ${res.statusText}`);
            return { jobs: [], pagination: { total: 0, page: 1, limit: 10, totalPages: 0 } };
        }

        const data: JobsApiResponse = await res.json();

        if (!data.success) {
            console.error(`API returned failure: ${data.message}`);
            return { jobs: [], pagination: { total: 0, page: 1, limit: 10, totalPages: 0 } };
        }

        return {
            jobs: data.data.jobs,
            pagination: data.data.pagination,
        };
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return { jobs: [], pagination: { total: 0, page: 1, limit: 10, totalPages: 0 } };
    }
}
