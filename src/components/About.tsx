import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Active Roles", value: 3, suffix: "" },
  { label: "Agency Founded", value: 1, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 10 }}
      transition={{ 
        duration: 1, 
        delay: 0.2,
        ease: "easeOut"
      }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle=" " />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-brand-lavender font-medium mb-6">
              I'm a Software Engineer and Co-Founder of ClickUp Marketing Agency with 3+ years building websites, digital products, and marketing systems.
            </p>
            <p className="text-brand-white/70 leading-relaxed mb-8">
              I see every project through two lenses — the engineer's eye for performance, and the founder's eye for impact. Currently pursuing a Bachelor's in Software Engineering at the University of Azad Jammu & Kashmir, I focus on bridging the gap between technical excellence and business growth.
            </p>
            <div className="p-6 glass rounded-2xl border-l-4 border-l-brand-cyan">
              <p className="italic text-brand-white/80">
                "Code is art, but when combined with strategic marketing, it becomes a weapon for growth."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover:border-brand-purple/50 transition-all duration-300 group"
              >
                <h3 className="text-4xl font-display font-extrabold text-brand-cyan mb-2 group-hover:scale-110 transition-transform">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-medium text-brand-lavender uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
