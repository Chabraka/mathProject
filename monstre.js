class Monstre {
    // Constructor
    constructor(nom, PV, ATT, equipement) {
        this.nom = nom;
        this.PV = PV;
        this.ATT = ATT;
        this.equipement = equipement;
    }

    afficherStatsMonstre() {
        console.log("/* Monstre */");
        console.log("Nom : " + this.nom);
        console.log("PV : " + this.PV);
        console.log("Attaque : " + this.ATT);
        console.log("Equipement : " + this.equipement);

        const element = document.getElementById("text");
        const text = document.createTextNode('/* MONSTRE */');
        element.appendChild(text);
    }
}

function rencontreMonstre(param) {
    let random = Math.random();
    const nombre = geometrique(param, random);

    switch(nombre) {
        case 1 :
            console.log("Gobelin");
            break;
        case 2 :
            console.log("Orque");
            break;
        case 3 :
            console.log("Sorcier");
            break;
        case 4 :
            console.log("Guerrier");
            break;
        default :
            console.log("Dragon");
            break;
    }
}