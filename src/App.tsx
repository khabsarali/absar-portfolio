import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
