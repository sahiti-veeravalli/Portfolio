import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript,
  SiPython, SiGit, SiDocker, SiAmazonwebservices, SiTailwindcss,
  SiHtml5, SiCss3, SiGithub, SiLinux, SiFigma, SiPostgresql,
  SiFirebase, SiVercel, SiVite, SiNpm
} from "react-icons/si";

const icons = [
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript,
  SiPython, SiGit, SiDocker, SiAmazonwebservices, SiTailwindcss,
  SiHtml5, SiCss3, SiGithub, SiLinux, SiFigma, SiPostgresql,
  SiFirebase, SiVercel, SiVite, SiNpm,
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiGit,
  SiDocker, SiTailwindcss, SiHtml5, SiGithub, SiFirebase,
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((Icon, i) => {
        const left = seededRandom(i * 3 + 1) * 100;
        const top = seededRandom(i * 7 + 2) * 100;
        const size = 20 + seededRandom(i * 11 + 3) * 24;
        const duration = 15 + seededRandom(i * 13 + 4) * 25;
        const delay = seededRandom(i * 17 + 5) * 8;
        const rotEnd = (seededRandom(i * 19 + 6) - 0.5) * 360;
        const xDrift = (seededRandom(i * 23 + 7) - 0.5) * 120;
        const yDrift = (seededRandom(i * 29 + 8) - 0.5) * 120;

        return (
          <motion.div
            key={i}
            className="absolute text-primary/[0.07]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: size,
            }}
            animate={{
              x: [0, xDrift, -xDrift * 0.6, 0],
              y: [0, yDrift, -yDrift * 0.8, 0],
              rotate: [0, rotEnd, -rotEnd * 0.5, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
