import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "Absar is an exceptional engineer. He didn't just build our platform; he optimized it for a level of performance we didn't think was possible. His attention to detail is world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Founder of Velocity Hub",
    content: "Working with Absar on our Shopify storefront was a game-changer. Our conversion rates increased by 40% after the relaunch. He's a true specialist who understands the business impact of code.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director @ ClickUp",
    content: "Absar's ability to bridge the gap between complex backend systems and beautiful, intuitive frontends is rare. He's been instrumental in scaling our AI suite.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Client Voices" subtitle="What people say" />

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-[2rem] relative group border-white/5 hover:border-brand-purple/30 transition-all duration-500"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-purple rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <Quote className="text-white w-6 h-6" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-cyan fill-brand-cyan" />
                ))}
              </div>

              <p className="text-brand-white/70 italic leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-purple/30"
                />
                <div>
                  <h4 className="font-display font-bold text-brand-white">{testimonial.name}</h4>
                  <p className="text-brand-lavender text-xs uppercase tracking-widest font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
