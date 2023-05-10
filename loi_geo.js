// Functions
function probaGeo(param, k) {
    return param*Math.pow(1-param, k-1);
};

function geometrique(param, rand) {
    let puissance = 1;
    let proba = 0;
    while(proba < rand) {
        proba += probaGeo(param, puissance);
        puissance++;
    }
    return puissance;
};

function moyGeo(param, rand, nb_iter) {
    let moy = 0;
    for(let i = 0 ; i < nb_iter ; i++) {
        moy += geometrique(param, rand);
        random = Math.random();
    }
     return moy/nb_iter;
};

function esperanceGeo(param) {
    return 1/param;
};

function varianceGeo(param) {
    return (1-param)/(param*param);
};

function ecartTypeGeo(param) {
    return Math.sqrt((1-param)/(param*param));
};