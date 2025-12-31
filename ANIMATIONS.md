# Animations ajoutées au site

## 🎨 Animations CSS personnalisées

Plusieurs animations CSS ont été ajoutées dans `globals.css` :

- **fadeInUp** : Apparition avec mouvement vers le haut
- **fadeIn** : Apparition en fondu
- **slideInLeft/Right** : Glissement depuis la gauche/droite
- **float** : Animation flottante douce
- **floatSlow** : Animation flottante lente avec rotation
- **pulse** : Pulsation douce
- **shimmer** : Effet de brillance

## ✨ Animations Framer Motion

### Page d'accueil (page.tsx)
- Caractères chinois flottants animés dans le hero
- Animation d'entrée du titre et du texte avec slide-in
- Boutons avec effet hover scale
- Caractère "你好" avec animation de pulsation
- Lanternes chinoises avec rotation et mouvement
- Sections avec effet scroll reveal
- SVG décoratifs avec rotation continue

### Navigation (navigation.tsx)
- Logo avec animation de rotation au hover
- Menu items avec entrée progressive
- Ligne animée sous les liens au hover
- Menu mobile avec animation d'ouverture/fermeture fluide
- Backdrop blur pour un effet moderne

### Footer (footer.tsx)
- Colonnes avec animation d'entrée progressive
- Liens avec effet de glissement au hover

### Composant ScrollReveal
Composant réutilisable pour animer l'apparition au scroll :
- Support de différentes directions (up, down, left, right)
- Délais configurables
- Animation une seule fois (once: true)

## 🎭 Effets interactifs

- Cartes avec hover lift et shadow
- Boutons avec scale au hover
- Transitions fluides sur tous les éléments
- Backdrop blur sur la navigation

## 🚀 Technologies utilisées

- **Framer Motion** : Animations React modernes
- **CSS Animations** : Animations performantes
- **Tailwind CSS** : Transitions et transforms
