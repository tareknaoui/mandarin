import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Méthode', href: '#methodology' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Témoignages', href: '#success-stories' },
    { label: 'Nous Contacter', href: '#booking' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 lg:px-12 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Le Chinois Vite et Bien" className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="ink-brush-border text-sm font-medium text-gray-800 hover:text-primary transition-colors">{link.label}</a>
          ))}
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden p-2 text-gray-800 hover:text-primary transition-colors relative w-10 h-10 flex items-center justify-center z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className={`material-icons-round text-3xl transition-transform duration-300 ${mobileOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'} absolute`}>menu</span>
          <span className={`material-icons-round text-3xl transition-transform duration-300 ${mobileOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'} absolute`}>close</span>
        </button>
      </div>

      {/* Overlay Mobile */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Panneau Mobile */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20 space-y-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}

        </div>
        <button
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-700 transition-colors"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
        >
          <span className="material-icons-round text-2xl">close</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;