# language: fr
Fonctionnalité: Carte explorable

  Scénario: Cliquer sur un POI ouvre le detail panel
    Étant donné que j'ouvre le portfolio
    Quand je clique sur le POI "mathquiz"
    Alors le detail panel est visible
    Et le detail panel affiche "MathQuiz"

  Scénario: Cliquer deux fois sur un POI ferme le panel
    Étant donné que j'ouvre le portfolio
    Quand je clique sur le POI "mathquiz"
    Et je clique sur le POI "mathquiz"
    Alors le detail panel est masqué

  Scénario: Un POI est activable au clavier
    Étant donné que j'ouvre le portfolio
    Quand j'active le POI "idlecrusade" au clavier
    Alors le detail panel est visible
    Et le detail panel affiche "Idle Crusade"
    Et le POI "idlecrusade" est annoncé comme déplié

  Scénario: Échap ferme le panel
    Étant donné que j'ouvre le portfolio
    Quand je clique sur le POI "mathquiz"
    Et j'appuie sur Échap
    Alors le detail panel est masqué

  Scénario: Un projet en ligne ouvre un lien sûr
    Étant donné que j'ouvre le portfolio
    Quand je clique sur le POI "oneprompt"
    Alors le detail panel pointe vers "one-prompt-minecraft" en rel noopener
