// Functions
function bernouilli(param, rand) {
    if(rand <= param) {
        return 1;
    }
    return 0;
};

function moyBern(param, rand, nb_iter) {
    let moy = 0;
    for(let i = 0 ; i < nb_iter ; i++) {
        moy += bernouilli(param, rand);
        rand = Math.random();
    }
     return moy/nb_iter;
};

function afficheResultat(entier) {
    if(entier == 1) {
        console.log("Pile !");
    }
    else {
        console.log("Face !");
    }
};

function esperanceBern(param) {
    return param;
};

function varianceBern(param) {
    return param*(1-param);
};

function ecartTypeBern(param) {
    return Math.sqrt(param*(1-param));
}