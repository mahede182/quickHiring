import type { Job } from '@/@types/job';
import type { FeaturedJob } from '@/@types/featuredJob';
import type { LatestJob } from '@/@types/latestJob';

const FEATURED_LOGOS = Array.from(
    { length: 8 },
    (_, i) => `/assets/images/featureJobs/Company${i + 1}.png`
);

const LATEST_LOGOS = Array.from(
    { length: 8 },
    (_, i) => `/assets/images/latestJobs/Job${i + 1}.png`
);

export function mapJobToFeaturedJob(job: Job, index: number): FeaturedJob {
    return {
        id: job.id,
        company: job.company,
        role: job.title,
        location: job.location,
        description: job.description,
        tags: [job.category],
        logo: FEATURED_LOGOS[index % FEATURED_LOGOS.length],
        type: job.job_type,
    };
}

export function mapJobToLatestJob(job: Job, index: number): LatestJob {
    return {
        id: job.id,
        company: job.company,
        role: job.title,
        location: job.location,
        tags: [job.job_type, job.category],
        logo: LATEST_LOGOS[index % LATEST_LOGOS.length],
    };
}
