import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Navbar from '@components/Navbar'
import ServiceSection from '@components/ServiceSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </main>
  ) 
}
