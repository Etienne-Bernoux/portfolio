# Portfolio — Etienne Bernoux

## Projet

Page portfolio personnelle hébergée sur GitHub Pages.
Ce n'est **pas** un CV en ligne — c'est une page qui reflète qui je suis : dev, bricoleur, père, passionné d'aérospatial.

URL cible : `https://etienne-bernoux.github.io/portfolio/`

## Stack

- **HTML/CSS/JS** — ES modules, zéro dépendance build
- **Fonts** — JetBrains Mono (code) + Inter (prose) via Google Fonts CDN
- **Hébergement** — GitHub Pages, branche `main`, dossier `/`
- **Tests** — Vitest (unit, co-localisés `.spec.js`) + Playwright BDD (e2e, Gherkin FR)
- Pas de framework, pas de bundler, pas de Jekyll

## Architecture

```
portfolio/
├── index.html                      # Squelette HTML, containers vides
├── css/style.css                   # CSS avec custom properties
├── src/
│   ├── domain/                     # Logique pure, pas de DOM, testable
│   │   ├── donnees/                # Données structurées (achievements, POIs, skills)
│   │   ├── theme/                  # get/apply/toggle/init theme (localStorage)
│   │   ├── langue/                 # get/toggle langue
│   │   ├── easter-eggs/            # Konami (détecteur séquence), secret-dot (compteur clics)
│   │   └── canvas/                 # Étoiles + avions (création, physique, rendu — pure math)
│   └── ui/                         # Modules UI, chacun exporte initialiser*()
│       ├── app.js                  # Shell d'init — importe et appelle tous les modules
│       ├── hero.js                 # Secret dot wiring
│       ├── achievements.js         # Génère grid + scroll-reveal
│       ├── carte.js                # Génère POIs depuis donnees + detail panel
│       ├── arbre.js                # Génère SVG skill tree + scroll-reveal + tooltips
│       ├── canvas-bg.js            # Animation loop, resize, visibility
│       ├── konami-ui.js            # keydown → stars + toast
│       └── theme-ui.js             # Bouton theme + canvas reinit
├── tests/e2e/
│   ├── features/*.feature          # Gherkin en français
│   └── steps/*.steps.js            # Step definitions Playwright
├── package.json                    # type: module
├── vitest.config.js
└── playwright.config.js
```

### Principes DDD

- **domain/** : fonctions pures, pas de `document`, pas de DOM → testables avec Vitest
- **ui/** : chaque module exporte une fonction `initialiser*()` qui câble le DOM
- **donnees/** : données immutables (`Object.freeze`), single source of truth
- Tests unitaires co-localisés (`*.spec.js` à côté du source)

### Sections (ordre d'affichage)

- **Hero** — prompt terminal, tagline, liens
- **Achievements** — grille 2 colonnes, tiers legendary/epic/standard
- **Carte explorable** — minimap 4 zones (CODE/SPATIAL/FAMILLE/ATELIER), POIs cliquables
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
- **Commits** : conventional commits en français
- **Tests** : domain = Vitest specs co-localisés, UI = Playwright BDD Gherkin FR

## Règles de contribution (pour Claude)

- Les éléments personnels (foi, famille) sont **subtils** — jamais in-your-face
- Les références gaming (Factorio, Skyrim, etc.) sont des easter eggs, pas du contenu visible
- `localStorage` uniquement pour le thème

## Idées en réserve

- **Barre XP** dans le hero (gamification, pas encore implémenté)
- Galerie de plans de meubles dans la zone ATELIER
- Favicon custom
- `og:image` pour le partage social
