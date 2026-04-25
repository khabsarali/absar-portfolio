import { motion } from "motion/react";
import { 
  Globe, 
  ShoppingBag, 
  Code, 
  Palette, 
  TrendingUp, 
  ShieldCheck 
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: <Globe className="text-brand-purple" />,
    title: "WordPress Development",
    desc: "Custom themes, plugins, WooCommerce integration, and deep performance optimization for scale."
  },
  {
    icon: <ShoppingBag className="text-brand-cyan" />,
    title: "Shopify Development",
    desc: "Store setup, custom Liquid storefronts, and conversion-focused design to boost your bottom line."
  },
  {
    icon: <Code className="text-brand-purple" />,
    title: "Frontend Development",
    desc: "Clean, efficient HTML/CSS/JS with modern frameworks. Responsive and pixel-perfect UI execution."
  },
  {
    icon: <Palette className="text-brand-cyan" />,
    title: "UI/UX & Design",
    desc: "Branding, Figma mockups, logos, and digital designs that resonate with your target audience."
  },
  {
    icon: <TrendingUp className="text-brand-purple" />,
    title: "Digital Marketing",
    desc: "ROI-focused campaigns, SEO strategy, and conversion funnels built to transform traffic into customers."
  },
  {
    icon: <ShieldCheck className="text-brand-cyan" />,
    title: "Website Maintenance",
    desc: "24/7 security monitoring, updates, backups, and performance audits to keep you running smooth."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle=" " />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } },
                hover: { y: -8 }
              }}
              className="glass p-8 rounded-3xl relative group overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.05)] hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              {/* Highlight background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 blur-3xl -z-10 transition-all group-hover:bg-brand-purple/20" />
              
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6">
                <motion.div
                  variants={{
                    hover: { scale: 1.15 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-center justify-center p-2"
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-brand-white/60 leading-relaxed text-sm">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
