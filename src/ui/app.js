import { toggleLang } from '../domain/langue/langue.js';
import { initialiserTheme } from './theme-ui.js';
import { initialiserHero } from './hero.js';
import { initialiserKonami } from './konami-ui.js';
import { initialiserAchievements } from './achievements.js';
import { initialiserCarte } from './carte.js';
import { initialiserArbre } from './arbre.js';
import { initialiserCanvas } from './canvas-bg.js';

// Theme first (before canvas)
initialiserTheme();
initialiserCanvas();

// Lang toggle
document.querySelector('.lang-toggle').addEventListener('click', () => toggleLang());

// Sections
initialiserHero();
initialiserAchievements();
initialiserCarte();
initialiserArbre();
initialiserKonami();
