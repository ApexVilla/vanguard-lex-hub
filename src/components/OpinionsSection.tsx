import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { opinionsData } from "@/data/opinionsData";
import { Link } from "react-router-dom";

const OpinionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const latestOpinions = opinionsData.slice(0, 3);

  return (
    <section id="opiniones" className="py-24 lg:py-40 bg-white relative overflow-hidden text-slate-900" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block"
            >
              Criterio Jurídico
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-slate-900"
            >
              Opiniones{" "}
              <span className="font-cormorant italic text-gold-gradient font-light pr-2">Jurisprudenciales</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/opiniones"
              className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-primary group"
            >
              Ver biblioteca completa
              <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestOpinions.map((opinion, i) => (
            <motion.div
              key={opinion.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group gradient-border-card"
            >
              <Link to={`/opiniones/${opinion.slug}`} className="block h-full">
                <div className="bg-navy/90 backdrop-blur-xl border border-primary/20 h-full p-8 rounded-2xl flex flex-col transition-all duration-500 hover:border-primary/50 hover:-translate-y-3 shadow-[0_40px_80px_rgba(0,0,0,0.7)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_hsl(var(--gold)/0.15)] relative overflow-hidden noise-overlay">
                  {/* Article Number */}
                  <div className="opinion-number absolute top-4 right-6 text-8xl pointer-events-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                      <BookOpen size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {opinion.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif-display mb-4 leading-tight group-hover:text-primary transition-colors flex-grow text-white relative z-10">
                    {opinion.title}
                  </h3>

                  <p className="text-sm text-white/60 font-light leading-relaxed mb-8 line-clamp-3 relative z-10">
                    {opinion.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-4 text-[9px] text-white/40 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary/60" /> {opinion.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-primary/60" /> {opinion.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                    />
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionsSection;
