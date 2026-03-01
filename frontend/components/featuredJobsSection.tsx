'use client';

import type { FeaturedJob } from '@types/featuredJob';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedJobsSection() {
  const jobs: FeaturedJob[] = [
    {
      id: 1,
      company: 'Revolut',
      role: 'Email Marketing',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: ['Marketing', 'Design'],
      logo: '/assets/images/featureJobs/Company1.png',
      type: 'Full Time',
    },
    {
      id: 2,
      company: 'Dropbox',
      role: 'Brand Designer',
      location: 'San Francisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team f...',
      tags: ['Design', 'Business'],
      logo: '/assets/images/featureJobs/Company2.png',
      type: 'Full Time',
    },
    {
      id: 3,
      company: 'Pitch',
      role: 'Email Marketing',
      location: 'Berlin, Germany',
      description: 'Pitch is looking for Customer Manager to join marketing t...',
      tags: ['Marketing'],
      logo: '/assets/images/featureJobs/Company3.png',
      type: 'Full Time',
    },
    {
      id: 4,
      company: 'Blinklist',
      role: 'Visual Designer',
      location: 'Granada, Spain',
      description: 'Blinklist is looking for Visual Designer to help team desi...',
      tags: ['Design'],
      logo: '/assets/images/featureJobs/Company4.png',
      type: 'Full Time',
    },
    {
      id: 5,
      company: 'ClassPass',
      role: 'Product Designer',
      location: 'Manchester, UK',
      description: 'ClassPass is looking for Product Designer to help us...',
      tags: ['Marketing', 'Design'],
      logo: '/assets/images/featureJobs/Company5.png',
      type: 'Full Time',
    },
    {
      id: 6,
      company: 'Canva',
      role: 'Lead Designer',
      location: 'Ontario, Canada',
      description: 'Canva is looking for Lead Engineer to help develop n...',
      tags: ['Design', 'Business'],
      logo: '/assets/images/featureJobs/Company6.png',
      type: 'Full Time',
    },
    {
      id: 7,
      company: 'GoDaddy',
      role: 'Brand Strategist',
      location: 'Marseille, France',
      description: 'GoDaddy is looking for Brand Strategist to join the team...',
      tags: ['Marketing'],
      logo: '/assets/images/featureJobs/Company7.png',
      type: 'Full Time',
    },
    {
      id: 8,
      company: 'Twitter',
      role: 'Data Analyst',
      location: 'San Diego, US',
      description: 'Twitter is looking for Data Analyst to help team desi...',
      tags: ['Technology'],
      logo: '/assets/images/featureJobs/Company8.png',
      type: 'Full Time',
    },
  ];

  return (
    <section className="bg-background py-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Featured <span className="text-section-highlight">jobs</span>
          </h2>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            >
              {/* Header: Logo + Type */}
              <div className="flex items-center justify-between mb-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-contain"
                />
                <span className="px-3 py-1 text-xs font-medium border border-primary/30 rounded text-primary">
                  {job.type}
                </span>
              </div>

              {/* Role */}
              <h4 className="font-semibold text-foreground mb-1">{job.role}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                {job.company} · {job.location}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${tag === 'Marketing'
                      ? 'bg-orange-50 text-orange-600 border border-orange-200'
                      : tag === 'Design'
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : tag === 'Business'
                          ? 'bg-green-50 text-green-600 border border-green-200'
                          : 'bg-purple-50 text-purple-600 border border-purple-200'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
