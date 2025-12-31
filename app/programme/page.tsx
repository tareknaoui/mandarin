import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Programme() {
  const methods = [
    {
      title: "Méthode Solo",
      target: "Pour les adultes qui veulent apprendre seuls",
      benefits: ["Apprendre seul", "Aller à l'essentiel", "Pratiquer dès le début", "Construire des bases solides"],
      includes: [
        "Manuel avec vidéos expliquées simplement et clairement",
        "Beaucoup d'exercices progressifs",
        "QR code pour télécharger le carnet d'écriture (PDF)",
      ],
      advantages: [
        "Pas besoin de professeur",
        "Pas besoin de connaissances préalables",
        "Juste une méthode claire et efficace",
      ],
      outcomes: [
        "Apprendre à écrire et reconnaître plus de 250 caractères chinois",
        "Maîtriser plus de 40 règles grammaticales essentielles",
        "Maîtriser la prononciation du chinois, les tons et le pinyin",
        "Être prêt pour l'examen officiel du HSK1",
      ],
    },
    {
      title: "Méthode Assistée",
      target: "Pour ceux qui veulent un accompagnement personnalisé",
      benefits: [
        "Correction et exercices quotidiens",
        "Feedback personnalisé chaque jour",
        "Formation pendant 60 jours",
        "Support à chaque moment de la journée",
      ],
      includes: [
        "Tout ce que contient la Méthode Solo",
        "Correction quotidienne avec feedback personnalisé",
        "Questions illimitées à tout moment",
        "Support direct pendant 60 jours",
      ],
      advantages: [
        "Accompagnement personnalisé",
        "Progression garantie",
        "Pas d'abandon possible",
        "Feedback continu pour progresser vite",
      ],
      outcomes: [
        "Acquérir des bases solides en chinois mandarin",
        "Apprendre à écrire et reconnaître plus de 250 caractères chinois et les utiliser correctement",
        "Maîtriser plus de 40 règles grammaticales essentielles",
        "Maîtriser la prononciation du chinois, les tons et le pinyin",
        "Être prêt pour l'examen officiel du HSK1",
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Programme de Formation</h1>
            <p className="text-lg opacity-90">Deux méthodes pour apprendre le mandarin selon vos objectifs</p>
          </div>
        </section>

        {/* Methods */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {methods.map((method, idx) => (
                <div key={idx} className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg transition">
                  <h2 className="text-3xl font-bold mb-2 text-primary">{method.title}</h2>
                  <p className="text-lg text-accent font-semibold mb-6">{method.target}</p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Ce que vous allez obtenir :</h3>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, bdx) => (
                        <li key={bdx} className="flex gap-3">
                          <span className="text-accent font-bold">✔</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Ce que comprend la formation :</h3>
                    <ul className="space-y-2">
                      {method.includes.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Avantages :</h3>
                    <ul className="space-y-2">
                      {method.advantages.map((adv, adx) => (
                        <li key={adx} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent">→</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">À la fin de la formation, tu seras capable de :</h3>
                    <ul className="space-y-2">
                      {method.outcomes.map((outcome, odx) => (
                        <li key={odx} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent">★</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/tarifs"
                    className="block w-full bg-accent text-accent-foreground text-center py-3 rounded font-semibold hover:opacity-90 transition"
                  >
                    Voir les tarifs
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pourquoi ces deux méthodes ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Autonomie</h3>
                <p className="text-muted-foreground">
                  La Méthode Solo vous permet d'apprendre à votre rythme sans dépendre d'un calendrier fixe.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Clarté</h3>
                <p className="text-muted-foreground">
                  Une pédagogie simple et directe expliquée par le formateur lui-même, sans jargon compliqué.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Soutien</h3>
                <p className="text-muted-foreground">
                  La Méthode Assistée offre un feedback quotidien pour garantir votre progression pendant 60 jours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Format */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Format de la formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Cours en direct</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Séances Zoom hebdomadaires (1h30)</li>
                  <li>• Conversations authentiques avec le formateur</li>
                  <li>• Correction de prononciation en temps réel</li>
                  <li>• Groupe limité (max 4 étudiants)</li>
                  <li>• Horaires flexibles</li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-accent">Matériaux pédagogiques</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Vidéos d'apprentissage interactives</li>
                  <li>• Exercices pratiques sur Notion</li>
                  <li>• Ressources pour la prononciation</li>
                  <li>• Dialogue à mémoriser chaque semaine</li>
                  <li>• Support WhatsApp pendant 6 mois</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choisir votre méthode</h2>
            <p className="text-lg opacity-90 mb-8">Consultez nos tarifs et sélectionnez la méthode qui vous convient</p>
            <Link
              href="/tarifs"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block"
            >
              Voir les tarifs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
