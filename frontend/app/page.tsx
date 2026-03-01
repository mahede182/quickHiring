import { Header } from '@/components/header';
import { HeroSection } from '@/components/heroSection';
import { CompaniesSection } from '@/components/companiesSection';
import { CategoriesSection } from '@/components/categoriesSection';
import { CTASection } from '@/components/ctaSection';
import { FeaturedJobsSection } from '@/components/featuredJobsSection';
import { LatestJobsSection } from '@/components/latestJobsSection';
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
