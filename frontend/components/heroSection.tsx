'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
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
            <div className="space-y-3">
              {/* Mobile: stacked, Desktop: inline */}
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
                    className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="p-1.5">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-full text-sm">
                    Search my job
                  </Button>
                </div>
              </div>

              {/* Popular Tags */}
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Popular : </span>
                {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag, i, arr) => (
                  <span key={tag} className="hover:text-primary cursor-pointer transition-colors">
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
