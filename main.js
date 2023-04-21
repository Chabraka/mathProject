// Variables
let nb_tirage = 100;
let random = Math.random();
let parameter = 0.6;

// Main
console.log(random);
let geo_number = geometric(parameter, random);
let moyenne = moyGeo(parameter, random, nb_tirage);
let esperance = esperanceGeo(parameter);
let variance = varianceGeo(parameter);

// Affichage
console.log("X value : " + geo_number);
console.log("Moyenne : " + moyenne);
console.log("Espérance : " + esperance);
console.log("Variance : " + variance);