import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Tarifs() {
  const plans = [
    {
      name: "Méthode Solo",
      price: "0DA",
      description: "Pour les adultes qui veulent apprendre seuls",
      features: [
        "Manuel avec leçons en vidéos expliquées clairement",
        "Exercices progressifs détaillés",
        "QR code pour télécharger le carnet d'écriture (PDF)",
        "Pas besoin de professeur",
        "Pas besoin de connaissances préalables",
      ],
      whatYouLearn: [
        "Maîtriser la prononciation du chinois, les tons et le pinyin",
        "Apprendre à écrire et reconnaître plus de 250 caractères chinois",
        "Utiliser correctement les caractères dans des contextes réels",
        "Maîtriser plus de 40 règles grammaticales essentielles",
        "Être prêt pour l'examen officiel du HSK1",
      ],
      cta: "Accéder à la méthode",
      highlight: false,
    },
    {
      name: "Assisté",
      price: "0DA",
      period: "60 jours",
      description: "Avec correction et feedback quotidien personnalisé",
      features: [
        "Correction et exercices quotidiens pendant 60 jours",
        "Feedback personnalisé chaque jour",
        "Posez vos questions à n'importe quel moment de la journée",
        "Accès complet au manuel et aux vidéos",
        "Support direct pour clarifier tous vos doutes",
      ],
      whatYouLearn: [
        "Apprendre à écrire et reconnaître plus de 250 caractères chinois et les utiliser correctement",
        "Maîtriser plus de 40 règles grammaticales essentielles",
        "Maîtriser la prononciation du chinois, les tons et le pinyin",
        "Acquérir des bases solides en chinois mandarin",
        "Être prêt pour l'examen officiel du HSK1",
      ],
      cta: "S'inscrire maintenant",
      highlight: true,
    },
    {
      name: "Formule Premium",
      price: "0DA",
      period: "par mois",
      description: "Pour les apprenants sérieux",
      features: [
        "Cours illimités en direct",
        "Cours privés (1h/semaine)",
        "Support 24/7 WhatsApp",
        "Tous les matériaux + bonus",
        "Accès à la communauté privée",
        "Certification incluse",
        "Durée: 6 mois minimum",
      ],
      whatYouLearn: [
        "Maîtriser la prononciation du chinois, les tons et le pinyin",
        "Apprendre à écrire et reconnaître plus de 250 caractères chinois",
        "Utiliser correctement les caractères dans des contextes réels",
        "Maîtriser plus de 40 règles grammaticales essentielles",
        "Être prêt pour l'examen officiel du HSK1",
      ],
      cta: "Contacter pour les détails",
      highlight: false,
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarifs et Plans d'Apprentissage</h1>
            <p className="text-lg opacity-90">Choisissez la formule qui correspond à votre style d'apprentissage</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border-2 overflow-hidden transition-transform hover:scale-105 ${
                    plan.highlight ? "border-accent bg-accent/5 md:scale-105" : "border-border bg-card"
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-accent text-accent-foreground text-center py-2 font-bold text-sm">
                      RECOMMANDÉ
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      {plan.period && <p className="text-muted-foreground text-sm">{plan.period}</p>}
                    </div>

                    <button
                      className={`w-full py-3 rounded font-semibold transition mb-8 ${
                        plan.highlight
                          ? "bg-accent text-accent-foreground hover:opacity-90"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {plan.cta}
                    </button>

                    <div className="mb-8">
                      <h4 className="font-bold text-sm mb-4 text-foreground">Ce qui est inclus :</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="text-accent font-bold">+</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-8">
                      <h4 className="font-bold text-sm mb-4 text-foreground">Vous serez capable de :</h4>
                      <ul className="space-y-2">
                        {plan.whatYouLearn.map((item, lidx) => (
                          <li key={lidx} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="text-accent">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Profiles */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Quelle formule pour vous ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Choisissez Méthode Solo si...",
                  points: [
                    "Vous êtes un adulte",
                    "Vous préférez apprendre seul",
                    "Vous avez un budget limité",
                    "Vous n'avez pas de connaissances préalables",
                  ],
                },
                {
                  title: "Choisissez Assisté si...",
                  points: [
                    "Vous êtes motivé et sérieux",
                    "Vous avez besoin de soutien personnalisé",
                    "Vous voulez progresser rapidement",
                    "Vous préparez les affaires en Chine",
                  ],
                },
                {
                  title: "Choisissez Premium si...",
                  points: [
                    "Vous êtes passionné par les langues",
                    "Vous avez besoin d'un soutien maximal",
                    "Vous visez la fluidité complète",
                    "Vous envisagez une carrière en Chine",
                  ],
                },
              ].map((profile, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-4">{profile.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {profile.points.map((point, pidx) => (
                      <li key={pidx} className="flex gap-2">
                        <span className="text-accent">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Puis-je annuler mon abonnement ?",
                  a: "Oui, vous pouvez résilier à tout moment, mais les forfaits ont une durée minimale (1, 3 ou 6 mois).",
                },
                {
                  q: "Y a-t-il un premier cours gratuit ?",
                  a: "Oui ! Nous offrons un cours de consultation gratuit de 30 minutes pour évaluer votre niveau.",
                },
                {
                  q: "Que se passe-t-il après 6 mois ?",
                  a: "Vous pouvez continuer les cours à un tarif réduit (99€/mois pour le suivi) ou arrêter à tout moment.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-6 py-4">
                  <h3 className="font-bold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Inscrivez-vous dès aujourd'hui et bénéficiez d'une consultation gratuite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition">
                S'inscrire maintenant
              </button>
              <a
                href="mailto:contact@parlezmandarin.fr"
                className="border-2 border-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary-foreground/10 transition"
              >
                Poser une question
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
