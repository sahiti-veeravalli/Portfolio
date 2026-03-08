import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "AWS / Cloud", level: 75 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI/UX Design", level: 85 },
      { name: "Motion Design", level: 80 },
      { name: "Brand Identity", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-card/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Skills & <span className="text-gradient-accent">Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.2, duration: 0.7 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">{category.title}</h3>
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.2 + si * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: ci === 2
                          ? "linear-gradient(90deg, hsl(280 80% 60%), hsl(320 80% 55%))"
                          : "linear-gradient(90deg, hsl(82 85% 55%), hsl(120 70% 45%))",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.2 + si * 0.1 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
