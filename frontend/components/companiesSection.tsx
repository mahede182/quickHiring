'use client';

import type { Company } from '@types/company';
import Image from 'next/image';

export function CompaniesSection() {
  const companies: Company[] = [
    { name: 'Vodafone', logo: '/assets/images/company/vodafone.png' },
    { name: 'Intel', logo: '/assets/images/company/intel.png' },
    { name: 'Tesla', logo: '/assets/images/company/tesla.png' },
    { name: 'AMD', logo: '/assets/images/company/amd.png' },
    { name: 'Talkit', logo: '/assets/images/company/talkit.png' },
  ];

  return (
    <section className="bg-background py-6 sm:py-8 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="text-left text-sm text-muted-foreground font-medium mb-6">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.logo}
              alt={company.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
