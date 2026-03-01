'use client';

import type { Job } from '@/@types/job';
import type { FeaturedJob } from '@/@types/featuredJob';
import type { LatestJob } from '@/@types/latestJob';
import { useState } from 'react';
import { HeroSection } from '@/components/heroSection';
import { CompaniesSection } from '@/components/companiesSection';
import { CategoriesSection } from '@/components/categoriesSection';
import { CTASection } from '@/components/ctaSection';
import { FeaturedJobsSection } from '@/components/featuredJobsSection';
import { LatestJobsSection } from '@/components/latestJobsSection';
import { JobModal } from '@/components/jobModal';
import { fetchJobById } from '@/lib/client-api';

type Props = {
    featuredJobs: FeaturedJob[];
    latestJobs: LatestJob[];
    allJobs: Job[];
};

export function HomeClient({ featuredJobs, latestJobs, allJobs }: Props) {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    async function handleJobClick(jobId: number) {
        // Try to find in already-loaded data first
        const cached = allJobs.find((j) => j.id === jobId);
        if (cached) {
            setSelectedJob(cached);
            return;
        }
        // Fallback: fetch from API
        const job = await fetchJobById(jobId);
        if (job) setSelectedJob(job);
    }

    return (
        <>
            <HeroSection allJobs={allJobs} onJobClick={handleJobClick} />
            <CompaniesSection />
            <CategoriesSection />
            <CTASection />
            <FeaturedJobsSection jobs={featuredJobs} onJobClick={handleJobClick} />
            <LatestJobsSection jobs={latestJobs} onJobClick={handleJobClick} />

            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </>
    );
}
