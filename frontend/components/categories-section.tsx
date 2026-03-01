'use client';

import { ArrowRight, Palette, BarChart3, MessageSquare, DollarSign, Monitor, Code, Briefcase, Users } from 'lucide-react';
import Link from 'next/link';

export function CategoriesSection() {
  const categories = [
    { icon: Palette, title: 'Design', jobs: 235, color: 'bg-blue-100' },
    { icon: BarChart3, title: 'Sales', jobs: 756, color: 'bg-orange-100' },
    { icon: MessageSquare, title: 'Marketing', jobs: 140, color: 'bg-purple-500', textColor: 'text-white' },
    { icon: DollarSign, title: 'Finance', jobs: 555, color: 'bg-green-100' },
    { icon: Monitor, title: 'Technology', jobs: 430, color: 'bg-red-100' },
    { icon: Code, title: 'Engineering', jobs: 640, color: 'bg-pink-100' },
    { icon: Briefcase, title: 'Business', jobs: 211, color: 'bg-yellow-100' },
    { icon: Users, title: 'Human Resource', jobs: 346, color: 'bg-indigo-100' },
  ];

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Explore by <span className="text-primary">category</span>
            </h2>
          </div>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2">
            Show all jobs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isHighlight = category.title === 'Marketing';
            return (
              <div
                key={category.title}
                className={`rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isHighlight
                    ? `${category.color} ${category.textColor || 'text-foreground'}`
                    : `${category.color} bg-opacity-50 text-foreground`
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-75">{category.jobs} jobs available</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
