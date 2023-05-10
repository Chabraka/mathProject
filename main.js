let nb_tirages = 100;
let random;
let entier_random;
let parametre = 0.3;
let param_poisson = 6;

/* --- Bernouilli --- */
console.log("/* BERNOUILLI */");

random = Math.random();
console.log(random);

let nb_bern = bernouilli(parametre, random);
let moy_bern = moyBern(parametre, random, nb_tirages);
let esp_bern = esperanceBern(parametre);
let var_bern = varianceBern(parametre);
let ecart_type_bern = ecartTypeBern(parametre);

afficheResultat(nb_bern);
console.log("X : " + nb_bern);
console.log("Moyenne : " + moy_bern);
console.log("Espérance : " + esp_bern);
console.log("Variance : " + var_bern);
console.log("Ecart-type : " + ecart_type_bern);

/* --- Geometrique --- */
console.log("/* GEOMETRIQUE */");

random = Math.random();
console.log(random);

let nb_geo = geometrique(parametre, random);
let moy_geo = moyGeo(parametre, random, nb_tirages);
let esp_geo = esperanceGeo(parametre);
let var_geo = varianceGeo(parametre);
let ecart_type_geo = ecartTypeBern(parametre);

console.log("X : " + nb_geo);
console.log("Moyenne : " + moy_geo);
console.log("Espérance : " + esp_geo);
console.log("Variance : " + var_geo);
console.log("Ecart-type : " + ecart_type_geo);


/* --- Uniforme --- */
console.log("/* UNIFORME */");

entier_random = Math.floor(Math.random()*10);

let nb_unif = uniforme(entier_random);
let moy_unif = moyUniforme(entier_random);
let esp_unif = esperanceUniforme(entier_random);
let var_unif = varianceUniforme(entier_random);
let ecart_type_unif = ecartTypeUniforme(entier_random);

console.log("X : " + entier_random);
console.log("Px : " + entier_random);
console.log("Moyenne : " + moy_unif);
console.log("Espérance : " + esp_unif);
console.log("Variance : " + var_unif);
console.log("Ecart-type : " + ecart_type_unif);

/* --- Binomiale --- */
console.log("/* BINOMIALE */");

random = Math.random();
entier_random = Math.floor(Math.random()*10);

let nb_bin = binomiale(entier_random, parametre, random);
let esp_bin = esperanceBin(entier_random, parametre);
let var_bin = varianceBin(entier_random, parametre);
let ecart_type_bin = ecartTypeBin(entier_random, parametre);

console.log("X : " + entier_random);
console.log("Espérance : " + esp_unif);
console.log("Variance : " + var_unif);
console.log("Ecart-type : " + ecart_type_bin);

/* --- Poisson --- */
console.log("/* POISSON */");

random = Math.random();
console.log(random);

let nb_poisson = poisson(param_poisson, random);
let esp_poisson = esperancePoisson(param_poisson);
let var_poisson = variancePoisson(param_poisson);
let ecart_type_poisson = ecartTypePoisson(param_poisson);

console.log("X : " + nb_poisson);
console.log("Espérance : " + esp_poisson);
console.log("Variance : " + var_poisson);
console.log("Ecart-type : " + ecart_type_poisson);