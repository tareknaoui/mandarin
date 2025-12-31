import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Methode() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">La Méthode d'Apprentissage</h1>
            <p className="text-lg opacity-90">
              Une approche basée sur la communication réelle et la pratique immédiate
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Principes fondamentaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Communication d'abord</h3>
                <p className="text-muted-foreground mb-4">
                  Nous mettons l'accent sur la conversation authentique dès votre premier cours. Au lieu de mémoriser
                  des règles grammaticales abstraites, vous apprendrez en parlant et en écoutant.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Vous apprendrez comment dire les choses, pas seulement les règles."
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Situationnel et pertinent</h3>
                <p className="text-muted-foreground mb-4">
                  Chaque leçon se concentre sur des contextes réels : commander au restaurant, négocier une affaire,
                  voyager en train, utiliser WeChat.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Vous apprenez ce dont vous avez vraiment besoin."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Methods */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Comment ça marche</h2>
            <div className="space-y-8">
              {[
                {
                  title: "1. Dialogues immersifs",
                  description:
                    "Vous écoutez et pratiquez des dialogues authentiques avec des locuteurs natifs. Chaque dialogue couvre une situation réelle avec du vocabulaire et des expressions pratiques.",
                },
                {
                  title: "2. Pratique guidée",
                  description:
                    "Vous pratiquez les mêmes dialogues avec correction en temps réel du formateur. Il vous aide à perfectionner votre prononciation et votre intonation.",
                },
                {
                  title: "3. Conversation libre",
                  description:
                    "Vous avez des conversations libres sur des sujets liés au contexte de la leçon. C'est où vous pratiquez vraiment la communication spontanée.",
                },
                {
                  title: "4. Révision active",
                  description:
                    "Chaque semaine, vous revoyez ce que vous avez appris avec des exercices interactifs et des jeux pour renforcer la mémorisation.",
                },
              ].map((method, idx) => (
                <div key={idx} className="flex gap-6 border-l-4 border-accent pl-6">
                  <div className="flex-shrink-0">
                    <div className="text-3xl font-bold text-accent">{idx + 1}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Outils utilisés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Zoom", purpose: "Cours en direct" },
                { name: "Notion", purpose: "Matériaux d'étude" },
                { name: "WhatsApp", purpose: "Support quotidien" },
                { name: "Vidéos HD", purpose: "Apprentissage à votre rythme" },
              ].map((tool, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border text-center">
                  <h3 className="font-bold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi cette méthode fonctionne</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Plus rapide</h3>
                <p className="opacity-90">
                  Vous apprenez ce que vous pratiquez. Les classes traditionnelles enseignent des règles que vous
                  n'utiliserez jamais.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Plus mémorable</h3>
                <p className="opacity-90">
                  Vous mémorisez par la répétition et l'utilisation authentique, pas par la mémorisation mécanique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Plus pertinent</h3>
                <p className="opacity-90">
                  Chaque leçon vous donne des compétences immédiatement utiles pour votre vie réelle.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
