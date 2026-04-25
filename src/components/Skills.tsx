import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    category: "Platforms",
    skills: ["WordPress", "Shopify", "WooCommerce"]
  },
  {
    category: "Tools",
    skills: ["Figma", "Git", "cPanel", "VS Code"]
  },
  {
    category: "Design",
    skills: ["Adobe Illustrator", "Canva", "Logo Design"]
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Client Communication", "Management"]
  }
];

const topSkills = [
  { name: "WordPress Development", level: 90, color: "bg-brand-purple" },
  { name: "Frontend (HTML/CSS/JS)", level: 85, color: "bg-brand-cyan" },
  { name: "Graphic Design", level: 80, color: "bg-brand-purple" },
  { name: "Shopify Development", level: 75, color: "bg-brand-cyan" },
  { name: "PHP", level: 70, color: "bg-brand-purple" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-bg/50 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Tech Stack" subtitle=" " />
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-brand-cyan font-display font-bold uppercase tracking-widest text-sm mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-brand-purple transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-white font-display font-bold text-xl mb-6">Expertise Levels</h4>
            {topSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-brand-lavender">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-brand-card rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${skill.color} shadow-[0_0_10px_rgba(124,58,237,0.3)]`}
                  />
                </div>
              </motion.div>
            ))}
            
            <div className="mt-12 p-8 glass rounded-3xl border-brand-cyan/20">
               <p className="text-brand-white/70 text-sm leading-relaxed">
                 Always learning, always evolving. Currently exploring advanced React patterns and AI-driven development workflows to stay ahead of the digital curve.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
