import type { Job } from '@/@types/job';
import type { JobsApiResponse } from '@/@types/job';
import { API_BASE_URL } from '@/lib/constants';

export async function searchJobs(query: string, location?: string): Promise<Job[]> {
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (location) params.set('location', location);
    params.set('limit', '10');

    const url = `${API_BASE_URL}/jobs?${params.toString()}`;

    try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const data: JobsApiResponse = await res.json();
        return data.success ? data.data.jobs : [];
    } catch (err) {
        console.error('searchJobs error:', err);
        return [];
    }
}

export async function fetchJobById(id: number): Promise<Job | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/jobs/${id}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data.success ? data.data : null;
    } catch {
        return null;
    }
}
