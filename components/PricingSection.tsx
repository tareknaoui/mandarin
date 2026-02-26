import React, { useEffect, useRef } from 'react';

const PricingSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: "Méthode Solo",
            chinese: "自学",
            subtitle: "Apprentissage Autonome",
            price: 4500,
            popular: false,
            period: "Accès à vie",
            features: [
                "Manuel complet avec vidéos",
                "Exercices progressifs",
                "Carnet d'écriture (PDF)",
                "Accès à vie au contenu",
                "Mises à jour gratuites",
            ],
        },
        {
            name: "Méthode Assistée",
            chinese: "辅导",
            subtitle: "Progression Garantie",
            price: 19000,
            popular: true,
            period: "60 jours de formation",
            features: [
                "Tout le contenu de la Méthode Solo",
                "Correction quotidienne personnalisée",
                "Questions illimitées",
                "Support direct pendant 60 jours",
                "Suivi de progression",
                "Feedback personnalisé chaque jour",
            ],
        }
    ];

    return (
        <section id="pricing" className="relative py-24 overflow-hidden bg-background-light" ref={sectionRef}>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-12 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
                    <p className="font-chinese text-xl text-primary/80 mb-2">课程计划</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif">Programmes de Coaching</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Choisissez la formule qui correspond à vos objectifs. De la conversation fondamentale à l'immersion culturelle complète et la fluidité professionnelle.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-start">
                    {plans.map((plan, idx) => (
                        <div
                            key={plan.name}
                            className={`scroll-reveal relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${plan.popular
                                ? 'bg-white shadow-2xl ring-2 ring-primary/20 md:-mt-4 md:mb-4'
                                : 'bg-white shadow-lg border border-gray-100'
                                }`}
                            style={{ transitionDelay: `${idx * 0.15}s` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-primary/30">
                                        Le Plus Populaire
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className={`text-2xl font-bold font-serif ${plan.popular ? 'text-primary' : 'text-gray-900'}`}>{plan.name}</h3>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mt-0.5">{plan.subtitle}</p>
                                </div>
                                <span className="font-chinese text-3xl text-gray-200 font-bold leading-none">{plan.chinese}</span>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price} DA</span>
                                    {plan.period === "Accès à vie" ? (
                                        <span className="text-gray-500 text-sm font-medium">/ à vie</span>
                                    ) : (
                                        <span className="text-gray-500 text-sm font-medium">/ 60 jours</span>
                                    )}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-primary/20' : 'bg-gray-100'}`}></div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className={`material-icons-round text-lg mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-primary/70'}`}>check_circle</span>
                                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#booking"
                                className={`block w-full text-center py-3.5 rounded-lg font-medium text-sm transition-all duration-300 ${plan.popular
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-0.5'
                                    : 'bg-transparent border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                Choisir ce Plan
                            </a>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default PricingSection;
