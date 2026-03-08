import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: "☁️",
    color: "from-[hsl(40_90%_55%)] to-[hsl(25_85%_50%)]",
    link: "#",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    icon: "📊",
    color: "from-[hsl(200_80%_50%)] to-[hsl(220_70%_45%)]",
    link: "#",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    date: "2024",
    icon: "⚛️",
    color: "from-[hsl(210_90%_55%)] to-[hsl(230_80%_50%)]",
    link: "#",
  },
];

const courses = [
  {
    title: "Full-Stack Web Development",
    platform: "Udemy",
    instructor: "Dr. Angela Yu",
    icon: "🌐",
  },
  {
    title: "Machine Learning Specialization",
    platform: "Coursera",
    instructor: "Andrew Ng",
    icon: "🤖",
  },
  {
    title: "React – The Complete Guide",
    platform: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    icon: "⚡",
  },
  {
    title: "Python for Data Science & AI",
    platform: "IBM / Coursera",
    instructor: "IBM Team",
    icon: "🐍",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-32 bg-card/30 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
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
            Credentials
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Certifications & <span className="text-gradient-primary">Courses</span>
          </motion.h2>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              className="group block relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -10, scale: 1.03 }}
              style={{ perspective: "1000px" }}
            >
              {/* Gradient accent bar */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              />

              <motion.span
                className="text-4xl block mb-4"
                animate={isInView ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              >
                {cert.icon}
              </motion.span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <span className="text-xs font-mono text-primary/60">{cert.date}</span>

              {/* Hover arrow */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Courses */}
        <motion.h3
          className="text-2xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          Relevant <span className="text-gradient-accent">Courses</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-500 group"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -6, scale: 1.04, boxShadow: "0 15px 35px -10px hsl(82 85% 55% / 0.1)" }}
            >
              <motion.span
                className="text-2xl block mb-3"
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
              >
                {course.icon}
              </motion.span>
              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {course.title}
              </h4>
              <p className="text-xs text-muted-foreground">{course.platform}</p>
              <p className="text-xs text-primary/50 mt-1">{course.instructor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
