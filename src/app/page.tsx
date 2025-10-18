import HeroSection from '@/components/HeroSection'
import OurWorkSection from '@/components/OurWorkSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OurWorkSection />
      <Footer />
    </main>
  )
}
