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
        <a href="mailto:sofianlyadi@gmail.com" className="ml-2 px-4 py-1 bg-teal-400 text-black rounded-full text-xs font-semibold">Me contacter</a>
      </nav>

      <header id="about" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src="/mon-portfolio/flare-bg.jpg" alt="flare bg" className="absolute w-full h-full object-cover opacity-30" />
        <div className="relative z-10 max-w-3xl px-4">
          <motion.p className="text-xs tracking-widest mb-4 text-teal-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>PORTFOLIO</motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Sofian Lyadi</motion.h1>
          <motion.p className="text-sm md:text-base text-zinc-300 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Étudiant en BUT Informatique à l’IUT Lyon 1, passionné par les bases de données, le développement web et la visualisation de données. Curieux, rigoureux et créatif, je cherche à concevoir des solutions efficaces et durables à travers le code.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition">Voir mes projets</a>
            <a href="/mon-portfolio/CV.pdf" className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">Télécharger mon CV</a>
          </div>
        </div>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-teal-300">Langues</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
            <li>Français : Trilingue</li>
            <li>Italien : Trilingue</li>
            <li>Arabe : Trilingue</li>
            <li>Anglais : B2</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-teal-300">Formation</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>2023–2026 — BUT Informatique — IUT Lyon 1 : architecture logicielle, développement, qualité, cryptographie, réseaux, optimisation, anglais, communication, analyse de données, modélisation.</li>
            <li>2023 — Bac STI2D Mention Bien — Lycée La Martinière Diderot - LYON</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-teal-300">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
            <ul className="list-disc list-inside space-y-1">
              <li>Power BI & Visualisation</li>
              <li>PL/SQL : procédures, triggers, fonctions</li>
              <li>SQL : requêtes, Oracle</li>
              <li>Développement Web : HTML, CSS, Javascript, PHP</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Langages : C, Java, Bash</li>
              <li>Framework : Symfony</li>
              <li>Conception de bases de données temps réel</li>
              <li>MongoDB, Cloud, sécurité, performance</li>
            </ul>
          </div>
        </section>

        <section id="projects">
            <h2 className="text-3xl font-bold mb-4 text-teal-300">Projets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/mon-portfolio/powBI.png" alt="Power BI" className="w-full h-40 object-cover rounded mb-3" />
                <h3 className="text-xl font-semibold mb-1">Visualisation Power BI</h3>
                <p className="text-sm text-zinc-300">Aide à la décision via SQL + Power BI (commandes, ventes, clients, profits...)</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/mon-portfolio/thera.png" alt="BD Oracle" className="w-full h-40 object-cover rounded mb-3" />
                <h3 className="text-xl font-semibold mb-1">Base de données Thérapeutes</h3>
                <p className="text-sm text-zinc-300">Dans cette SAE, nous avons conçu une base de données Oracle pour un centre de formation médicale. Le projet a couvert la création du MCD sur PowerDesigner, sa transformation en MPD, la génération des tables dans SQL Developer, l’implémentation des données et l’écriture de requêtes SQL adaptées aux besoins du client.</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/mon-portfolio/saes4.png" alt="Buddy Budget" className="w-full h-40 object-cover rounded mb-3" />
                <h3 className="text-xl font-semibold mb-1">Projet Buddy Budget</h3>
                <p className="text-sm text-zinc-300">Buddy Budget est une application web conçue dans le cadre d’une SAE de développement visant à répondre à un enjeu majeur : la gestion budgétaire. Dans un contexte où de nombreuses personnes rencontrent des difficultés à gérer efficacement leurs finances personnelles, Buddy Budget apporte une solution intuitive. L’application permet aux utilisateurs de planifier leur budget, suivre leurs dépenses en temps réel, et analyser leur comportement financier. En facilitant la prise de décisions éclairées, Buddy Budget vise à réduire le stress financier, éviter le surendettement, et promouvoir une meilleure stabilité économique au quotidien.</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src="/mon-portfolio/saes1.png" alt="SAE Web" className="w-full h-40 object-cover rounded mb-3" />
                <h3 className="text-xl font-semibold mb-1">Projet SAE Web</h3>
                <p className="text-sm text-zinc-300">Dans le cadre d’une SAE, nous avons développé Le Campus Vert, un site web en HTML/CSS visant à promouvoir des modes de déplacement éco-responsables sur le campus de La Doua. Ce projet sensibilise les étudiants à l’impact environnemental de leurs choix de mobilité, tout en proposant des alternatives comme le vélo, la marche ou les transports doux. À travers une interface simple et des visuels clairs, le site informe, propose et engage la communauté universitaire à adopter un mode de vie plus durable.</p>
              </div>
            </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 text-teal-300">Contact</h2>
          <div className="text-sm text-zinc-300 space-y-2">
            <p><strong>Adresse e-mail :</strong> sofianlyadi@mail.com</p>
            <p><strong>Téléphone :</strong> 06 00 00 00 00</p>
            <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/sofian-lyadi-925045297" className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sofian-lyadi-925045297</a></p>

          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} Sofian Lyadi. Tous droits réservés.
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 bg-teal-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-teal-300 transition z-50">
          ↑ Haut
        </button>
      )}
    </div>
  );
}
