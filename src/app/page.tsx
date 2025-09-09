import AgencySection from '@/components/AgencySection'
import ContentSection from '@/components/ContentSection'
import EditingProcessSection from '@/components/EditingProcessSection'
import HeroSection from '@/components/HeroSection'
import OurWorkSection from '@/components/OurWorkSection'
import CompanyIntroSection from '@/components/CompanyIntroSection'
import VideoTestimonials from '@/components/VideoTestimonials'
import AIToolsSection from '@/components/AIToolsSection'
import CreatorCompany from '@/components/CreatorCompany'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OurWorkSection />
      <CompanyIntroSection />
      <ContentSection />
      <AgencySection />
      <EditingProcessSection />
      <AIToolsSection />
      <CreatorCompany />
      <VideoTestimonials />
      <Footer />
    </main>
  )
}
