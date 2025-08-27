import HeroBanner from '@/components/HeroBanner'
import RecommendedActivities from '@/components/RecommendedActivities'
import RecommendedEvents from '@/components/RecommendedEvents'
import BlogFeedPreview from '@/components/BlogFeedPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <RecommendedActivities />
      <RecommendedEvents />
      <BlogFeedPreview />
    </main>
  )
}
