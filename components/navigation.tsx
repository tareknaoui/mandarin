"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/programme", label: "Programme" },
    { href: "/methode", label: "Méthode" },
    { href: "/formateur", label: "Formateur" },
    { href: "/temoignages", label: "Résultats" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary group">
            <motion.svg 
              className="w-6 h-6" 
              viewBox="0 0 90 60" 
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <rect width="90" height="60" fill="#DE2910" />
              <polygon points="25,20 30,35 45,35 32,45 37,60 25,50 13,60 18,45 5,35 20,35" fill="#FFD700" />
              <circle cx="60" cy="20" r="3" fill="#FFD700" />
              <circle cx="65" cy="17" r="2.5" fill="#FFD700" />
              <circle cx="68" cy="23" r="2.5" fill="#FFD700" />
              <circle cx="65" cy="28" r="2.5" fill="#FFD700" />
              <circle cx="58" cy="28" r="2.5" fill="#FFD700" />
            </motion.svg>
            <span className="group-hover:text-accent transition-colors">Le Chinois Vite Et Bien</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  href={item.href} 
                  className="text-sm hover:text-accent transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded hover:bg-muted"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden pb-4 flex flex-col gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={item.href} 
                    className="block px-4 py-2 text-sm hover:bg-muted rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
