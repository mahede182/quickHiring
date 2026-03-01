import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { CompaniesSection } from '@/components/companies-section';
import { CategoriesSection } from '@/components/categories-section';
import { CTASection } from '@/components/cta-section';
import { FeaturedJobsSection } from '@/components/featured-jobs-section';
import { LatestJobsSection } from '@/components/latest-jobs-section';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Quickhire - Find Your Dream Job',
  description: 'Discover 5000+ job opportunities. Find your perfect job match on Quickhire.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CompaniesSection />
      <CategoriesSection />
      <CTASection />
      <FeaturedJobsSection />
      <LatestJobsSection />
      <Footer />
    </main>
  );
}
