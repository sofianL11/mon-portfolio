import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth relative">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-8 py-3 z-50 flex gap-6 items-center justify-center rounded-full shadow border border-white/10">
        <a href="#about" className="hover:text-teal-400 transition text-sm font-medium">About</a>
        <a href="#projects" className="hover:text-teal-400 transition text-sm font-medium">Portfolio</a>
        <a href="#contact" className="hover:text-teal-400 transition text-sm font-medium">Contact</a>
        <a href="mailto:sofianlyadi@mail.com" className="ml-2 px-4 py-1 bg-teal-400 text-black rounded-full text-xs font-semibold">Me contacter</a>
      </nav>

      <header id="about" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src="/mon-portfolio/flare-bg.jpg" alt="flare bg" className="absolute w-full h-full object-cover opacity-30" />
        <div className="relative z-10 max-w-3xl px-4">
          <motion.p className="text-xs tracking-widest mb-4 text-teal-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>PORTFOLIO DE SOFIAN LYADI</motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Créer des <span className="italic text-teal-400">Solutions Durables</span><br />à travers la Donnée et le Code</motion.h1>
          <motion.p className="text-sm md:text-base text-zinc-300 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Étudiant en informatique passionné par les bases de données et le développement web. Mon objectif : transformer la donnée en valeur concrète.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition">Voir mes projets</a>
            <a href="/mon-portfolio/CV.pdf" className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">Télécharger mon CV</a>
          </div>
        </div>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
        {/* Langues, Formation, Compétences, Projets (inchangés) */}

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 text-teal-300">Contact</h2>
          <div className="text-sm text-zinc-300 space-y-2">
            <p><strong>Nom :</strong> Sofian Lyadi</p>
            <p><strong>Email :</strong> <a href="mailto:sofianlyadi@mail.com" className="text-teal-400 hover:underline">sofianlyadi@mail.com</a></p>
            <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
            <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/sofianlyadi" className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/sofianlyadi</a></p>
          </div>
        </section>
      </main>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 bg-teal-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-teal-300 transition z-50">
          ↑ Haut
        </button>
      )}
    </div>
  );
}
