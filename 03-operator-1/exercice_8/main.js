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