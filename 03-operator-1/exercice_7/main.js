// Exercice 7
// Écrivez votre code ici

let ageEnfant = 14;
let agePère = ageEnfant * 2;
let ageMère = agePère-5;
let ageGrandPère = ageMère*2 + ageEnfant/2;
let ageOncle = ageGrandPère + 10; 

module.exports = { ageEnfant, agePère, ageMère, ageGrandPère, ageOncle };
