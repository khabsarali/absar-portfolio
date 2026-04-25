import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-brand-white/50 text-sm">
            &copy; {currentYear} <span className="text-brand-white font-semibold">Absar Ali</span>. Crafted with purpose.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/absar-ali-5880b4327/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-white/40 hover:text-brand-cyan transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/khabsarali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-white/40 hover:text-brand-cyan transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://theclickup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-white/40 hover:text-brand-cyan transition-colors"
            title="The ClickUp Marketing Agency"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
