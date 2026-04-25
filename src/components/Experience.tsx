import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Briefcase } from "lucide-react";

const events = [
  {
    type: "work",
    title: "Co-Founder",
    company: "The Clickup Marketing Agency",
    period: "Nov 2025 – Present",
    location: "Muzaffarabad, AJK",
    desc: "Bridging technical execution and marketing strategy. Leading development of ROI-focused campaigns powered by high-performance web systems."
  },
  {
    type: "work",
    title: "IT Analyst",
    company: "Axelytix",
    period: "Sep 2025 – Present",
    location: "Edmonton, Alberta (Remote)",
    desc: "Website and student portal maintenance, WordPress updates, performance optimization, and technical support."
  },
  {
    type: "work",
    title: "WordPress Developer",
    company: "Exeligence",
    period: "Feb 2025 – Present",
    location: "Netherlands (Remote)",
    desc: "Website development and design, HTML/CSS/PHP implementation, and ongoing maintenance."
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Upwork",
    period: "Dec 2024 – Present",
    location: "Remote",
    desc: "Successfully delivering global client projects across web development and integrated digital solutions."
  },
  {
    type: "work",
    title: "WordPress Dev & Designer",
    company: "Codechazer",
    period: "Jul 2024 – Present",
    location: "Muzaffarabad, AJK",
    desc: "Branding, logo design, WordPress development, responsive web design, and UI/UX implementation."
  }
];

const education = [
  {
     degree: "B.Sc. Software Engineering",
     school: "University of Azad Jammu & Kashmir",
     period: "2025 – 2029"
  },
  {
     degree: "ICS Computer Science",
     school: "Punjab Group of Colleges",
     period: "2022 – 2024"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Journey" subtitle=" " />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-brand-purple via-brand-cyan to-transparent ml-[-1px]" />
          
          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={`${event.company}-${idx}`} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-cyan border-4 border-brand-bg shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 ml-[-8px]" />
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`ml-12 md:ml-0 md:w-1/2 p-6 glass rounded-2xl border-l-4 ${event.type === 'work' ? 'border-l-brand-purple' : 'border-l-brand-cyan'} hover:border-brand-purple/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 cursor-default`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-brand-purple" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest">{event.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{event.title}</h3>
                  <div className="text-brand-lavender text-sm font-semibold mb-3">{event.company} • {event.location}</div>
                  <p className="text-brand-white/70 text-sm leading-relaxed">{event.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
             <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="glass p-6 rounded-2xl flex gap-6 items-start hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
             >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-brand-cyan" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-lavender uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-lg font-display font-bold mt-1">{edu.degree}</h4>
                  <p className="text-brand-white/60 text-sm">{edu.school}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
