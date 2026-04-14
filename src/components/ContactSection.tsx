import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${formData.nombre}. ${formData.mensaje}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/584121234567?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-sans-body font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">
            Contáctenos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hablemos sobre su <span className="text-gold-gradient">caso</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-lg p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-sans-body font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Su nombre completo"
                />
              </div>
              <div>
                <label className="block text-xs font-sans-body font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+58 412 123 4567"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-sans-body font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-xs font-sans-body font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                Mensaje
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describa brevemente su caso..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, label: "Teléfono", value: "+58 412 123 4567" },
              { icon: Mail, label: "Email", value: "contacto@apdespacho.com" },
              { icon: MapPin, label: "Ubicación", value: "Venezuela" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-lg p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-sans-body font-semibold tracking-wide uppercase text-muted-foreground mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-sans-body text-foreground">{item.value}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/584121234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600/20 border border-green-500/30 text-green-400 rounded-lg font-sans-body font-semibold text-sm tracking-wide hover:bg-green-600/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
