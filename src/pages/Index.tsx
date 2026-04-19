import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import OpinionsSection from "@/components/OpinionsSection";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Auras (Subtle Green) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw] bg-primary/3 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[5%] w-[40vw] h-[40vw] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <OpinionsSection />
        <LocationSection />
        <FounderSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
