export const DEBUT_CARRIERE = '2018-06-01';

const MS_PAR_AN = 365.2425 * 24 * 60 * 60 * 1000;

export function calculerXp(maintenant = new Date(), debut = new Date(DEBUT_CARRIERE)) {
  const annees = (maintenant - debut) / MS_PAR_AN;
  if (annees <= 0) return { niveau: 0, progression: 0 };
  const niveau = Math.floor(annees);
  return { niveau, progression: annees - niveau };
}
