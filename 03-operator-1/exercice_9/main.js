// Exercice 9
// Écrivez votre code ici

// Répartition de l'héritage de Monsieur Jean MUKUNA

const totalHeritage = 60000000 + 40000000 + 20000000;

const partPremiereCategorie = totalHeritage * 0.75;
const partEnfant = partPremiereCategorie / 3;

// Répartition entre les enfants
const paul = partEnfant;
const marie = partEnfant;  
const eric = partEnfant / 2; 
const clair = partEnfant / 2;

//  Deuxième catégorie : le conjoint et les frères/nièce
const partDeuxiemeCategorie = totalHeritage * 0.25; 
const partConjointEtFreres = partDeuxiemeCategorie / 3;

// Répartition entre le conjoint et les frères/nièce
const madameMukuna = partConjointEtFreres;
const joseph = partConjointEtFreres;  
const sarah = partConjointEtFreres; 

//  Affichage clair dans la console
console.log(`Paul : ${paul} CDF`);
console.log(`Marie : ${marie} CDF`);
console.log(`Éric : ${eric} CDF`);
console.log(`Claire : ${clair} CDF`);
console.log(`Madame MUKUNA : ${madameMukuna} CDF`);
console.log(`Joseph : ${joseph} CDF`);
console.log(`Sarah : ${sarah} CDF`);

// 5️⃣ Export des variables pour les tests Jest
module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };