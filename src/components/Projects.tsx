import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Code, ChevronDown, Terminal, Copy, Check } from "lucide-react";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "ClickUp AI Suite",
    desc: "A comprehensive AI-powered marketing automation suite for small businesses, featuring lead generation and social media scheduling.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Express", "OpenAI", "Firebase"],
    demo: "https://theclickup.com",
    repo: "#",
    snippet: `async function generateContent(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}`
  },
  {
    title: "E-Commerce Velocity",
    desc: "A headless Shopify storefront template optimized for ultra-low latency and core web vitals performance scores.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Shopify API", "Tailwind"],
    demo: "#",
    repo: "#",
    snippet: `export async function getStaticProps() {
  const products = await shopifyClient.product.fetchAll();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
    revalidate: 60
  };
}`
  },
  {
    title: "DevMetrics Dashboard",
    desc: "Internal analytics tool for tracking engineer productivity and code quality metrics across multiple repositories.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "D3.js", "Node.js"],
    demo: "#",
    repo: "#",
    snippet: `const drawChart = (data) => {
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect");
}`
  },
  {
    title: "SaaS Blueprint",
    desc: "A production-ready SaaS starter kit with built-in authentication, billing integration, and user-tenant management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["PostgreSQL", "React", "Stripe"],
    demo: "#",
    repo: "#",
    snippet: `const createSubscription = async (customerId) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: 'price_premium_monthly' }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
  });
}`
  },
];

interface ProjectCardProps {
  project: any;
  idx: number;
  key?: React.Key;
}

function ProjectCard({ project, idx }: ProjectCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(project.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-brand-purple/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)]"
    >
      {/* Project Image Placeholder */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.demo}
            className="w-12 h-12 rounded-full bg-brand-cyan text-brand-bg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.repo}
            className="w-12 h-12 rounded-full bg-white text-brand-bg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-brand-lavender uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-white/60 text-sm leading-relaxed mb-6">
          {project.desc}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={project.demo}
              className="text-xs font-bold uppercase tracking-widest text-brand-cyan flex items-center gap-1 group/link"
            >
              Live Demo 
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-bold uppercase tracking-wider ${
              showCode 
                ? "bg-brand-purple text-white border-brand-purple shadow-[0_0_15px_rgba(124,58,237,0.4)]" 
                : "bg-white/5 text-brand-lavender border-white/10 hover:border-brand-purple hover:bg-brand-purple/5"
            }`}
          >
            <Code size={14} />
            Snippet
            <ChevronDown size={14} className={`transition-transform duration-300 ${showCode ? "rotate-180" : ""}`} />
          </motion.button>
        </div>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6"
            >
              <div className="rounded-xl bg-brand-card border border-brand-purple/10 p-4 relative font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre">
                <div className="flex items-center justify-between gap-2 mb-3 border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2 text-brand-white/30">
                    <Terminal size={12} />
                    <span>snippet.ts</span>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/5 transition-colors text-brand-lavender/50 hover:text-brand-cyan"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <code className="text-brand-lavender/90 block">
                  {project.snippet}
                </code>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Recent Projects" subtitle="Something special" />

        <motion.div 
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
