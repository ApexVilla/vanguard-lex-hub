import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, User, ArrowRight, Filter, ChevronRight } from "lucide-react";
import { opinionsData, OpinionArticle } from "@/data/opinionsData";
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
    <div className="min-h-screen bg-background text-foreground font-sans-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 block"
            >
              Biblioteca Legal
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif-display font-bold mb-8 leading-tight"
            >
              Opiniones <span className="text-gold-gradient italic font-medium pr-2">Jurisprudenciales</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12"
            >
              Análisis técnico y doctrina jurídica actualizada sobre los temas más relevantes del derecho venezolano.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-12 sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b border-border/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Buscar opinión o tema..." 
                className="pl-12 bg-white/5 border-border/50 focus:border-primary/50 transition-all py-6 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opinions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="glass-card h-full p-8 rounded-2xl flex flex-col transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/5">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                          <opinion.icon size={22} strokeWidth={1.5} />
                        </div>
                        <Badge variant="outline" className="text-[9px] uppercase tracking-widest py-1 border-primary/20 text-primary">
                          {opinion.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold font-serif-display mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {opinion.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                        {opinion.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-border/30">
                        <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
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
              <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-muted-foreground/30" />
              </div>
              <h3 className="text-2xl font-serif-display font-medium mb-2">No encontramos coincidencias</h3>
              <p className="text-muted-foreground">Prueba con otros términos o categorías.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opinions;
