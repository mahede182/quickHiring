'use client';

import type { Category } from '@types/category';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CategoriesSection() {
  const categories: Category[] = [
    { icon: '/assets/images/explore/design.png', title: 'Design', jobs: 235, color: 'bg-blue-50 hover:bg-blue-100' },
    { icon: '/assets/images/explore/sales.png', title: 'Sales', jobs: 756, color: 'bg-orange-50 hover:bg-orange-100' },
    { icon: '/assets/images/explore/marketing.png', title: 'Marketing', jobs: 140, color: 'bg-primary text-white', highlight: true },
    { icon: '/assets/images/explore/finance.png', title: 'Finance', jobs: 325, color: 'bg-green-50 hover:bg-green-100' },
    { icon: '/assets/images/explore/technology.png', title: 'Technology', jobs: 436, color: 'bg-red-50 hover:bg-red-100' },
    { icon: '/assets/images/explore/engineering.png', title: 'Engineering', jobs: 542, color: 'bg-pink-50 hover:bg-pink-100' },
    { icon: '/assets/images/explore/bussiness.png', title: 'Business', jobs: 211, color: 'bg-yellow-50 hover:bg-yellow-100' },
    { icon: '/assets/images/explore/humanResorce.png', title: 'Human Resource', jobs: 346, color: 'bg-indigo-50 hover:bg-indigo-100' },
  ];

  return (
    <section className="bg-background py-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Explore by <span className="text-section-highlight">category</span>
          </h2>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`rounded-lg border border-border p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg ${category.color}`}
            >
              <div className="mb-4">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={48}
                  height={48}
                  className={`h-10 w-10 object-contain ${category.highlight ? 'brightness-0 invert' : ''}`}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-75">{category.jobs} jobs available</span>
                <ArrowRight className={`h-4 w-4 ${category.highlight ? 'text-white' : 'text-primary'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
