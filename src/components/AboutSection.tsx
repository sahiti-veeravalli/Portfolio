import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Turning ideas into{" "}
              <span className="text-gradient-primary">reality</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a full-stack developer and designer with over 6 years of experience building
                digital products that combine stunning visuals with seamless functionality.
              </p>
              <p>
                My passion lies at the intersection of design and engineering — creating experiences
                that not only look beautiful but perform flawlessly. From startups to enterprise clients,
                I bring ideas to life with clean code and bold creativity.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Available for Freelance", "Remote Friendly", "Open to Collaboration"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(82 85% 55%)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "6+", label: "Years of Experience" },
                { number: "48+", label: "Projects Delivered" },
                { number: "32+", label: "Happy Clients" },
                { number: "12", label: "Awards Won" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {item.number}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
