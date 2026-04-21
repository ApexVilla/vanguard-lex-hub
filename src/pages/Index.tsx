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

// La lógica del cursor y la barra de progreso ahora es global y se movió a src/components/
const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Decorative Background Auras — Animated */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-blob-1 absolute top-[5%] -left-[15%] w-[55vw] h-[55vw] bg-primary/6 blur-[130px] rounded-full" />
        <div className="aurora-blob-2 absolute top-[35%] -right-[20%] w-[65vw] h-[65vw] bg-primary/4 blur-[160px] rounded-full" />
        <div className="aurora-blob-3 absolute bottom-[5%] -left-[5%] w-[45vw] h-[45vw] bg-primary/5 blur-[110px] rounded-full" />
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
