'use client';

import type { LatestJob } from '@types/latestJob';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function LatestJobsSection() {
  const jobs: LatestJob[] = [
    { id: 1, company: 'Nomad', role: 'Social Media Assistant', location: 'Paris, France', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job1.png' },
    { id: 2, company: 'Netlify', role: 'Social Media Assistant', location: 'Paris, France', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job2.png' },
    { id: 3, company: 'Dropbox', role: 'Brand Designer', location: 'San Francisco, USA', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job3.png' },
    { id: 4, company: 'Maze', role: 'Brand Designer', location: 'San Francisco, USA', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job4.png' },
    { id: 5, company: 'Terraform', role: 'Interactive Developer', location: 'Hamburg, Germany', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job5.png' },
    { id: 6, company: 'Udacity', role: 'Interactive Developer', location: 'Hamburg, Germany', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job6.png' },
    { id: 7, company: 'Packer', role: 'HR Manager', location: 'Lucern, Switzerland', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job7.png' },
    { id: 8, company: 'Webflow', role: 'HR Manager', location: 'Lucern, Switzerland', tags: ['Full-Time', 'Marketing', 'Design'], logo: '/assets/images/latestJobs/Job8.png' },
  ];

  return (
    <section className="relative bg-[#f0f7ff] py-8 sm:py-12 lg:py-14 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/latestJobs/bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Latest <span className="text-section-highlight">jobs open</span>
          </h2>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/80 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary flex items-center gap-3 sm:gap-4"
            >
              {/* Company Logo */}
              <Image
                src={job.logo}
                alt={job.company}
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-contain flex-shrink-0"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{job.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.company} • {job.location}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${tag === 'Full-Time'
                        ? 'border border-primary/30 text-primary'
                        : tag === 'Marketing'
                          ? 'bg-orange-50 text-orange-600 border border-orange-200'
                          : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
