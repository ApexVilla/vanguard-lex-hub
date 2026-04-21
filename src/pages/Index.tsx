import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    let rafId: number;
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`;
        cursorRef.current.style.top = `${curY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Custom Cursor */}
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? "hovering" : ""}`} />
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX, width: "100%" }} />

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
