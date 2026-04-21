import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, CreditCard, Globe, CheckCircle, Clock, Lock } from "lucide-react";

const trustBadges = [
  { icon: Lock, label: "100% Confidencial" },
  { icon: Clock, label: "Respuesta en 2h" },
  { icon: CheckCircle, label: "Asesoría Honesta" },
];

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
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden bg-white" ref={ref}>
      {/* BG decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-50" />

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 font-serif-display">
            ¿Necesita{" "}
            <span className="font-cormorant italic text-gold-gradient font-light">asesoría legal</span>?
          </h2>
          <p className="text-xl text-slate-600 font-sans-body font-light max-w-2xl mx-auto mb-10">
            Estamos listos para ayudarle. Contáctenos hoy y reciba una orientación profesional sobre su caso.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60 backdrop-blur-sm relative group"
          >
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <p className="text-sm md:text-base text-slate-500 font-sans-body leading-relaxed">
              <span className="font-bold text-primary mr-2 uppercase tracking-tight">Red Nacional:</span>
              Contamos con una sólida red de despachos aliados con presencia estratégica en las principales ciudades del país: 
              <span className="text-slate-700 font-medium"> Caracas, Maracay, Valencia, Barquisimeto, Portuguesa, Barinas, Trujillo y San Cristóbal.</span>
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  <span className="text-[10px] font-sans-body font-bold tracking-widest uppercase text-slate-600">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Form Column */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-light border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 font-serif-display border-b border-white/10 pb-4 text-white">
                  Enviar Solicitud
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 pt-7 text-white font-sans-body text-sm focus:outline-none focus:border-primary/60 transition-all duration-500 placeholder-transparent"
                        placeholder="Ej. Juan Pérez"
                        id="nombre"
                      />
                      <label htmlFor="nombre">Nombre Completo</label>
                    </div>
                    <div className="floating-label-group">
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 pt-7 text-white font-sans-body text-sm focus:outline-none focus:border-primary/60 transition-all duration-500 placeholder-transparent"
                        placeholder="0424 000 0000"
                        id="telefono"
                      />
                      <label htmlFor="telefono">Teléfono de Contacto</label>
                    </div>
                  </div>
                  <div className="floating-label-group">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 pt-7 text-white font-sans-body text-sm focus:outline-none focus:border-primary/60 transition-all duration-500 placeholder-transparent"
                      placeholder="correo@ejemplo.com"
                      id="email"
                    />
                    <label htmlFor="email">Correo Electrónico</label>
                  </div>
                  <div className="floating-label-group">
                    <textarea
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 pt-7 text-white font-sans-body text-sm focus:outline-none focus:border-primary/60 transition-all duration-500 resize-none placeholder-transparent"
                      placeholder="¿En qué podemos ayudarle?"
                      id="mensaje"
                    />
                    <label htmlFor="mensaje">Descripción del Caso</label>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-sans-body font-bold text-xs tracking-[0.25em] uppercase rounded-lg transition-all duration-500 gold-border-glow"
                  >
                    <Send className="w-4 h-4" />
                    Enviar mensaje vía WhatsApp
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Payment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-light rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-8 font-sans-body">
                Métodos de Pagos
              </h4>

              <ul className="space-y-4 mb-10">
                {["EFECTIVO", "TRANSFERENCIA", "PAGO MÓVIL", "ZELLE", "MERCANTIL PANAMÁ", "BINANCE / USDT"].map((method, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.08 }}
                    className="flex items-center gap-4 text-sm font-medium text-white font-sans-body group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                    {method}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] italic text-white/40 flex items-start gap-2 bg-white/5 p-4 rounded-lg border border-white/10 leading-relaxed">
                  <CreditCard className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                  Solicitar detalles de cuenta vía WhatsApp y enviar captura del pago una vez realizado.
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Atención al Despacho", value: "0424-5619862", href: "tel:04245619862" },
                { icon: Mail, label: "Correo Corporativo", value: "contacto@despachodeabogadosap.com", href: "mailto:contacto@despachodeabogadosap.com" },
              ].map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.6 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-5 p-6 bg-navy-light border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-500 group block"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 bg-white/5 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-sans-body font-medium text-white group-hover:text-primary transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
