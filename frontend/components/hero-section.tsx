'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Search } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover more than{' '}
                <span className="text-primary">5000+ Jobs</span>
              </h1>
              <div className="mt-4 h-1.5 w-24 bg-primary rounded" />
            </div>

            <p className="text-base text-muted-foreground max-w-md">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search Box */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Job title, keyword"
                    className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-40"
                  />
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Search my job
              </Button>

              {/* Popular Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs text-muted-foreground font-medium">Popular:</span>
                <div className="flex flex-wrap gap-2">
                  {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded hover:border-primary"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative h-96 w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-block">
                    <div className="relative w-64 h-80 bg-primary/20 rounded-xl flex items-center justify-center">
                      <div className="text-primary/50 text-6xl">👨‍💼</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Geometric decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
