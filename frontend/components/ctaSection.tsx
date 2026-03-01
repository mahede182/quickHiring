'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function CTASection() {
  return (
    <section className="bg-background py-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px]">
          {/* Background */}
          <Image
            src="/assets/images/cta/bg.png"
            alt=""
            fill
            className="object-cover pointer-events-none"
          />

          {/* Left Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-5 text-white">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold leading-tight">
                Start posting<br />jobs today
              </h2>
              <p className="mt-4 text-sm text-white/80">
                Start posting jobs for only $10.
              </p>
            </div>
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold w-fit">
              Sign Up For Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
