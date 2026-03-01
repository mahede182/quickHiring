import type { FeaturedJob } from '@/@types/featuredJob';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  jobs: FeaturedJob[];
  onJobClick: (jobId: number) => void;
};

export function FeaturedJobsSection({ jobs, onJobClick }: Props) {

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
              onClick={() => onJobClick(job.id)}
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
