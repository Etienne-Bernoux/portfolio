# Portfolio — Etienne Bernoux

## Projet

Page portfolio personnelle hébergée sur GitHub Pages.
Ce n'est **pas** un CV en ligne — c'est une page qui reflète qui je suis : dev, bricoleur, père, passionné d'aérospatial.

URL cible : `https://etienne-bernoux.github.io/portfolio/`

## Stack

- **HTML/CSS/JS** — fichier unique `index.html`, zéro dépendance build
- **Fonts** — JetBrains Mono (code) + Inter (prose) via Google Fonts CDN
- **Hébergement** — GitHub Pages, branche `main`, dossier `/`
- Pas de framework, pas de bundler, pas de Jekyll

## Architecture du fichier

Tout est dans `index.html` :

1. `<style>` — CSS avec custom properties (dark theme)
2. `<body>` — structure sémantique : `<main>` > sections + `<footer>`
3. `<script>` — JS vanilla, IIFEs isolées

### Sections (ordre d'affichage)

- **Hero** — prompt terminal, tagline, liens
- **Achievements** — grille 2 colonnes, tiers legendary/epic/standard
- **Carte explorable** — SVG 4 zones (CODE/SPATIAL/FAMILLE/ATELIER), POIs cliquables
- **Skill tree** — SVG 3 branches depuis noeud "Craft", scroll-reveal
- **About** — texte personnel (famille, scouts, étoiles)
- **Footer** — liens + croix subtile

### Easter eggs

- Triple-clic sur le `.` du nom → message Factorio
- Konami code (↑↑↓↓←→←→BA) → pluie d'étoiles + toast
- Tooltip sur "les étoiles" → "Ad astra per aspera. ✝"
- Tooltip footer croix → "Fac et spera."

## Design tokens

```
--text: #e4e4e7       --accent:  #22d3ee (cyan)
--text-dim: #a1a1aa   --accent2: #a78bfa (violet)
--bg: #09090b         --accent3: #34d399 (green)
--card-bg: #18181b    gold:      #eab308
--border: #27272a
```

## Conventions

- **Bilingue FR/EN** via attributs `data-lang="fr|en"` et sélecteur `html[lang]` en CSS
- **Pas de dépendance externe** sauf Google Fonts
- **Animations** : CSS transitions + IntersectionObserver pour scroll-reveal
- **Canvas** : particle network en background, se pause quand l'onglet est caché
- Accessibilité : `focus-visible`, `prefers-reduced-motion`, sémantique HTML5

## Règles de contribution (pour Claude)

- Ce fichier est un **single-file** — ne jamais le splitter
- Garder le volume sous contrôle : ~50 lignes max par itération
- Toujours demander avant de coder : "Tu écris ou je propose ?"
- Les éléments personnels (foi, famille) sont **subtils** — jamais in-your-face
- Les références gaming (Factorio, Skyrim, etc.) sont des easter eggs, pas du contenu visible
- Privilégier les SVG inline pour les éléments interactifs (tree, map)
- Pas de `localStorage` ni de state persisté — tout est stateless

## Idées en réserve

- **Barre XP** dans le hero (gamification, pas encore implémenté)
- Galerie de plans de meubles dans la zone ATELIER
- Nouveaux projets perso dans la zone FAMILLE
- Favicon custom
- `og:image` pour le partage social
