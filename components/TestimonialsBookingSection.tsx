import React, { useState, useEffect, useRef } from 'react';

const TestimonialsBookingSection: React.FC = () => {
   const [selectedTime, setSelectedTime] = useState<string | null>(null);
   const sectionRef = useRef<HTMLDivElement>(null);

   const now = new Date();
   const currentMonth = now.toLocaleString('fr-FR', { month: 'long' });
   const currentMonthCapitalized = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
   const currentYear = now.getFullYear();
   const currentDay = now.getDate();
   const dayOfWeek = now.toLocaleString('fr-FR', { weekday: 'long' });
   const dayOfWeekCapitalized = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

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

   const testimonialsImages = [
      "/images/testimonials/temoignage-1.png",
      "/images/testimonials/temoignage-2.png",
      "/images/testimonials/temoignage-3.png",
      "/images/testimonials/temoignage-4.png",
      "/images/testimonials/temoignage-5.png",
      "/images/testimonials/temoignage-6.png",
      "/images/testimonials/temoignage-7.png"
   ];

   const timeSlots = ["09h00", "10h30", "13h00", "14h30", "16h00", "17h15"];

   const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
   const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
   const calendarDays: (number | null)[] = [];
   // Adjust for Monday-first week (French convention)
   const adjustedFirst = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
   for (let i = 0; i < adjustedFirst; i++) calendarDays.push(null);
   for (let d = 1; d <= Math.min(daysInMonth, 14); d++) calendarDays.push(d);

   return (
      <div id="success-stories" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24" ref={sectionRef}>
         <div className="fixed left-6 top-1/4 hidden xl:block opacity-20 pointer-events-none z-0">
            <h2 className="writing-vertical font-serif text-4xl text-primary font-bold">精益求精</h2>
         </div>

         {/* Témoignages */}
         <section className="relative">
            <div className="text-center mb-16 scroll-reveal">
               <span className="block text-primary font-serif tracking-widest text-sm mb-2 uppercase">Témoignages</span>
               <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink-charcoal font-serif">La Réussite de nos Élèves</h2>
               <p className="font-serif text-2xl text-primary/80 mb-6 font-chinese">学生感言</p>
               <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
               <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                  Découvrez les retours de nos élèves ayant transformé leur apprentissage grâce à notre méthode.
               </p>
            </div>

            <div className="relative w-full overflow-hidden py-10">
               {/* Dégradés latéraux pour indiquer le scroll (Desktop) */}
               <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f6f6] to-transparent z-10 pointer-events-none hidden md:block"></div>
               <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f6f6] to-transparent z-10 pointer-events-none hidden md:block"></div>

               <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 px-8 md:px-24 pb-8 items-center">
                  {testimonialsImages.map((src, idx) => (
                     <div
                        key={idx}
                        className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[300px] scroll-reveal relative group"
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                     >
                        <div className="relative w-full transform transition-transform duration-500 hover:scale-[1.02]">
                           {/* Ombre douce personnalisée */}
                           <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                           <img
                              src={src}
                              alt={`Témoignage ${idx + 1}`}
                              className="w-full h-auto rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-white/60 relative z-10 object-contain"
                              loading="lazy"
                           />
                           {/* Reflet type "Glassmorphism" subtil */}
                           <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 bg-gradient-to-tr from-white/5 to-white/20 pointer-events-none z-20 mix-blend-overlay"></div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-4">
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                     <span className="material-icons text-lg">swipe</span>
                     Glissez pour voir plus
                  </p>
               </div>
            </div>
         </section>

         {/* Réservation */}
         <section className="relative scroll-reveal" id="booking">
            <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" style={{
               backgroundImage: 'radial-gradient(#ec4913 0.5px, transparent 0.5px), radial-gradient(#ec4913 0.5px, #f8f6f6 0.5px)',
               backgroundSize: '20px 20px',
               backgroundPosition: '0 0, 10px 10px'
            }}></div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-12 text-center max-w-4xl mx-auto">
               <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full mb-6">Contact</span>
               <h2 className="text-3xl md:text-4xl font-bold text-ink-charcoal mb-4 font-serif">Envie d'en savoir plus ?</h2>
               <h3 className="text-2xl font-chinese text-primary mb-8">联系我们</h3>

               <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Pour toute question, demande de renseignements ou pour commencer l'aventure, n'hésitez pas à me contacter directement sur Instagram. Je réponds personnellement à tous les messages.
               </p>

               <a
                  href="https://www.instagram.com/le_chinois_vite_et_bien_dz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
               >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378a5.32 5.32 0 01-5.32 5.32 5.32 5.32 0 01-5.32-5.32 5.32 5.32 0 015.32-5.32 5.32 5.32 0 015.32 5.32zM8 12a4 4 0 108 0 4 4 0 00-8 0zm9.492-5.462a1.125 1.125 0 01-1.125 1.125 1.125 1.125 0 01-1.125-1.125 1.125 1.125 0 011.125-1.125 1.125 1.125 0 011.125 1.125z" fillRule="evenodd"></path></svg>
                  Nous contacter sur Instagram
               </a>
            </div>
         </section>
      </div>
   );
};

export default TestimonialsBookingSection;