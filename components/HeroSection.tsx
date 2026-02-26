import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Contenu Gauche */}
        <div className="order-2 lg:order-1 space-y-8 max-w-2xl">
          {/* Badge de Confiance */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Formateur Expert • 500+ Apprenants</span>
          </div>

          {/* Titre */}
          <h1 className="animate-fade-in-up delay-100 font-serif text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900">
            Apprenez le chinois pour <br />
            <span className="relative inline-block mt-2">
              <span className="text-primary italic font-serif pr-2">parler vraiment</span>
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-80" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7538 4.29657 91.0346 -1.88417 197.996 2.05943" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="animate-fade-in-up delay-200 text-lg text-gray-600 leading-relaxed font-light max-w-lg">
            Formation pratique en mandarin. Parlez en situations réelles dès les premières leçons.
          </p>

          {/* Actions */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium text-lg rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Commencer maintenant
              <span className="material-icons-round ml-2 text-xl">arrow_forward</span>
            </a>
            <a href="#methodology" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-300 hover:border-primary text-gray-700 font-medium text-lg rounded-lg transition-colors duration-300 group">
              <span className="material-icons-round mr-2 text-gray-400 group-hover:text-primary transition-colors">menu_book</span>
              Voir le programme
            </a>
          </div>

          {/* Témoignage */}
          <div className="animate-fade-in-up delay-400 pt-8 border-t border-gray-200 flex items-start gap-4">
            <div className="flex -space-x-3">
              <img alt="Élève" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARs9Ka8VkUiYbpDGzcRWyX8ntZ7263PbCRMRiyJ2TxjDXVyX0h7-mmR7Y5cv4MVtqOYBOs1xIeBCiD0SSAgaLtX78nsG79Ab8JabJuiEhI1K3U5i6BfF91qzmS2ve97JfDfNin1b9pIvIZNbO5PfaVgltHu5DpN3SkHGqqf_RSrPcSZEkeEsqt8b9zINwMao4O1W0JoL_evxccZMts_tZHT9d70IqNbuHxSCmR9LMTpwg5DgOO5v23CSQ0ogKYjwwDIEv7JzqfKMY" />
              <img alt="Élève" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFt2HUKucaW_c8H9bcNjIL9lEuZXzV8s_9kCYYRDpKZv9pwh6OX7sbnoIqGUGrxGkMEXNapuTyWdnLqUcruILnoHd2ggPQ3XNPx-z0PUYNiHhMZe4Q-qJfEJfz2y1zJCRxoQUBq0kBO2KVtAwCr_Vi4Uv73gnNEk7MaVVlM5qJ4mdlHhyKtxUIcQtKn0QuPZqOpelToIxWazSIdeTf0bVWAdMzCE10GUla-k3l9skdUZaYTRCEA18GJ7mv6L2gReW3O0jGw-jJcC4" />
              <img alt="Élève" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPRqFQlyIDilwAjzXSibeZpy5h70t2yOFV0TfFcxJXQSU2zR1isCRf2ZdDyVjgz-53VSnBB355d-js3CJ4KV4fxMHQSF37E9E1TP511MWgKyz9BtwevYnh5DC9cjIGFZfD6luLNsTrbbr3RoD8OxTNtIRGAq_5ytL7XD6DmuP3pvWL89E_l1OSZNeEJP1MJaob6Rg32gGdaKoI0HNFU7LS33uMQZsCzmIwVmOBj9TkrAejzQGq1rKM-2ib7Yw1EVDacSDIh1qNv_I" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                +500
              </div>
            </div>
            <div>
              <div className="flex text-primary text-sm mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons-round text-base">star</span>
                ))}
              </div>
              <p className="text-sm text-gray-500">La confiance de nos élèves à travers le monde.</p>
            </div>
          </div>
        </div>

        {/* Visuel Droite */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end animate-fade-in delay-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 group">
            <img
              alt="Art de la Calligraphie Chinoise"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrqqv0gQoWUlgwMHwwmXjZir_Wl1h1NmTBD5wNvOhJFH2YP-beKK_wn61avPnZYLAfEGWKriykq_DOx6vMqu6UXcFvFlhVNYbSGlownWQoXoS4zWj88-0szGzuJzaZTHq2iFf5H_m8auAk46I_8RG_m09XZaTJLAyGh2zHCci-ndhcGdNvVFYmbABg28w4Ze_29yE0K_oQCgiut_hKrsIxHClpXj-Zm1DqKS0dqNbsPk6W7zNDRkCY8RXK3xlRxjSG8H1Ftr02vg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>

            <div className="absolute top-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <span className="font-chinese text-4xl text-primary font-bold">道</span>
            </div>
            <div className="absolute top-28 right-8 text-xs font-medium text-white/90 drop-shadow-md text-right leading-tight">
              Dao (La Voie)<br />Le Chemin de la Maîtrise
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm uppercase tracking-widest font-semibold text-primary/80">Immersion Authentique</span>
              </div>
              <h3 className="font-serif text-2xl mb-2">Comprenez naturellement.</h3>
              <p className="text-white/80 text-sm leading-relaxed">Entraînez votre oreille avec des locuteurs natifs et des situations authentiques.</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-float">
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-primary">
              <span className="material-icons-round text-3xl">light_mode</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Sagesse du Jour</p>
              <p className="text-sm font-bold text-gray-800 font-chinese">千里之行，始於足下</p>
              <p className="text-[10px] text-gray-400 italic">« Un voyage de mille lieues commence par un premier pas »</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;