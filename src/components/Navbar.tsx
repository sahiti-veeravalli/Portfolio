import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="relative">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setShowName(true)}
            onHoverEnd={() => setShowName(false)}
          >
            SV.
          </motion.a>

          <AnimatePresence>
            {showName && (
              <motion.div
                className="absolute top-full left-1/2 mt-3 pointer-events-none"
                initial={{ opacity: 0, y: -8, scale: 0.8, x: "-50%" }}
                animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                exit={{ opacity: 0, y: -6, scale: 0.85, x: "-50%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative px-5 py-2.5 rounded-2xl whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, hsl(82 85% 55% / 0.12), hsl(280 80% 60% / 0.1))",
                    backdropFilter: "blur(16px)",
                    border: "1px solid hsl(82 85% 55% / 0.2)",
                    boxShadow: "0 8px 32px -8px hsl(82 85% 55% / 0.25), 0 0 60px -20px hsl(280 80% 60% / 0.15)",
                  }}
                >
                  <motion.span
                    className="text-sm font-semibold text-gradient-primary"
                    initial={{ filter: "blur(4px)" }}
                    animate={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Sahiti Veeravalli
                  </motion.span>
                  {/* Cloud tail */}
                  <div
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 rounded-sm"
                    style={{
                      background: "linear-gradient(135deg, hsl(82 85% 55% / 0.12), hsl(280 80% 60% / 0.1))",
                      border: "1px solid hsl(82 85% 55% / 0.2)",
                      borderBottom: "none",
                      borderRight: "none",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-50">
          <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-foreground block" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-foreground block" />
          <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-foreground block" />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
