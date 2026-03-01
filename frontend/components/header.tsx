'use client';

import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Quickhire</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
              Browse Companies
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
