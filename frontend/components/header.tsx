'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-3 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <Image
              src="/assets/images/logo.png"
              alt="QuickHire"
              width={140}
              height={36}
              className="h-7 w-auto"
            />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Find Jobs
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Browse Companies
              </a>
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-primary font-semibold">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 px-5">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
