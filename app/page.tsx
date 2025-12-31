"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 text-6xl md:text-8xl pointer-events-none overflow-hidden">
            <motion.div 
              className="absolute top-10 left-10"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              中
            </motion.div>
            <motion.div 
              className="absolute top-20 right-20"
              animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              文
            </motion.div>
            <motion.div 
              className="absolute bottom-32 left-1/4"
              animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              汉
            </motion.div>
            <motion.div 
              className="absolute bottom-20 right-10"
              animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              字
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Apprenez le chinois pratique pour parler en situations réelles
                </h1>
                <p className="text-lg opacity-90 mb-8">
                  Pour débutants, professionnels et voyageurs qui veulent vraiment communiquer en mandarin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/programme"
                    className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 hover:scale-105 transition-all text-center"
                  >
                    Voir la formation
                  </Link>
                  <Link
                    href="/tarifs"
                    className="border-2 border-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-foreground/10 hover:scale-105 transition-all text-center"
                  >
                    S'inscrire
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                className="bg-primary-foreground/10 rounded-lg h-64 md:h-80 flex flex-col items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-7xl mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    你好
                  </motion.div>
                  <p className="text-sm text-primary-foreground/80 mb-6">Bonjour en Mandarin</p>
                  <div className="flex justify-center gap-8">
                    <motion.svg 
                      className="w-16 h-16" 
                      viewBox="0 0 100 100" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ellipse cx="50" cy="50" rx="30" ry="35" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
                      <rect x="45" y="15" width="10" height="70" fill="#B8860B" />
                      <line x1="50" y1="10" x2="50" y2="5" stroke="#B8860B" strokeWidth="2" />
                      <line x1="50" y1="95" x2="50" y2="100" stroke="#B8860B" strokeWidth="2" />
                      <path d="M 45 50 Q 50 45 55 50" stroke="#DE2910" strokeWidth="2" fill="none" />
                      <path d="M 45 60 Q 50 55 55 60" stroke="#DE2910" strokeWidth="2" fill="none" />
                    </motion.svg>
                    <motion.svg 
                      className="w-16 h-16" 
                      viewBox="0 0 100 100" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: [0, -5, 5, 0], y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <ellipse cx="50" cy="50" rx="30" ry="35" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
                      <rect x="45" y="15" width="10" height="70" fill="#B8860B" />
                      <line x1="50" y1="10" x2="50" y2="5" stroke="#B8860B" strokeWidth="2" />
                      <line x1="50" y1="95" x2="50" y2="100" stroke="#B8860B" strokeWidth="2" />
                      <path d="M 45 50 Q 50 45 55 50" stroke="#DE2910" strokeWidth="2" fill="none" />
                      <path d="M 45 60 Q 50 55 55 60" stroke="#DE2910" strokeWidth="2" fill="none" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="text-primary">学习普通话</span> - Pourquoi cette formation ?
              </h2>
              <p className="text-center text-muted-foreground mb-12">Apprendre le mandarin authentique</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 1a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3 text-primary">Parler dès le début</h3>
                  <p className="text-muted-foreground">
                    Concentrez-vous sur la communication réelle, pas sur la grammaire abstraite.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3 text-primary">Comprendre naturellement</h3>
                  <p className="text-muted-foreground">
                    Entraînez votre oreille avec des locuteurs natifs et des situations authentiques.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  <h3 className="text-xl font-bold mb-3 text-primary">Apprendre le chinois utile</h3>
                  <p className="text-muted-foreground">
                    Maîtrisez le mandarin pour les affaires, les voyages et les interactions quotidiennes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-primary">谁想学</span> - Pour qui est cette formation ?
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="text-center p-8 bg-background rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6m0 0l-8.5 4.75a2 2 0 0 1-1.999.001L2 16m20-6l-8.5-4.75a2 2 0 0 0-1.998 0L2 10m0 0v6m0 0l8.5 4.75" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Débutants</h3>
                  <p className="text-muted-foreground">
                    Aucune connaissance préalable requise. Vous apprendrez les bases en parlant dès le premier cours.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="text-center p-8 bg-background rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Professionnels</h3>
                  <p className="text-muted-foreground">
                    Développez des compétences en chinois des affaires pour négocier et communiquer avec confiance.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="text-center p-8 bg-background rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.13v-5.36l-8.5-5.36V2l-6 4.5-6-4.5v2.41L2 10.77v5.36l8.5 4.5v2.41l6-4.5 6 4.5v-2.41l8.5-4.5z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Voyageurs</h3>
                  <p className="text-muted-foreground">
                    Préparez-vous à voyager en Chine avec le mandarin pratique pour les situations quotidiennes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <motion.div 
            className="absolute top-0 right-0 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="30" ry="35" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              <rect x="45" y="15" width="10" height="70" fill="currentColor" />
              <line x1="50" y1="10" x2="50" y2="5" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="95" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
            </svg>
          </motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 opacity-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="30" ry="35" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              <rect x="45" y="15" width="10" height="70" fill="currentColor" />
              <line x1="50" y1="10" x2="50" y2="5" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="95" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
            </svg>
          </motion.div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                准备好了吗？ - Prêt à commencer votre voyage en mandarin ?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Découvrez nos formules de formation et inscrivez-vous pour votre premiers cours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tarifs"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 hover:scale-105 transition-all"
                >
                  Voir les tarifs
                </Link>
                <Link
                  href="/formateur"
                  className="border-2 border-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-foreground/10 hover:scale-105 transition-all"
                >
                  Rencontrer le formateur
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
