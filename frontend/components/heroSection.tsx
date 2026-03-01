'use client';

import type { Job } from '@/@types/job';
import { Button } from '@/components/ui/button';
import { searchJobs } from '@/lib/client-api';
import Image from 'next/image';
import { useState, useRef } from 'react';

type Props = {
  allJobs: Job[];
  onJobClick: (jobId: number) => void;
};

export function HeroSection({ allJobs, onJobClick }: Props) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState<Job[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  async function handleSearch() {
    if (!query.trim() && !location.trim()) return;
    setSearching(true);
    const jobs = await searchJobs(query.trim(), location.trim());
    setResults(jobs);
    setShowResults(true);
    setSearching(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSearch();
  }

  function handleResultClick(jobId: number) {
    setShowResults(false);
    onJobClick(jobId);
  }

  return (
    <section className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16">
      {/* Background Image */}
      <Image
        src="/assets/images/hero/bg.png"
        alt=""
        fill
        className="object-cover object-center pointer-events-none"
        priority
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
                Discover<br />
                more than{' '}
                <span className="relative inline-block text-section-highlight">
                  5000+ Jobs
                  <Image
                    src="/assets/images/hero/underline.png"
                    alt=""
                    width={240}
                    height={16}
                    className="absolute left-0 -bottom-2 w-full h-auto pointer-events-none"
                  />
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search Box */}
            <div className="space-y-3 relative" ref={containerRef}>
              <div className="flex flex-col sm:flex-row bg-white rounded shadow-sm border border-border">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-border">
                  <Image
                    src="/assets/images/hero/search.png"
                    alt="Search"
                    width={18}
                    height={18}
                    className="flex-shrink-0 opacity-40"
                  />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 border-border sm:w-48">
                  <Image
                    src="/assets/images/hero/location.png"
                    alt="Location"
                    width={18}
                    height={18}
                    className="flex-shrink-0 opacity-40"
                  />
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="p-1.5">
                  <Button
                    onClick={handleSearch}
                    disabled={searching}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-full text-sm"
                  >
                    {searching ? 'Searching...' : 'Search my job'}
                  </Button>
                </div>
              </div>

              {/* Search Results Dropdown */}
              {showResults && (
                <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-white border border-border rounded-lg shadow-lg max-h-80 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="p-4 text-sm text-muted-foreground text-center">No jobs found.</p>
                  ) : (
                    results.map((job) => (
                      <button
                        key={job.id}
                        type="button"
                        onClick={() => handleResultClick(job.id)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-border last:border-b-0"
                      >
                        <p className="text-sm font-medium text-foreground">{job.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {job.company} · {job.location} · {job.job_type}
                        </p>
                      </button>
                    ))
                  )}
                  <button
                    type="button"
                    onClick={() => setShowResults(false)}
                    className="w-full text-center py-2 text-xs text-muted-foreground hover:text-foreground transition-colors border-t border-border"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* Popular Tags */}
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Popular : </span>
                {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag, i, arr) => (
                  <span
                    key={tag}
                    className="hover:text-primary cursor-pointer transition-colors"
                    onClick={() => { setQuery(tag); }}
                  >
                    {tag}{i < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image placeholder area */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-section-highlight/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
