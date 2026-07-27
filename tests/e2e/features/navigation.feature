# language: fr
Fonctionnalité: Navigation sur le portfolio

  Scénario: Toutes les sections sont visibles au chargement
    Étant donné que j'ouvre le portfolio
    Alors je vois la section hero avec le nom "Etienne Bernoux"
    Et je vois la section achievements
    Et je vois la section carte
    Et je vois la section skill tree
    Et je vois la section about
    Et je vois le footer

  Scénario: Le hero affiche la progression de craft
    Étant donné que j'ouvre le portfolio
    Alors la barre XP affiche un niveau et une progression

  Scénario: Les liens externes sont protégés du tabnabbing
    Étant donné que j'ouvre le portfolio
    Alors chaque lien externe porte rel noopener

  Scénario: La mise en page tient dans le viewport en desktop
    Étant donné que j'ouvre le portfolio
    Alors rien ne déborde horizontalement
    Et l'arbre de compétences tient dans son viewBox

  Scénario: La mise en page tient dans le viewport en mobile
    Étant donné que j'ouvre le portfolio
    Quand je passe en viewport mobile
    Alors rien ne déborde horizontalement
