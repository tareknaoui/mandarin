import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Temoignages() {
  const testimonials = [
    {
      name: "Marie D.",
      role: "Voyageuse",
      content:
        "J'ai appris le mandarin suffisant pour voyager en Chine seule. Les cours sont pratiques et amusants. Je peux maintenant commander ma nourriture préférée et discuter avec les locaux !",
      outcome: "A voyagé seule en Chine pendant 3 semaines",
    },
    {
      name: "Thomas L.",
      role: "Chef d'entreprise",
      content:
        "Comme entrepreneur, j'avais besoin du mandarin pour mes partenariats commerciaux. Cette formation m'a donné la confiance de négocier en chinois. Incroyable ROI.",
      outcome: "A conclu 3 contrats commerciaux en chinois",
    },
    {
      name: "Sophie R.",
      role: "Étudiante",
      content:
        "J'ai commencé sans aucune connaissance. Après 6 mois, je peux regarder des films en mandarin et comprendre. Le formateur est patient et motivant.",
      outcome: "Peut maintenant regarder des séries chinoises sans sous-titres",
    },
    {
      name: "Pierre G.",
      role: "Professionnel en éducation",
      content:
        "Après 20 ans d'étude de langues traditionnelles sans succès, j'ai finalement trouvé une méthode qui fonctionne. Les résultats parlent d'eux-mêmes.",
      outcome: "Communique couramment en mandarin quotidien",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Résultats & Témoignages</h1>
            <p className="text-lg opacity-90">
              Découvrez comment nos apprenants ont atteint leurs objectifs en mandarin
            </p>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: "500+", label: "Apprenants satisfaits" },
                { stat: "95%", label: "Taux de réussite" },
                { stat: "8 semaines", label: "Temps moyen pour parler" },
                { stat: "4.9/5", label: "Note moyenne" },
              ].map((metric, idx) => (
                <div key={idx} className="p-6">
                  <div className="text-4xl font-bold text-accent mb-2">{metric.stat}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Paroles de nos apprenants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-card p-8 rounded-lg border border-border">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary">Résultat: {testimonial.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Ce que vous allez accomplir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Après 1 mois",
                  skills: ["Prononciation correcte", "Phrases simples", "Expressions courantes"],
                },
                {
                  title: "Après 3 mois",
                  skills: ["Conversations basiques", "Situations quotidiennes", "Confiance croissante"],
                },
                {
                  title: "Après 6 mois",
                  skills: ["Fluidité conversationnelle", "Compréhension avancée", "Chinois des affaires"],
                },
              ].map((milestone, idx) => (
                <div key={idx} className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4 text-primary">{milestone.title}</h3>
                  <ul className="space-y-2">
                    {milestone.skills.map((skill, sidx) => (
                      <li key={sidx} className="flex gap-2 text-muted-foreground">
                        <span className="text-accent">→</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez nos apprenants satisfaits</h2>
            <p className="text-lg opacity-90 mb-8">Commencez votre parcours vers la fluidité en mandarin aujourd'hui</p>
            <a
              href="/tarifs"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block"
            >
              Voir les formules de formation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
