"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Parlez Mandarin</h3>
            <p className="text-sm opacity-80">Formation en chinois pratique pour parler en situations réelles.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Formation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/programme" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  Programme
                </a>
              </li>
              <li>
                <a href="/methode" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  Méthode
                </a>
              </li>
              <li>
                <a href="/tarifs" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  Tarifs
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/formateur" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  Formateur
                </a>
              </li>
              <li>
                <a href="/temoignages" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  Résultats
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:opacity-80 hover:translate-x-1 inline-block transition-all">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@parlezmandarin.fr</li>
              <li>WhatsApp: +33 6 XX XX XX XX</li>
              <li>© 2025 Parlez Mandarin</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Formez-vous au chinois mandarin pratique avec un expert</p>
        </motion.div>
      </div>
    </footer>
  )
}
