import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, CreditCard, ShieldCheck, Globe } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  const contactPhone = "584245619862";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${formData.nombre}. Solicito información para una asesoría sobre: ${formData.mensaje}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/${contactPhone}?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 lg:py-40 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Decorative background element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[11px] md:text-xs font-sans-body font-semibold tracking-[0.3em] uppercase text-primary mb-6 block">
            Asesoría Profesional
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif-display tracking-tight">
            Hablemos sobre su <span className="text-gold-gradient italic pr-2">caso</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Form & Payment Info Column */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 font-serif-display border-b border-border/40 pb-4">Enviar Solicitud</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-sans-body font-bold tracking-[0.2em] uppercase text-muted-foreground/80 mb-3">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full bg-white/5 border border-border/40 rounded-none px-5 py-4 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-all duration-500"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans-body font-bold tracking-[0.2em] uppercase text-muted-foreground/80 mb-3">
                        Teléfono de Contacto
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full bg-white/5 border border-border/40 rounded-none px-5 py-4 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-all duration-500"
                        placeholder="0424 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans-body font-bold tracking-[0.2em] uppercase text-muted-foreground/80 mb-3">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-border/40 rounded-none px-5 py-4 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-all duration-500"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans-body font-bold tracking-[0.2em] uppercase text-muted-foreground/80 mb-3">
                      Descripción del Caso
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-white/5 border border-border/40 rounded-none px-5 py-4 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-all duration-500 resize-none"
                      placeholder="¿En qué podemos ayudarle?"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-sans-body font-bold text-xs tracking-[0.25em] uppercase rounded-none transition-all duration-500 gold-border-glow group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Enviar mensaje vía WhatsApp
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Investment & Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Investment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe className="w-16 h-16" />
              </div>
              <h4 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">Inversión de Asesoría</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-bold font-serif-display">50$</span>
                <span className="text-muted-foreground text-sm font-sans-body">BCV por hora</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: ShieldCheck, text: "Asesoría vía Online" },
                  { icon: MapPin, text: "Asesoría en nuestro despacho" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-medium text-foreground/90 font-sans-body">
                    <item.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-border/40">
                <h5 className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-4">Datos de Pago Móvil</h5>
                <div className="space-y-3 font-sans-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-light">Teléfono:</span>
                    <span className="font-semibold">0424-5619862</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-light">Documento:</span>
                    <span className="font-semibold">V15.669.570</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-light">Bancos:</span>
                    <span className="font-semibold">Venezuela / Mercantil</span>
                  </div>
                </div>
                <p className="mt-6 text-[10px] italic text-muted-foreground flex items-center gap-2">
                  <CreditCard className="w-3 h-3" />
                  Por favor, enviar captura del pago una vez realizado.
                </p>
              </div>
            </motion.div>

            {/* General Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Contacto Directo", value: "0424-5619862" },
                { icon: Mail, label: "Correo Corporativo", value: "contacto@vanguardlex.com" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.6 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-5 p-6 glass-card rounded-xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 bg-primary/5">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground/60 mb-1">
                      {item.label}
                    </div>
                    <div className="text-base font-sans-body font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
