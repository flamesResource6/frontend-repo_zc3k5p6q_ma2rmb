import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Future Industry</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/90">
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#portfolio" className="hover:text-white">Портфолио</a>
            <a href="#contact" className="hover:text-white">Связаться</a>
          </nav>
          <a href="#contact" className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400">Начать</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-blue-200/70 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p>© {new Date().getFullYear()} Future Industry. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#portfolio" className="hover:text-white">Портфолио</a>
            <a href="#contact" className="hover:text-white">Связаться</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
