import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HomeClient } from '@/components/homeClient';
import { fetchJobs } from '@/lib/api';
import { mapJobToFeaturedJob, mapJobToLatestJob } from '@/lib/mappers';

export const metadata = {
  title: 'Quickhire - Find Your Dream Job',
  description: 'Discover 5000+ job opportunities. Find your perfect job match on Quickhire.',
};

export default async function Home() {
  const { jobs } = await fetchJobs({ limit: 10, page: 1 });

  const featuredJobs = jobs.slice(0, 8).map(mapJobToFeaturedJob);
  const latestJobs = jobs.map(mapJobToLatestJob);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomeClient
        featuredJobs={featuredJobs}
        latestJobs={latestJobs}
        allJobs={jobs}
      />
      <Footer />
    </main>
  );
}
