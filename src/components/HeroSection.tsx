import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { RevealText } from "@/components/ui/RevealText";
import { Shield, Star, Award } from "lucide-react";

/* ────────────────────────────────
   Animated counter hook
──────────────────────────────── */
const useCounter = (end: number, duration = 2, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 20);
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration * 1000 / stepTime));
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const stats = [
  { value: 20, suffix: "+", label: "Años de Trayectoria", icon: Award },
  { value: 500, suffix: "+", label: "Casos Resueltos", icon: Shield },
  { value: 98, suffix: "%", label: "Satisfacción", icon: Star },
];

const HeroSection = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Particles config — generated once
  const particles = useRef(
    Array.from({ length: 18 }, () => ({
      size: Math.random() * 3 + 1.5,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 30}%`,
      duration: `${Math.random() * 8 + 6}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
    }))
  ).current;

  const c1 = useCounter(stats[0].value, 2.5, statsInView);
  const c2 = useCounter(stats[1].value, 2.5, statsInView);
  const c3 = useCounter(stats[2].value, 2.5, statsInView);
  const counts = [c1, c2, c3];

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: backgroundY, opacity }}
      >
        <img src={heroBg} alt="Justicia y ley" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/97 via-background/40 to-transparent" />
      </motion.div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: p.bottom,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Decorative vertical rule */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent z-[2] origin-top hidden md:block"
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-40 lg:pt-48 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-primary/40 rounded-none bg-background/30 backdrop-blur-md"
              style={{ animation: "badgePulse 3s ease-in-out infinite" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary/90">
                Excelencia Jurídica
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <RevealText text="Defendemos tus" delay={0.3} className="block" />
            <RevealText text="derechos, tu libertad" delay={0.4} className="block" />
            <RevealText text="y futuro con" delay={0.5} className="block" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-gold-gradient italic font-light pr-2"
              style={{ fontSize: "inherit" }}
            >
              experiencia
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground font-sans-body font-light leading-relaxed mb-12 max-w-xl opacity-90"
          >
            Soluciones legales estratégicas respaldadas por años de trayectoria. Construimos relaciones basadas en la absoluta transparencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-sans-body font-semibold text-xs tracking-[0.2em] uppercase rounded-none hover:bg-gold-light transition-colors duration-500 gold-border-glow"
            >
              Solicitar Asesoría
            </motion.a>
            <motion.a
              whileHover={{ borderBottomColor: "hsl(var(--gold))", color: "hsl(var(--gold))", x: 4 }}
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-b border-transparent text-foreground/80 font-sans-body font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all duration-500"
            >
              Nuestros Servicios
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/10 max-w-2xl"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.5} />
                </div>
                <div className="stat-number font-cormorant font-light text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-none">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="text-[10px] font-sans-body font-semibold tracking-[0.2em] uppercase text-white/40 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
