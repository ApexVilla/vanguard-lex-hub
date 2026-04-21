import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

import marthaImg from "@/assets/martha-valencia.jpg";

const leaders = [
  {
    name: "Ángel Pérez",
    role: "Director Fundador",
    image: founderImg,
    bio: "Con una sólida formación académica y amplia experiencia en el ejercicio del derecho, el Abg. Ángel Pérez lidera AP Despacho de Abogados con una visión clara: ofrecer representación legal de excelencia, combinando rigor técnico con ética y dedicación total a cada cliente.",
    credentials: [
      { icon: GraduationCap, text: "Abogado egresado de la Universidad Santa María" },
      { icon: Award, text: "Especialista en Derecho Procesal Penal" },
      { icon: Award, text: "Especialista en Derecho Agrario y Ambiental" },
      { icon: BookOpen, text: "Maestría en Docencia Universitaria (en curso)" },
    ],
  },
  {
    name: "Martha Valencia",
    role: "Socio Principal",
    image: marthaImg,
    bio: "Con 17 años de trayectoria, la Abg. Martha Valencia aporta una profundidad analítica excepcional en litigios complejos. Su enfoque multidisciplinario le permite abordar desafíos legales desde ángulos innovadores, garantizando una defensa técnica de primer nivel y un compromiso inquebrantable con la justicia.",
    credentials: [
      { icon: Award, text: "17 años de experiencia profesional" },
      { icon: Award, text: "Esp. en Derecho Procesal Penal y Civil" },
      { icon: Award, text: "Esp. en Derecho Agrario y Ambiental" },
      { icon: GraduationCap, text: "Magister en Derecho Penal y Criminología" },
      { icon: BookOpen, text: "Doctorado en Derecho Constitucional (en curso)" },
      { icon: BookOpen, text: "Especialización en Derecho Mercantil (en curso)" },
    ],
  }
];

const FounderSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fundador" className="py-24 lg:py-40 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <span className="text-[11px] md:text-xs font-sans-body font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
            Nuestros Líderes
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-white font-serif-display tracking-tight">
            Excelencia <span className="font-cormorant italic text-gold-gradient font-light">Jurídica</span>
          </h2>
        </motion.div>

        <div className="space-y-40">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                {/* Aura */}
                <div className="absolute -inset-8 bg-primary/10 blur-[80px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />

                {/* Corner decorations */}
                <div className={`absolute -top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-40 h-40 border-t-[3px] ${index % 2 === 0 ? 'border-l-[3px]' : 'border-r-[3px]'} border-primary/40 rounded-${index % 2 === 0 ? 'tl' : 'tr'}-[40px] transition-all duration-1000 group-hover:-top-12 ${index % 2 === 0 ? 'group-hover:-left-12' : 'group-hover:-right-12'} group-hover:border-primary/70`} />
                <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-40 h-40 border-b-[3px] ${index % 2 === 0 ? 'border-r-[3px]' : 'border-l-[3px]'} border-primary/40 rounded-${index % 2 === 0 ? 'br' : 'bl'}-[40px] transition-all duration-1000 group-hover:-bottom-12 ${index % 2 === 0 ? 'group-hover:-right-12' : 'group-hover:-left-12'} group-hover:border-primary/70`} />

                <div className="relative overflow-hidden rounded-2xl p-3 bg-white/5 backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.6)] group-hover:shadow-[0_60px_120px_rgba(30,60,50,0.7)] transition-all duration-1000">
                  <motion.div
                    className="relative overflow-hidden rounded-xl border border-white/10"
                    whileHover={{ rotateY: index % 2 === 0 ? 4 : -4, rotateX: 2, scale: 1.03 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <motion.img
                        initial={{ scale: 1.2, filter: "brightness(0.9) contrast(1.1)" }}
                        animate={inView ? { scale: 1, filter: "brightness(1) contrast(1)" } : {}}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        src={leader.image}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"; // Backup law placeholder
                        }}
                        alt={`Abg. ${leader.name}`}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent z-10" />
                    </div>
                  </motion.div>

                  {/* Floating ID badge */}
                  <motion.div
                    className={`absolute bottom-10 ${index % 2 === 0 ? 'left-10 text-left' : 'right-10 text-right'} z-30`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    whileHover={{ x: index % 2 === 0 ? 6 : -6 }}
                  >
                    <div className="bg-primary/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl mb-2 inline-block">
                      {leader.role}
                    </div>
                    <h3 className="text-3xl font-cormorant font-light text-white drop-shadow-2xl">
                      Abg. {leader.name}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-start ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <span className="text-[11px] md:text-xs font-sans-body font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
                  {leader.role}
                </span>
                <h2 className="text-5xl md:text-6xl font-medium mb-4 leading-tight text-white font-serif-display tracking-tight">
                  Abg. {leader.name.split(' ')[0]}{" "}
                  <span className="font-cormorant italic text-gold-gradient font-light pr-2">
                    {leader.name.split(' ').slice(1).join(' ')}
                  </span>
                </h2>
                <div className="mb-10 pb-8 border-b border-white/10 w-full">
                  <p className="text-white/80 font-sans-body font-light text-lg leading-relaxed max-w-2xl">
                    {leader.bio}
                  </p>
                </div>

                <div className="space-y-6 w-full">
                  {leader.credentials.map((cred, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500">
                        <cred.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-white/70 font-sans-body font-light text-base group-hover:text-white transition-colors">
                        {cred.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
