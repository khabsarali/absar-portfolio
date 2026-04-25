import { motion } from "motion/react";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const roles = ["Software Engineer", "WordPress Developer", "Shopify Specialist", "Co-Founder @ ClickUp"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
            Available for Freelance
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-brand-purple">Absar Ali</span>
          </h1>

          <div className="h-10 mb-6">
            <p className="text-xl lg:text-2xl font-medium text-brand-lavender font-display">
              {displayText}
              <span className="w-1 h-6 bg-brand-cyan inline-block ml-1 animate-pulse align-middle" />
            </p>
          </div>

          <p className="text-lg text-brand-white/70 max-w-lg mb-10 leading-relaxed">
            I build high-performance digital experiences — from clean, functional code to growth-focused marketing systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#services"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(124,58,237,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-brand-purple text-white font-bold transition-all flex items-center gap-2"
            >
              View My Work <span className="text-sm">↓</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/absar-ali-5880b4327/" target="_blank" rel="noopener noreferrer" className="text-brand-lavender hover:text-brand-cyan transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/khabsarali" target="_blank" rel="noopener noreferrer" className="text-brand-lavender hover:text-brand-cyan transition-colors">
              <Github size={24} />
            </a>
            <a href="https://theclickup.com" target="_blank" rel="noopener noreferrer" className="text-brand-lavender hover:text-brand-cyan transition-colors" title="The ClickUp Marketing Agency">
              <ExternalLink size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-linear-to-br from-brand-purple/30 to-brand-cyan/30 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-4 h-full flex flex-col items-center justify-center overflow-hidden">
               {/* Abstract Tech Illustration Placeholder */}
               <div className="w-full h-full bg-brand-bg rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 grid-pattern" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        rotate: 360,
                        transition: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                      className="w-48 h-48 border-2 border-brand-purple/40 border-dashed rounded-full flex items-center justify-center"
                    >
                      <motion.div 
                        animate={{ 
                          rotate: -360,
                          transition: { duration: 15, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-32 h-32 border-2 border-brand-cyan/40 border-dashed rounded-full"
                      />
                    </motion.div>
                    <div className="absolute w-24 h-24 bg-brand-purple/20 blur-2xl rounded-full" />
                    <div className="relative z-10 w-32 h-32 rounded-full border-4 border-brand-purple bg-brand-card flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-brand-cyan">AA</span>
                    </div>
                  </div>
               </div>
               
               <div className="absolute bottom-8 left-8 p-3 glass rounded-xl">
                 <p className="text-xs font-mono text-brand-cyan">const engineer = "impact";</p>
               </div>
               <div className="absolute top-8 right-8 p-3 glass rounded-xl">
                 <p className="text-xs font-mono text-brand-purple">founder.vision = true;</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
