import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { opinionsData } from "@/data/opinionsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Opinions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = useMemo(() => {
    const cats = new Set(opinionsData.map(op => op.category));
    return ["Todas", ...Array.from(cats)];
  }, []);

  const filteredOpinions = useMemo(() => {
    return opinionsData.filter(op => {
      const matchesSearch = op.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           op.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || op.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans-body">
      <Navbar />
      
      {/* Hero Section & Search - Consolidated Authority Head (NOT STICKY) */}
      <section className="pt-48 pb-16 relative overflow-hidden bg-navy">
        {/* Decorative background depth elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-8 block px-3 py-1 bg-white/5 w-fit rounded-sm border border-white/10"
            >
              Biblioteca Legal y Doctrina
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif-display font-medium mb-10 leading-[1.1] text-white tracking-tight"
            >
              Opiniones <span className="text-gold-gradient italic font-serif-display font-medium pr-3">Jurisprudenciales</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 font-sans-body font-light leading-relaxed mb-0 max-w-2xl"
            >
              Análisis técnico y doctrina jurídica actualizada sobre los temas más relevantes del derecho venezolano, para una defensa informada y estratégica.
            </motion.p>
          </div>

          {/* Search & Filters integrated in the Hero block (WILL SCROLL WITH CONTENT) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-between pt-8 border-t border-white/10"
          >
            <div className="relative w-full md:max-w-xl group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <input 
                type="text" 
                placeholder="Escudriñar biblioteca jurisprudencial..." 
                className="w-full pl-14 bg-white/5 border border-white/10 focus:border-primary/50 transition-all py-5 rounded-2xl text-white placeholder:text-white/20 text-lg font-sans-body font-light shadow-inner outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap border ${
                    selectedCategory === cat 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                      : "bg-white/5 text-white/50 hover:bg-white/10 border-white/10 shadow-lg"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opinions Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative aurias for background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredOpinions.map((opinion, idx) => (
                <motion.div
                  layout
                  key={opinion.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group"
                >
                  <Link to={`/opiniones/${opinion.slug}`} className="block h-full">
                    <div className="bg-navy/90 backdrop-blur-xl border border-primary/20 h-full p-8 rounded-2xl flex flex-col transition-all duration-700 hover:border-primary/60 hover:-translate-y-4 shadow-[0_40px_80px_rgba(0,0,0,0.7)] group-hover:shadow-primary/40 relative">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                          <opinion.icon size={22} strokeWidth={1.5} />
                        </div>
                        <Badge variant="outline" className="text-[9px] uppercase tracking-widest py-1 border-primary/30 text-primary bg-primary/5">
                          {opinion.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold font-serif-display mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2 text-white">
                        {opinion.title}
                      </h3>
                      
                      <p className="text-sm text-white/70 font-sans-body font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                        {opinion.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-primary/60" />
                            {opinion.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} className="text-primary/60" />
                            {opinion.readTime}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredOpinions.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-2xl font-serif-display font-medium mb-2 text-slate-900">No encontramos coincidencias</h3>
              <p className="text-slate-500">Prueba con otros términos o categorías.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opinions;
