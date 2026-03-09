import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-3d.png";

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.04,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className} style={{ perspective: "1000px", display: "inline-flex", flexWrap: "wrap" }}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block", transformOrigin: "bottom" }}
        whileHover={{ scale: 1.3, color: "hsl(82 85% 55%)", transition: { duration: 0.15 } }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, -50, 40, 0], y: [0, 30, -50, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-primary/5 blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ y: textY, opacity }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            Full-Stack Developer
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] mb-8">
            <span className="block">
              <AnimatedText text="Hi, I'm" />
            </span>
            <span className="block text-gradient-primary">
              <AnimatedText text="Sahiti" className="text-gradient-primary" />
            </span>
            <motion.span
              className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-muted-foreground font-light"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              Veeravalli
            </motion.span>
          </h1>

          <motion.div
            className="flex flex-col items-center gap-2 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
              Crafting immersive digital experiences with clean code and bold creativity.
            </p>
            <motion.span
              className="flex items-center gap-1.5 text-sm text-primary/70 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <span>📍</span> Hyderabad, India
            </motion.span>
            <motion.div
              className="flex items-center gap-4 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:sahiti@example.com"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Gmail</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition-all glow-primary"
              whileHover={{ scale: 1.08, boxShadow: "0 0 60px -5px hsl(82 85% 55% / 0.6)" }}
              whileTap={{ scale: 0.92 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-border rounded-full font-semibold text-lg text-foreground hover:border-primary hover:text-primary transition-all"
              whileHover={{ scale: 1.08, borderColor: "hsl(82 85% 55%)" }}
              whileTap={{ scale: 0.92 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
