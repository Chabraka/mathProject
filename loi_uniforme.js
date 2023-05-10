// Functions
function uniforme(n) {
    return 1/(n+1);
};

function moyUniforme(n) {
    return 1/(n+1);
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