'use client';

import { Button } from '@/components/ui/button';
import { Briefcase, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">Quickhire</span>
            </div>
            <p className="text-sm text-gray-300">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Get job notifications</h4>
            <p className="text-sm text-gray-300">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded bg-slate-800 text-white text-sm placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 px-4">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Quickhire. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-lg">tw</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-lg">ig</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
