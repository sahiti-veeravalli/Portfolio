import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-muted-foreground font-mono text-sm tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Creative Developer
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.95] mb-10">
            <motion.span
              className="block hero-gradient-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Alex
            </motion.span>
            <motion.span
              className="block hero-gradient-text-alt"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Morgan
            </motion.span>
          </h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Crafting digital experiences that push boundaries through code, design & motion.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold text-lg text-primary-foreground transition-all hero-cta-bg"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border rounded-full font-semibold text-lg text-foreground hover:border-primary hover:text-primary transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
