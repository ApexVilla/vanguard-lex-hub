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
      reference: "Diagonal al Palacio de Justicia del estado Barinas",
      image: "/LOCA1.png",
      type: "Sede Principal",
      icon: Landmark,
    },
    {
      city: "Alto Barinas",
      address: "Alto Barinas Norte",
      reference: "Cerca del Circuito Judicial del estado Barinas",
      image: "/LOCA1.1.png",
      type: "Oficina Ejecutiva",
      icon: Building2,
    },
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-40 bg-white relative overflow-hidden" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif-display tracking-tight text-slate-900">
            Nuestra{" "}
            <span className="font-cormorant italic text-gold-gradient font-light pr-2">ubicación</span>
          </h2>
          <p className="text-slate-600 font-sans-body font-light text-lg md:text-xl leading-relaxed">
            Visítenos en nuestro despacho para una atención personalizada y profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative gradient-border-card"
            >
              <motion.div
                whileHover={{
                  rotateY: idx === 0 ? 6 : -6,
                  rotateX: 3,
                  scale: 1.03,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-navy/85 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_40px_hsl(var(--gold)/0.15)] transition-all duration-700"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img
                    src={loc.image}
                    alt={loc.city}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-5 py-2 rounded-xl bg-primary text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                      {loc.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-10 relative">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <loc.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-serif-display mb-3 text-white group-hover:text-primary transition-colors duration-500">
                        {loc.city}
                      </h3>
                      <div className="space-y-3">
                        <p className="flex items-start gap-3 text-sm text-white/70 font-sans-body font-light leading-relaxed">
                          <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                          {loc.address}
                        </p>
                        <p className="flex items-center gap-3 text-xs text-primary/60 italic pl-7 group-hover:translate-x-2 transition-transform duration-500">
                          <Compass className="w-4 h-4 shrink-0" />
                          {loc.reference}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping absolute inset-0" />
                        <div className="w-2 h-2 rounded-full bg-primary relative" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70 transition-colors">
                        Sede Oficial
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${dot === 1 ? "bg-primary scale-125" : "bg-white/10"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[28px]" />

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
