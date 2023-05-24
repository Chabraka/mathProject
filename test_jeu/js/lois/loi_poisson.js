// Functions
function probaPoisson(param, k) {
    return Math.exp(-param) * Math.pow(param, k) / factorielle(k);
};

function poisson(param, rand) {
    let k = 1;
    let proba = 0;
    while(proba < rand) {
        proba += probaPoisson(param, k);
        k++;
    }
    return k;
};

function esperancePoisson(param) {
    return param;
};

function variancePoisson(param) {
    return param;
};

function ecartTypePoisson(param) {
    return Math.sqrt(param);
};