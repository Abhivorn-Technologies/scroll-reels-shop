import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Features } from "@/components/sections/Features";
import { ReelsShowcase } from "@/components/sections/ReelsShowcase";
import { SellerDashboard } from "@/components/sections/SellerDashboard";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AICommerce } from "@/components/sections/AICommerce";
import { AppDownload } from "@/components/sections/AppDownload";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <h1 className="sr-only">SCROLME — AI-powered social commerce platform</h1>
      <Navbar />
      <HeroSection />
      <Features />
      <ReelsShowcase />
      <SellerDashboard />
      <HowItWorks />
      <AICommerce />
      <AppDownload />
      <Testimonials />
      <Footer />
    </main>
  );
}