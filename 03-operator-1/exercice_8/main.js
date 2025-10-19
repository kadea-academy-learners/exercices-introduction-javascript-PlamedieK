// Exercice 8
// Écrivez votre code ici
   



let salaireMensuel = 500;  // 1. Attribuer la valeur 500 à la variable `salaireMensuel`.

let loyer = null;

loyer = salaireMensuel*30/100;     // 2. Calculer la valeur de `loyer` en prenant 30% de `salaireMensuel`.

console.log(loyer);

let nourriture = null;

nourriture = salaireMensuel*20/100; //  3. Calculer la valeur de `nourriture` en prenant 20% de `salaireMensuel`.

console.log(nourriture);

let transport = salaireMensuel*10/100;// 4. Calculer la valeur de `transport` en prenant 10% de `salaireMensuel`.

console.log(transport);

let autresDepenses = 50;

autresDepenses += 25;

let totalDepenses = loyer+nourriture+transport+autresDepenses;

let reste = salaireMensuel-totalDepenses

console.log(reste);

if(reste >= 100)
{
    console.log("Budget bien géré");
}
else
{
    console.log("Attention, budget serré");
}

let loisirs = salaireMensuel*15/100;
totalDepenses = loyer+nourriture+transport+autresDepenses+loisirs;

reste = salaireMensuel-totalDepenses

 
let pourcentageLoyer = loyer/salaireMensuel*100;
let pourcentageNourriture = nourriture/salaireMensuel*100;
let pourcentageTransport = transport/salaireMensuel*100;
let pourcentageAutresDepenses=autresDepenses/salaireMensuel*100;
let pourcentageLoisirs=loisirs/salaireMensuel*100;

console.log(`Le loyer représente ${pourcentageLoyer}% du salaire mensuel.`);
console.log(`La nourriture représente ${pourcentageNourriture}% du salaire mensuel.`);
console.log(`Le transport représente ${pourcentageTransport}% du salaire mensuel.`);
console.log(`Les autres dépenses représentent ${pourcentageAutresDepenses}% du salaire mensuel.`);
console.log(`Le loisirs représente ${pourcentageLoisirs}% du salaire mensuel.`);

if(totalDepenses<(90/salaireMensuel*100)){
    console.log("Dépenses trop élevées, réduisez vos charges");
}
else{
    console.log("Dépenses normales, Congratulations !");
}