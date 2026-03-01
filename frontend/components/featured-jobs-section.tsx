'use client';

import { ArrowRight, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export function FeaturedJobsSection() {
  const jobs = [
    {
      id: 1,
      company: 'Email Marketing',
      location: 'Madrid, Spain',
      title: 'Email Marketing',
      description: 'We are looking for an Email Marketing specialist to join our company',
      tags: ['Marketing', 'Design'],
      logo: '📧',
    },
    {
      id: 2,
      company: 'Brand Designer',
      location: 'San Francisco, US',
      title: 'Brand Designer',
      description: 'Designer to help the team to create brand visual assets',
      tags: ['Design', 'Business'],
      logo: '🎨',
    },
    {
      id: 3,
      company: 'Pitch',
      location: 'Berlin, Germany',
      title: 'Pitch',
      description: 'Pitch is looking for a Customer Manager to help manage it customers',
      tags: ['Marketing', 'Design'],
      logo: '📈',
    },
    {
      id: 4,
      company: 'Front-end',
      location: 'Granada, Spain',
      title: 'Front-end Engineer',
      description: 'Engineer to help the team in the front end part',
      tags: ['Design', 'Development'],
      logo: '⚙️',
    },
    {
      id: 5,
      company: 'Product Designer',
      location: 'Manchester, UK',
      title: 'Product Designer',
      description: 'ClassPass is looking for Product Designer to help us',
      tags: ['Marketing', 'Design'],
      logo: '🎯',
    },
    {
      id: 6,
      company: 'Brand Designer',
      location: 'Ontario, Canada',
      title: 'Canva Designer',
      description: 'Canva is looking for Brand Designer to help develop in',
      tags: ['Design', 'Business'],
      logo: '🖼️',
    },
    {
      id: 7,
      company: 'Brand Strategist',
      location: 'Marseille, France',
      title: 'Brand Strategist',
      description: 'Gobakly is looking for Brand Designer to help on the team',
      tags: ['Marketing', 'Design'],
      logo: '🎪',
    },
    {
      id: 8,
      company: 'Data Analyst',
      location: 'San Diego, US',
      title: 'Twitter Data Analyst',
      description: 'Twitter is looking for Data Analyst to help team data',
      tags: ['Technology', 'Design'],
      logo: '📊',
    },
  ];

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured <span className="text-primary">jobs</span>
            </h2>
          </div>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            >
              {/* Company Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                  {job.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{job.company}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </p>
                </div>
              </div>

              {/* Job Title */}
              <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{job.title}</h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full Time Label */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-block px-2 py-1 text-xs font-medium border border-primary/30 rounded text-primary">
                  Full Time
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
