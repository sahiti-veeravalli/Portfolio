import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Pulse Dashboard",
    category: "Web App",
    description: "Real-time analytics dashboard with live data visualization and dark mode interface.",
    image: project1,
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
  },
  {
    title: "Luxe Commerce",
    category: "E-Commerce",
    description: "Premium fashion e-commerce platform with AI-powered recommendations.",
    image: project2,
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "#",
  },
  {
    title: "TradeFlow",
    category: "FinTech",
    description: "Advanced trading platform with real-time market data and portfolio tracking.",
    image: project3,
    tags: ["TypeScript", "WebSocket", "Charts"],
    link: "#",
  },
  {
    title: "ConnectHub",
    category: "Social Platform",
    description: "Modern social networking app with real-time messaging and content sharing.",
    image: project4,
    tags: ["React Native", "Firebase", "GraphQL"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Selected <span className="text-gradient-primary">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group block relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">{project.category}</span>
                  <span className="w-8 h-px bg-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
