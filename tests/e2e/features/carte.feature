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
