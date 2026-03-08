import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const profiles = [
  {
    platform: "LeetCode",
    username: "@sahiti_v",
    stats: "200+ problems • Top 15%",
    icon: "M13.483 0a1.374 1.374 0 00-.961.442L7.116 6.549a1.374 1.374 0 000 1.883l5.406 6.107a1.374 1.374 0 001.922.043l.007-.006a1.374 1.374 0 00.043-1.922L9.613 7.49l4.881-5.164a1.374 1.374 0 00-.043-1.922 1.374 1.374 0 00-.968-.404zM16 0a1 1 0 00-1 1v22a1 1 0 002 0V1a1 1 0 00-1-1zm4.517 6.549L15.11 12.656a1.374 1.374 0 000 1.883l5.406 6.107a1.374 1.374 0 001.922.043l.007-.006a1.374 1.374 0 00.043-1.922L17.607 13.6l4.881-5.164a1.374 1.374 0 00-.043-1.922 1.374 1.374 0 00-1.928.035z",
    color: "hsl(40 90% 55%)",
    glowColor: "hsl(40 90% 55% / 0.2)",
    link: "#",
  },
  {
    platform: "CodeChef",
    username: "@sahiti_v",
    stats: "3★ Coder • 1200+ Rating",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    color: "hsl(15 80% 55%)",
    glowColor: "hsl(15 80% 55% / 0.2)",
    link: "#",
  },
  {
    platform: "HackerRank",
    username: "@sahiti_veeravalli",
    stats: "5★ Python • 4★ Problem Solving",
    icon: "M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 9.12l6 3.33v6.37l-6-3.33V9.12zm14 0v6.37l-6 3.33v-6.37l6-3.33z",
    color: "hsl(145 70% 50%)",
    glowColor: "hsl(145 70% 50% / 0.2)",
    link: "#",
  },
  {
    platform: "Codeforces",
    username: "@sahiti_v",
    stats: "Pupil • 1100+ Rating",
    icon: "M24 19.5V0h-6v19.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5zM15 13.5V4H9v9.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5zM6 19.5V9H0v10.5A1.5 1.5 0 001.5 21h3A1.5 1.5 0 006 19.5z",
    color: "hsl(210 90% 55%)",
    glowColor: "hsl(210 90% 55% / 0.2)",
    link: "#",
  },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coding-profiles" className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Competitive
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Coding <span className="text-gradient-primary">Profiles</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, rotateY: i % 2 === 0 ? -8 : 8 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: `0 25px 50px -15px ${profile.glowColor}`,
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${profile.color}15` }}
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              >
                <svg className="w-7 h-7" fill={profile.color} viewBox="0 0 24 24">
                  <path d={profile.icon} />
                </svg>
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {profile.platform}
                  </h3>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 4 }}
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>
                <p className="text-sm text-primary/70 font-mono mb-2">{profile.username}</p>
                <p className="text-sm text-muted-foreground">{profile.stats}</p>
              </div>

              {/* Background decoration */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: profile.color }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
