import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    icon: <Mail className="text-brand-purple" />,
    label: "Email",
    value: "khabsarali@gmail.com",
    href: "mailto:khabsarali@gmail.com"
  },
  {
    icon: <MessageCircle className="text-brand-cyan" />,
    label: "WhatsApp",
    value: "+92 326 9820737",
    href: "https://wa.me/923269820737"
  },
  {
    icon: <Linkedin className="text-brand-purple" />,
    label: "LinkedIn",
    value: "absar-ali-5880b4327",
    href: "https://www.linkedin.com/in/absar-ali-5880b4327/"
  },
  {
    icon: <MapPin className="text-brand-cyan" />,
    label: "Location",
    value: "Muzaffarabad, Azad Kashmir, Pakistan",
    href: "#"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-bg/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Build Something" subtitle=" " />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">Connect for Impact</h3>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-10">
              Whether you're a brand, startup, or developer — I'd love to connect. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass p-6 rounded-2xl flex items-center gap-6 hover:border-brand-purple/50 transition-all group"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-lavender uppercase tracking-widest">{info.label}</p>
                    <p className="text-brand-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="glass p-8 md:p-12 rounded-[2rem] border-white/5 relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] -z-10" />
             
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-lavender uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors text-brand-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-lavender uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors text-brand-white placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-lavender uppercase tracking-widest px-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors text-brand-white placeholder:text-white/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-lavender uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors text-brand-white placeholder:text-white/20 resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-linear-to-r from-brand-purple to-brand-cyan text-white font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                >
                  Send Message <Send size={18} />
                </motion.button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
