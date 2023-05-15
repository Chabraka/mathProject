// HERO

class Joueur {
    // Constructor
    constructor(nom, PV, ATT, equipement) {
        this.nom = nom;
        this.PV = PV;
        this.ATT = ATT;
        this.equipement = equipement;
    }

    afficherStatsJoueur() {
        console.log("/* JOUEUR */");
        console.log("Nom : " + this.nom);
        console.log("PV : " + this.PV);
        console.log("Attaque : " + this.ATT);
        console.log("Equipement : " + this.equipement);

        const element = document.getElementById("text");
        const text = document.createTextNode('/* JOUEUR */');
        element.appendChild(text);
    }
}
