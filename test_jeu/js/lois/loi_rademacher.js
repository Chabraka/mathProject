// Functions
function rademacher(param, rand) {
    if(rand <= param) {
        return 1;
    }
    return -1;
};

function moyRade(param, rand, nb_iter) {
    let moy = 0;
    for(let i = 0 ; i < nb_iter ; i++) {
        moy += rademacher(param, rand);
        rand = Math.random();
    }
     return moy/nb_iter;
};

function esperanceRade(param) {
    return 2*param - 1;
};

function varianceRade(param) {
    return 4*param*(1-param);
};

function ecartTypeRade(param) {
    return Math.sqrt( 4*param*(1-param) );
}