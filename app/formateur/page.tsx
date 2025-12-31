import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Formateur() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Qui suis-je ?</h1>
            <p className="text-lg opacity-90">Formateur expert en mandarin avec plus de 10 ans d'expérience</p>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg h-64 md:h-96 flex items-center justify-center text-muted-foreground text-4xl">
                📸
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Mon parcours</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Bonjour ! Je m'appelle [Votre Nom]. Je suis un formateur francophone passionné d'apprentissage des
                    langues et de communication interculturelle.
                  </p>
                  <p>
                    Depuis plus de 10 ans, j'enseigne le mandarin à des apprenants de tous niveaux, des débutants
                    complets aux professionnels cherchant à perfectionner leur chinois des affaires.
                  </p>
                  <p>
                    Mon approche a aidé des centaines d'apprenants à atteindre la fluidité en conversationnel et à
                    construire des carrières internationales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Expertise & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Diplôme supérieur en linguistique appliquée</li>
                  <li>✓ Certification HSK 6 (plus haut niveau officiel)</li>
                  <li>✓ Formation à la pédagogie pour apprenants adultes</li>
                  <li>✓ Expérience en éducation bilingue</li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-accent">Spécialisations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Mandarin conversationnel (situationnel)</li>
                  <li>✓ Chinois des affaires et commerce international</li>
                  <li>✓ Enseignement aux débutants complets</li>
                  <li>✓ Coaching en communication interculturelle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Ma philosophie</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Je crois que apprendre une langue doit être joyeux, pertinent et centré sur la communication. Trop
                d'apprenants passent des années à étudier la grammaire sans jamais pouvoir parler.
              </p>
              <p>
                Avec moi, vous apprendrez à communiquer dès le premier jour. Chaque leçon construit sur ce que vous avez
                déjà appris, vous permettant de progresser rapidement et de voir des résultats tangibles.
              </p>
              <p>
                Je vois ma responsabilité comme celle de créer un espace sûr où les erreurs sont des opportunités
                d'apprentissage, et où chaque étudiant se sent confiant et encouragé.
              </p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Où j'ai étudié</h2>
            <div className="space-y-6">
              {[
                {
                  period: "2007-2011",
                  school: "Université [Nom]",
                  degree: "Maîtrise en Linguistique et Études asiatiques",
                },
                {
                  period: "2011-2013",
                  school: "Chine - Université de Pékin",
                  degree: "Études de mandarin avancé et immersion culturelle",
                },
                {
                  period: "2013-Present",
                  school: "Formation continue",
                  degree: "Méthodes pédagogiques innovantes et enseignement à distance",
                },
              ].map((edu, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-6 py-4">
                  <p className="text-accent font-semibold">{edu.period}</p>
                  <h3 className="font-bold text-lg">{edu.school}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à apprendre avec moi ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Découvrez les formules disponibles et inscrivez-vous pour votre premier cours gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tarifs"
                className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block"
              >
                Consulter les tarifs
              </a>
              <a
                href="mailto:contact@parlezmandarin.fr"
                className="border-2 border-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-foreground/10 transition inline-block"
              >
                Me contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
