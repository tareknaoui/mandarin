import React, { useEffect, useRef } from 'react';

const BookPromoSection: React.FC = () => {
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
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const features = [
        "Plus de 150 caractères chinois expliqués de façon simple.",
        "Des phrases en contexte pour apprendre naturellement.",
        "Une introduction au Pinyin, conçue spécialement pour les enfants.",
        "Des \"Points culturels\" pour découvrir la richesse de la Chine.",
        "Une grille d'écriture pour s’entraîner à écrire les caractères avec précision.",
        "Un diplôme de fin d’apprentissage pour récompenser leurs progrès et les encourager.",
        "Des fichiers audio inclus pour écouter la prononciation correcte et améliorer leur compréhension orale."
    ];

    return (
        <section id="book-promo" className="relative py-24 md:py-32 overflow-hidden bg-white" ref={sectionRef}>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-[500px] h-[500px] rounded-full bg-[#fde047] blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-red-500 blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image */}
                    <div className="w-full lg:w-5/12 scroll-reveal">
                        <div className="relative group mx-auto max-w-md lg:max-w-full">
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-[#fde047] rounded-3xl transform -translate-x-4 origin-bottom-right rotate-2 transition-transform duration-500 group-hover:rotate-6 group-hover:-translate-x-6"></div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#fffaeb] border border-[#fde047]/30 aspect-[4/5] flex items-center justify-center p-6 lg:p-10">
                                <img
                                    src="/book-promo.jpg"
                                    alt="Le Petit Explorateur du Chinois"
                                    className="w-full h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Badge Nouveauté */}
                                <div className="absolute top-6 left-6 md:-left-4 md:-top-4 bg-red-600 text-white text-xs md:text-sm font-bold uppercase tracking-widest py-3 px-6 rounded-xl shadow-xl transform -rotate-6 animate-pulse">
                                    ✨ Nouveauté
                                </div>
                            </div>

                            {/* Decorative floating elements */}
                            <span className="font-chinese text-6xl text-red-500/20 absolute -top-8 right-12 transform rotate-12 drop-shadow-sm pointer-events-none">书</span>
                            <span className="font-chinese text-5xl text-yellow-500/30 absolute bottom-12 -left-12 transform -rotate-12 drop-shadow-sm pointer-events-none">学</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-7/12 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-yellow-200">
                            <span className="material-icons-round text-base">child_care</span>
                            Pour les enfants (8 ans et +)
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif leading-[1.15]">
                            Découvrez <br />
                            <span className="text-red-600">Le Petit Explorateur</span> du Chinois 🎒
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-10">
                            Le livre de référence, idéal pour initier vos enfants à la langue et la culture chinoise de manière ludique et intuitive.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="bg-green-100 text-green-600 rounded-full p-1 shrink-0 mt-0.5">
                                        <span className="material-icons-round text-lg block">done</span>
                                    </div>
                                    <p className="text-gray-700 leading-snug font-medium text-sm md:text-base">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-10 border border-red-100 relative shadow-sm">
                            <span className="material-icons-round text-5xl text-red-200 absolute top-4 left-4 rotate-180 opacity-50">format_quote</span>
                            <p className="text-gray-800 italic relative z-10 pl-8 pr-2 text-lg md:text-xl font-serif">
                                "J’ai créé ce livre avec une méthode intuitive pour que les enfants apprennent facilement, sans stress et avec plaisir."
                            </p>
                            <div className="flex items-center gap-4 mt-6 pl-8">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-md">
                                    <img src="/coach-photo.jpg" alt="Sofiane Limani" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-base">Sofiane Limani</p>
                                    <p className="text-red-500 text-xs font-bold uppercase tracking-wider">Auteur & Formateur</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#order-book" className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden inline-flex items-center gap-3 w-full sm:w-auto justify-center text-lg">
                                <span className="material-icons-round relative z-10">shopping_cart</span>
                                <span className="relative z-10">Commander le livre</span>
                                <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookPromoSection;
