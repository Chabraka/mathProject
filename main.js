let nb_tirages = 100;
let random;
let parametre = 0.6;

/* --- Bernouilli --- */
console.log("/* BERNOUILLI */");

random = Math.random();
console.log(random);

let nb_bern = bernouilli(parametre, random);
let moy_bern = moyBern(parametre, random, nb_tirages);
let esp_bern = esperanceBern(parametre);
let var_bern = varianceBern(parametre);

afficheResultat(nb_bern);
console.log("X : " + nb_bern);
console.log("Moyenne : " + moy_bern);
console.log("Espérance : " + esp_bern);
console.log("Variance : " + var_bern);

/* --- Geometrique --- */
console.log("/* GEOMETRIQUE */");

random = Math.random();
console.log(random);

let nb_geo = geometrique(parametre, random);
let moy_geo = moyGeo(parametre, random, nb_tirages);
let esp_geo = esperanceGeo(parametre);
let var_geo = varianceGeo(parametre);

console.log("X : " + nb_geo);
console.log("Moyenne : " + moy_geo);
console.log("Espérance : " + esp_geo);
console.log("Variance : " + var_geo);

/* --- Uniforme --- */
console.log("/* UNIFORME */");

entier_random = Math.floor(Math.random()*10);

let nb_unif = uniforme(entier_random);
let moy_unif = moyUniforme(entier_random);
let esp_unif = esperanceUniforme(entier_random);
let var_unif = varianceUniforme(entier_random);

console.log("X : " + entier_random);
console.log("Px : " + entier_random);
console.log("Moyenne : " + moy_unif);
console.log("Espérance : " + esp_unif);
console.log("Variance : " + var_unif);