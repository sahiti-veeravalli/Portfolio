import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy handler
    alert("Thanks for reaching out! (This is a demo form)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Let's <span className="text-gradient-primary">connect</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { name: "name", label: "Your Name", type: "text" },
              { name: "email", label: "Your Email", type: "email" },
            ].map((field, i) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="relative"
              >
                <motion.label
                  className="block text-sm font-medium text-muted-foreground mb-2"
                  animate={focused === field.name ? { color: "hsl(82 85% 55%)", x: 4 } : { x: 0 }}
                >
                  {field.label}
                </motion.label>
                <motion.input
                  type={field.type}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-all duration-300"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 30px -10px hsl(82 85% 55% / 0.2)" }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.label
                className="block text-sm font-medium text-muted-foreground mb-2"
                animate={focused === "message" ? { color: "hsl(82 85% 55%)", x: 4 } : { x: 0 }}
              >
                Message
              </motion.label>
              <motion.textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                required
                whileFocus={{ scale: 1.01, boxShadow: "0 0 30px -10px hsl(82 85% 55% / 0.2)" }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg glow-primary"
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px -5px hsl(82 85% 55% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              Send Message 🚀
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind, want to collaborate, or just say hi? I'd love to hear from you.
              Fill out the form or reach me through any of these channels.
            </p>

            {[
              { icon: "📧", label: "Email", value: "sahiti@example.com", href: "mailto:sahiti@example.com" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sahiti", href: "#" },
              { icon: "🐙", label: "GitHub", value: "github.com/sahiti", href: "#" },
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.6 }}
                whileHover={{ x: 8, scale: 1.02, boxShadow: "0 10px 30px -10px hsl(82 85% 55% / 0.1)" }}
              >
                <motion.span
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                >
                  {contact.icon}
                </motion.span>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              {[
                { name: "GitHub", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -6, scale: 1.2, rotate: [0, -5, 5, 0] }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
