// Functions
function probaUniforme(n) {
    return 1/(n);
};

function uniforme(n, rand) {
    let k = 0;
    let proba = 0;
    while(proba < rand) {
        proba += probaUniforme(n);
        k++;
    }
    return k;
}

function moyUniforme(n) {
    return 1/(n);
};

function esperanceUniforme(n) {
    return (n+1)/2;
};

function varianceUniforme(n) {
    return (n*n-1)/12;
};

function ecartTypeUniforme(n) {
    return Math.sqrt((n*n-1)/12);
}