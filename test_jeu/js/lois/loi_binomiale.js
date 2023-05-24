// Functions
function factorielle(n) {
    // Condition d'arrêt
  if (n === 0 || n === 1) { return 1;}
    // Récursivité
  return n * factorielle(n-1);
}

function probaBin(n, k, param) {
    return (factorielle(n)/(factorielle(n-k)*factorielle(k)) * Math.pow(param, k) * Math.pow(1-param, n-k));
};

function binomiale(n, param, rand) {
    let nb_succes = 0;
    for(let i = 0 ; i < n ; i++) {
        nb_succes += bernouilli(param, rand);
        rand = Math.random();
    }
    return nb_succes;
};

function esperanceBin(n, param) {
    return n*param;
};

function varianceBin(n, param) {
    return n*param*(1-param);
};

function ecartTypeBin(n, param) {
    return Math.sqrt(n*param*(1-param));
}