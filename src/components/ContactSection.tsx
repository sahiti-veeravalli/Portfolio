import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Let's <span className="text-gradient-primary">connect</span>
          </motion.h2>

          {/* LinkedIn & Email under heading */}
          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:sahiti@example.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">sahiti@example.com</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Form - centered */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Your Email", type: "email" },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
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
            transition={{ delay: 1.0 }}
          >
            <motion.label
              className="block text-sm font-medium text-muted-foreground mb-2"
              animate={focused === "message" ? { color: "hsl(82 85% 55%)", x: 4 } : { x: 0 }}
            >
              Your Message
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
            transition={{ delay: 1.1 }}
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
