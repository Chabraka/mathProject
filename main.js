let nb_tirage = 100;
let random;
let parameter = 0.6;

/* --- Bernouilli --- */
random = Math.random();
console.log(random);

let bern_number = bernouilli(parameter, random);
let moy_bern = moyBern(parameter, random, nb_tirage);

showResult(bern_number);
console.log("X value : " + bern_number);
console.log("Moyenne : " + moy_bern);

/* --- Geometric --- */
random = Math.random();
console.log(random);

let geo_number = geometric(parameter, random);
let moy_geo = moyGeo(parameter, random, nb_tirage);
let esp_geo = esperanceGeo(parameter);
let variance_geo = varianceGeo(parameter);

console.log("X value : " + geo_number);
console.log("Moyenne : " + moy_geo);
console.log("Espérance : " + esp_geo);
console.log("Variance : " + variance_geo);