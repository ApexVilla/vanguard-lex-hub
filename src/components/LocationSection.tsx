import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Landmark, Compass } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    {
      city: "Barinas",
      address: "Avenida Cuatricentenaria, Edificio Orchán, Oficina N° 7",
      reference: "Frente al Palacio de Justicia",
      image: "/LOCA1.png",
      type: "Sede Principal",
      icon: Landmark
    },
    {
      city: "Atención Ejecutiva",
      address: "Ambiente de alta confidencialidad y prestigio",
      reference: "Espacios diseñados para la estrategia legal",
      image: "/LOCA1.1.png",
      type: "Oficina de Consultoría",
      icon: Building2
    }
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-40 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[11px] md:text-xs font-sans-body font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
            Presencia Estratégica
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 font-serif-display tracking-tight">
            Nuestros <span className="text-gold-gradient italic pr-2">Espacios</span> de Poder
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-light text-lg italic">
            "Ubicaciones privilegiadas para una defensa jurídica de alto nivel."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-secondary/20 hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {loc.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 relative">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <loc.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif-display mb-3 text-foreground tracking-wide">
                      {loc.city}
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        {loc.address}
                      </p>
                      <p className="flex items-center gap-3 text-xs text-muted-foreground italic pl-7">
                        <Compass className="w-3 h-3 text-primary/60 shrink-0" />
                        {loc.reference}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/20 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    Sede Oficial
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
