'use client';

import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 space-y-6 text-primary-foreground">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Start posting jobs today
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/90">
                Free for 30 days. No credit card required. Just a simple sign up form.
              </p>
            </div>

            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-fit">
              Sign Up for Free
            </Button>
          </div>

          {/* Right Content - Dashboard Mock */}
          <div className="relative hidden lg:block">
            <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="h-2 w-20 bg-muted rounded" />
                  <div className="flex gap-2">
                    <div className="h-2 w-2 bg-muted rounded-full" />
                    <div className="h-2 w-2 bg-muted rounded-full" />
                    <div className="h-2 w-2 bg-muted rounded-full" />
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-12 bg-muted rounded" />
                  <div className="h-12 bg-primary/20 rounded" />
                  <div className="h-12 bg-primary/10 rounded" />
                  <div className="h-12 bg-muted rounded" />
                </div>

                {/* Chart Mock */}
                <div className="space-y-2 pt-2">
                  <div className="flex gap-1 items-end">
                    <div className="flex-1 h-20 bg-primary rounded-t" />
                    <div className="flex-1 h-16 bg-primary/60 rounded-t" />
                    <div className="flex-1 h-24 bg-primary/40 rounded-t" />
                    <div className="flex-1 h-14 bg-primary/20 rounded-t" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Jobs Posted</div>
                    <div className="font-semibold text-lg text-primary">12</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Applications</div>
                    <div className="font-semibold text-lg text-primary">67</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Hired</div>
                    <div className="font-semibold text-lg text-primary">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
