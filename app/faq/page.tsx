import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function FAQ() {
  const faqs = [
    {
      question: "Puis-je apprendre le mandarin sans apprendre les caractères ?",
      answer:
        "Oui, au moins au début ! Nous utilisons le pinyin (romanisation) dans les premiers niveaux. Vous apprendrez les caractères graduellement à votre propre rythme. Beaucoup d'apprenants commencent sans caractères et les ajoutent ensuite.",
    },
    {
      question: "Combien de temps pour parler couramment ?",
      answer:
        "Cela dépend de votre définition de 'couramment'. Pour tenir une conversation basique : 2-3 mois avec la formule Pro. Pour la fluidité réelle : 6-8 mois. Plus vous pratiquez en dehors des cours, plus vite vous progresserez.",
    },
    {
      question: "Est-ce adapté aux débutants complets ?",
      answer:
        "Absolument ! Notre méthode est spécialement conçue pour les débutants. Le formateur vous guidera patiemment à travers chaque étape, et vous parlerez dès le premier cours.",
    },
    {
      question: "Quel est le meilleur horaire pour les cours ?",
      description:
        "Les horaires sont flexibles ! Nous offrons des cours en différents créneaux pour accommoder différents fuseau horaires et emplois du temps. Vous pouvez choisir les jours et heures qui vous conviennent.",
    },
    {
      question: "Puis-je suivre les cours seul ou dois-je rejoindre un groupe ?",
      answer:
        "Vous pouvez faire les deux ! La formule Pro inclut des cours de groupe (max 4 étudiants). La formule Premium inclut des cours privés. Les groupes réduits facilitent la correction personnalisée.",
    },
    {
      question: "Que faire si je dois manquer un cours ?",
      answer:
        "Vous pouvez reporter jusqu'à 2 cours par mois. Les enregistrements vidéo des cours sont fournis, vous pouvez donc rattraper à votre rythme.",
    },
    {
      question: "Offrez-vous des certificats ?",
      answer:
        "Oui, tous les apprenants reçoivent un certificat d'achèvement. Les apprenants Premium reçoivent un certificat de compétence plus détaillé.",
    },
    {
      question: "Comment puis-je m'inscrire ?",
      answer:
        "Visitez simplement la page tarifs, choisissez votre formule, et remplissez le formulaire d'inscription. Vous aurez une consultation gratuite de 30 minutes avant votre premier cours.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions Fréquemment Posées</h1>
            <p className="text-lg opacity-90">Trouvez les réponses à vos questions sur la formation en mandarin</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 hover:border-accent/50 transition">
                  <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer || faq.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              N'hésitez pas à nous contacter directement. Nous sommes là pour répondre à vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@parlezmandarin.fr"
                className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block"
              >
                Email: contact@parlezmandarin.fr
              </a>
              <a
                href="https://wa.me/33XXXXXXXXX"
                className="border-2 border-primary px-8 py-3 rounded font-semibold hover:bg-primary/10 transition inline-block"
              >
                WhatsApp: Discuter maintenant
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer votre aventure mandarin ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Consultez nos formules et inscrivez-vous pour votre premier cours gratuit
            </p>
            <a
              href="/tarifs"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition inline-block"
            >
              Voir les formules
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
