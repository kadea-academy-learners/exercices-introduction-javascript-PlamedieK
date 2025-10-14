// Exercice 8
// Écrivez votre code ici

let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50+25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

if(reste >= 100){
    console.log("Budget bien géré");
}
else{
    console.log("Attention, budget serré");
}

let loisirs = salaireMensuel * 0.15;

totalDepenses = totalDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

let pourcentageLoyer = loyer/salaireMensuel*100;
let pourcentageNourriture = nourriture/salaireMensuel*100;
let pourcentageTransport = transport/salaireMensuel*100;
let pourcentageAutresDepenses=autresDepenses/salaireMensuel*100;
let pourcentageLoisirs=loisirs/salaireMensuel*100;

console.log(`Le loyer représente ${pourcentageLoyer}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`La nourriture représente ${pourcentageNourriture}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Le transport représente ${pourcentageTransport}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Les autres dépenses représentent ${pourcentageAutresDepenses}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Le loisirs représente ${pourcentageLoisirs}% du salaire mensuel de ${salaireMensuel}.`);

salaireMensuel += salaireMensuel * 0.1 ;

loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
autresDepenses = 50+25;
loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses;
reste = salaireMensuel - totalDepenses;

console.log(`Le loyer représente ${pourcentageLoyer}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`La nourriture représente ${pourcentageNourriture}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Le transport représente ${pourcentageTransport}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Les autres dépenses représentent ${pourcentageAutresDepenses}% du salaire mensuel de ${salaireMensuel}.`);
console.log(`Le loisirs représente ${pourcentageLoisirs}% du salaire mensuel de ${salaireMensuel}.`);

if(totalDepenses > salaireMensuel*0.9){
    console.log("Dépenses trop élevées, réduisez vos charges");
}
else{
    console.log("Budget sous contrôle");
}
module.exports = { salaireMensuel, loyer, nourriture, transport, autresDepenses, totalDepenses, reste };