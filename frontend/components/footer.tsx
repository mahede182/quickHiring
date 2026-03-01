'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src="/assets/images/logo.png"
              alt="QuickHire"
              width={140}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Companies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Advice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Docs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
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
                placeholder="Email Address"
                className="flex-1 px-3 py-2 rounded bg-slate-800 text-white text-sm placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              2021 © QuickHire. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {['f', '📷', '🎵', 'in', '🐦'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors text-xs">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
