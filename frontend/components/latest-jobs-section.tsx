'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

export function LatestJobsSection() {
  const jobs = [
    {
      id: 1,
      company: 'Social Media Assistant',
      location: 'Paris, France',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '📱',
      badge: 'New',
    },
    {
      id: 2,
      company: 'Social Media Assistant',
      location: 'Paris, France',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '📱',
      badge: 'New',
    },
    {
      id: 3,
      company: 'Brand Designer',
      location: 'San Francisco, US',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '🎨',
      badge: 'New',
    },
    {
      id: 4,
      company: 'Brand Designer',
      location: 'San Francisco, US',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '🎨',
      badge: 'New',
    },
    {
      id: 5,
      company: 'Interactive Developer',
      location: 'Hamburg, Germany',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '💻',
      badge: 'New',
    },
    {
      id: 6,
      company: 'Interactive Developer',
      location: 'Hamburg, Germany',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '💻',
      badge: 'New',
    },
    {
      id: 7,
      company: 'HR Manager',
      location: 'Lucerne, Switzerland',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '👥',
      badge: 'New',
    },
    {
      id: 8,
      company: 'HR Manager',
      location: 'Lucerne, Switzerland',
      tags: ['Full Time', 'Marketing', 'Design'],
      logo: '👥',
      badge: 'New',
    },
  ];

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Latest <span className="text-primary">jobs open</span>
            </h2>
          </div>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{job.company}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full text-primary">
                  {job.badge}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      tag === 'Full Time'
                        ? 'border border-primary/30 text-primary'
                        : 'bg-primary/10 text-primary'
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
