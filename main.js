let r = Math.random();
//console.log("r = " + r);

let p = 0.68;

let prob= p;
let k=1;

let nb_tirage=1000;
let probEsp = 0;

for(let i=0; i<nb_tirage; i++){
    
    while (prob < r) {
        prob += Math.pow(1-p,k-1)*p;
        //console.log("etape " + prob);
        k++;
    }
    
    probEsp +=prob;
    //console.log("fin " + prob);
    //console.log("nbr etapes " + (k-1));
}

probEsp = probEsp/nb_tirage;


console.log("Esperance : " + probEsp);
console.log("Esperance à trouver " + (1/p));