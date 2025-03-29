import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-8 py-3 z-50 flex gap-6 items-center justify-center rounded-full shadow border border-white/10">
        <a href="#about" className="hover:text-orange-500 transition text-sm font-medium">About</a>
        <a href="#projects" className="hover:text-orange-500 transition text-sm font-medium">Portfolio</a>
        <a href="#contact" className="hover:text-orange-500 transition text-sm font-medium">Contact</a>
        <a href="mailto:tonadresse@mail.com" className="ml-2 px-4 py-1 bg-orange-500 text-black rounded-full text-xs font-semibold">Get in touch</a>
      </nav>

      <header id="about" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src="/flare-bg.jpg" alt="flare bg" className="absolute w-full h-full object-cover opacity-30" />
        <div className="relative z-10 max-w-3xl px-4">
          <motion.p className="text-xs tracking-widest mb-4 text-orange-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>BOLD, CREATIVE, & UNFORGETTABLE</motion.p>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Unleashing <span className="italic text-orange-500">Digital Beasts</span><br />in Creative Chaos</motion.h1>
          <motion.p className="text-sm md:text-base text-zinc-300 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Welcome to my portfolio, where creativity meets code. Explore my universe of data, development, and design.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition">View Portfolio</a>
            <a href="/CV.pdf" className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">Download CV</a>
          </div>
        </div>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Langues</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
            <li>Français : Trilingue</li>
            <li>Italien : Trilingue</li>
            <li>Arabe : Trilingue</li>
            <li>Anglais : B2</li>
            <li>Permis B</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Formation</h2>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>2023–2026 — BUT Informatique — IUT Lyon 1 : architecture logicielle, développement, qualité, cryptographie, réseaux, optimisation, anglais, communication, analyse de données, modélisation.</li>
            <li>2023 — Bac STI2D Mention Bien — Lycée La Martinière Diderot - LYON</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Compétences</h2>
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
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Projets Scolaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="/projet1.png" alt="Power BI" className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-xl font-semibold mb-1">Visualisation Power BI</h3>
              <p className="text-sm text-zinc-300">Aide à la décision via SQL + Power BI (commandes, ventes, clients, profits...)</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="/projet2.png" alt="BD Oracle" className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-xl font-semibold mb-1">Base de données Thérapeutes</h3>
              <p className="text-sm text-zinc-300">MCD, MPD, SQLDeveloper, données et requêtes sous Oracle</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Contact</h2>
          <form action="mailto:tonadresse@mail.com" method="POST" className="flex flex-col gap-4 max-w-md">
            <input type="text" name="name" placeholder="Nom" className="bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-white" required />
            <input type="email" name="email" placeholder="Email" className="bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-white" required />
            <textarea name="message" rows="5" placeholder="Message" className="bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-white" required></textarea>
            <button type="submit" className="bg-orange-500 text-black py-2 px-6 rounded-xl hover:bg-orange-400 transition">Envoyer</button>
          </form>
        </section>
      </main>
    </div>
  );
}
