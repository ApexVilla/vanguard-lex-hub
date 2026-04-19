import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { opinionsData } from "@/data/opinionsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, CheckCircle2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const OpinionDetail = () => {
  const { slug } = useParams();
  const article = opinionsData.find((op) => op.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans-body">
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <article className="pt-40 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs / Back */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <Link 
                to="/opiniones" 
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-primary transition-colors"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Volver a la biblioteca
              </Link>
            </motion.div>

            {/* Header */}
            <header className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {article.category}
                </div>
                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary/60" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary/60" /> {article.readTime}</span>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-serif-display font-bold leading-tight mb-8 text-slate-900"
              >
                {article.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between border-y border-slate-200 py-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-primary font-serif-display text-xl overflow-hidden">
                    V
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-900">{article.author}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Estratega Legal Senior</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 hover:border-primary/50 text-slate-600">
                    <Share2 size={16} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 hover:border-primary/50 text-slate-600">
                    <Bookmark size={16} />
                  </Button>
                </div>
              </motion.div>
            </header>

            {/* Content Area */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose prose-gold max-w-none"
            >
              <div className="text-xl md:text-2xl font-light leading-relaxed italic text-slate-600 mb-16 pl-8 border-l-2 border-primary/30">
                {article.excerpt}
              </div>

              <div className="space-y-12 text-lg font-light leading-loose text-slate-800 font-sans-body">
                {article.sections.map((section, idx) => {
                  switch (section.type) {
                    case "paragraph":
                      return <p key={idx}>{section.content}</p>;
                    
                    case "heading":
                      return (
                        <div key={idx} className="pt-8 text-slate-900">
                          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                            {section.title}
                          </h4>
                          <h2 className="text-3xl md:text-4xl font-serif-display font-bold">
                            {section.content}
                          </h2>
                        </div>
                      );

                    case "law-article":
                      return (
                        <div key={idx} className="bg-navy-light border border-white/10 rounded-2xl p-8 md:p-10 my-12 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-xl shadow-navy/10">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white/40">
                            <Scale size={40} />
                          </div>
                          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                             {section.title}
                          </h5>
                          {Array.isArray(section.content) ? (
                            <ul className="space-y-4 m-0 p-0 list-none">
                              {section.content.map((item, i) => (
                                <li key={i} className="text-base md:text-lg leading-relaxed text-white/80 flex gap-4">
                                  <span className="text-primary font-bold">{i + 1}.</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-lg md:text-xl leading-relaxed text-white/80 m-0 italic font-serif-display">
                              "{section.content}"
                            </p>
                          )}
                        </div>
                      );

                    case "quote":
                      return (
                        <blockquote key={idx} className="border-l-4 border-primary/50 pl-8 py-4 my-12 italic text-2xl font-serif-display font-light text-slate-600">
                          {section.content}
                        </blockquote>
                      );

                    case "list":
                      return (
                        <ul key={idx} className="space-y-4 my-8">
                          {(section.content as string[]).map((item, i) => (
                            <li key={i} className="flex gap-4 items-start text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );

                    default:
                      return null;
                  }
                })}

                {article.sections.length === 0 && (
                  <div className="bg-slate-50 p-10 rounded-2xl border-l-4 border-l-primary my-16">
                    <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2 text-slate-900">
                      <CheckCircle2 size={14} /> Nota Técnica
                    </h4>
                    <p className="m-0 text-sm md:text-base leading-relaxed text-slate-600 italic">
                      "El contenido completo de esta opinión está siendo digitalizado para ofrecer una experiencia interactiva sin precedentes en la consulta de jurisprudencia nacional."
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Footer of article */}
            <footer className="mt-24 pt-12 border-t border-slate-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 bg-slate-50 border border-slate-200 rounded-2xl px-8">
                <div>
                  <h4 className="text-xl font-serif-display font-medium mb-2 text-slate-900">¿Necesita asesoría sobre este tema?</h4>
                  <p className="text-sm text-slate-500 font-light">Nuestros expertos están listos para ayudarle con su caso específico.</p>
                </div>
                <Link 
                  to="/#contacto" 
                  className="px-10 py-4 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-gold-light transition-all shadow-xl shadow-primary/20"
                >
                  Consultar Ahora
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default OpinionDetail;
