import React, { useEffect, useRef } from 'react';

const MethodologySection: React.FC = () => {
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

  const steps = [
    {
      title: "Apprendre les sons",
      chinese: "发音",
      description: "Maîtrisez la prononciation et les tons du mandarin grâce à des exercices audio progressifs. Pas de théorie inutile, juste de la pratique.",
      image: "/step1-photo.jpg",
      iconPath: (
        <>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </>
      ),
      layout: "left"
    },
    {
      title: "Construire le vocabulaire",
      chinese: "词汇",
      description: "Apprenez les mots et expressions les plus utiles pour communiquer dans des situations réelles du quotidien.",
      image: "/step2-photo.jpg",
      iconPath: (
        <>
          <path d="M19 8h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"></path>
          <path d="M4 8h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"></path>
          <path d="M8 4h8"></path>
          <path d="M12 4v4"></path>
        </>
      ),
      layout: "right"
    },
    {
      title: "Pratiquer la grammaire",
      chinese: "语法",
      description: "Comprenez les règles grammaticales essentielles à travers des exemples concrets et des exercices pratiques.",
      image: "/step3-photo.jpg",
      iconPath: (
        <>
          <path d="M4 10h16"></path>
          <path d="M4 20h16"></path>
          <path d="M4 10v10"></path>
          <path d="M20 10v10"></path>
          <path d="M9 10c0 5 6 5 6 0"></path>
        </>
      ),
      layout: "left"
    }
  ];

  return (
    <section id="methodology" className="relative py-24 overflow-hidden bg-background-light" ref={sectionRef}>
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-reveal">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight font-serif">Comment ça marche ?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un parcours structuré alliant discipline et interaction. Nous vous guidons de votre premier ton jusqu'à la maîtrise, en vous enseignant le chinois authentique tel qu'il est parlé.
          </p>
        </div>

        {/* Étapes */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${step.layout === 'right' ? 'md:flex-row-reverse' : ''}`}>
              {/* Contenu textuel */}
              <div className="flex-1 md:w-1/2 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {step.iconPath}
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary tracking-widest uppercase mb-1 block">Étape 0{index + 1}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-serif leading-tight">{step.title}</h3>
                  </div>
                </div>
                <div className="pl-20">
                  <span className="text-5xl font-chinese text-gray-200 absolute -mt-8 -ml-6 opacity-30 select-none z-0">{step.chinese}</span>
                  <p className="text-lg text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                </div>
              </div>

              {/* Image d'illustration */}
              <div className="flex-1 md:w-1/2 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform ${step.layout === 'left' ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'} transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-100 bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vidéo de la méthode */}
        <div className="mt-24 md:mt-32 max-w-4xl mx-auto scroll-reveal text-center">
          <h3 className="text-3xl font-bold text-gray-900 font-serif mb-8">Découvrez la méthode en vidéo</h3>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-900">
            <iframe
              src="https://drive.google.com/file/d/1KFhTYyK-oqvqJ1gFHn4MJ4fB--veLJiI/preview"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen"
              title="Vidéo de la méthodologie">
            </iframe>
          </div>
        </div>

        <div className="mt-24 text-center scroll-reveal">
          <div className="inline-flex flex-col items-center">
            <div className="h-20 w-px bg-gradient-to-b from-transparent to-primary/30 mb-8 hidden md:block"></div>
            <a href="#pricing" className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 overflow-hidden inline-block">
              <span className="relative z-10 flex items-center gap-2">
                Voir les tarifs
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;