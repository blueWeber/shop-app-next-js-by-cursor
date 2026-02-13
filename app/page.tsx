import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CategoriesSection } from "@/components/categories-section"
import { HistorySection } from "@/components/history-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <CategoriesSection />
        <HistorySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}
