import React, { useEffect, useRef } from 'react';

const AboutCoachSection: React.FC = () => {
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

    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden" ref={sectionRef}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4913' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Photo Side */}
                    <div className="scroll-reveal relative">
                        <div className="relative max-w-md mx-auto lg:mx-0">
                            {/* Background decorative shape */}
                            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>

                            {/* Main Photo */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/coach-photo.jpg"
                                    alt="Sofiane Limani — Fondateur & Formateur"
                                    className="w-full aspect-[3/4] object-cover object-top"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Name overlay */}
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="font-serif text-2xl font-bold italic">Sofiane Limani</h3>
                                    <p className="text-sm text-white/80 uppercase tracking-widest font-medium">Fondateur & Formateur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="scroll-reveal" style={{ transitionDelay: '0.15s' }}>
                        <p className="font-chinese text-lg text-primary/80 mb-2">关于导师</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight mb-2">
                            L'authenticité de la langue,
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif italic leading-tight mb-8">
                            La pratique avant tout
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>
                                <span className="text-4xl font-serif font-bold text-gray-900 float-left mr-3 mt-1 leading-none">P</span>
                                assionné par la langue et la culture chinoises, j'ai passé plusieurs années en Chine pour maîtriser le mandarin dans sa forme la plus authentique.
                            </p>

                            <p>
                                Mon approche est simple : vous apprendre le chinois tel qu'il est réellement parlé, pas la version académique que personne n'utilise au quotidien.
                            </p>

                            <p>
                                J'ai développé une méthode qui permet à mes étudiants de parler dès les premières leçons, en se concentrant sur la communication pratique et les situations réelles.
                            </p>
                        </div>

                        {/* Signature area */}
                        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="font-serif text-xl font-bold italic text-gray-900">Sofiane Limani</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Formateur</p>
                            </div>
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                <div className="text-center">
                                    <span className="font-chinese text-primary font-bold text-lg leading-none block">漢</span>
                                    <span className="font-chinese text-primary font-bold text-lg leading-none block">語</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-6">
                            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl font-bold text-primary">10+</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Ans d'expérience</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl font-bold text-primary">500+</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Élèves formés</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl font-bold text-primary">98%</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCoachSection;
