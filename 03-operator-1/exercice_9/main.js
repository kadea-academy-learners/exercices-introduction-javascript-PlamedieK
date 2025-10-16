// Exercice 9
// Écrivez votre code ici

const valMaison = 60000000;
const valTerrain = 40000000;
const valLiquide = 20000000;

let categorie_1 = null; // déclaration et affectation de la variable avec null
let categorie_2 = null; // déclaration et affectation de la variable avec null

const patrimoine = valMaison+valTerrain+valLiquide; // calcul du patrimoine total

categorie_1 = patrimoine * 75/100; // calcule du patrimoine pour la catégorie 1
categorie_2 = patrimoine * 25/100; // calcule du patrimoine pour la catégorie 2

const partEnfant = categorie_1*1/3; // calcule pour les part des enfants
const partPaul = partEnfant;        //déclaration et initialition de la constante avec un tier du patrimone catégorie 1 au profit de Paul
partMarie = partEnfant;             //déclaration et initialition de la constante avec un tier du patrimone catégorie 1 au profit de Marie

const part_Enfant_Alain = partEnfant*1/2; //déclaration et initialition de la constante avec un tier au profit des  enfants de Alain
const partEric = part_Enfant_Alain;        //déclaration et initialition de la constante avec la moitié attribuée a Paul enfant du défunt
const partClaire = part_Enfant_Alain         //déclaration et initialition de la constante avec la moitié attribuée a Claire enfant du défunt

const partPersonne=categorie_2*1/3; // calcule pour les part pour la catégorie 2
const part_Mme_MUKUNA = partPersonne;     //déclaration et initialition de la constante avec un tier du patrimone catégorie 2 au profit de Mme MUKUNA
const part_Joseph=partPersonne;           //déclaration et initialition de la constante avec un tier du patrimone catégorie 2 au profit de Joseph
const part_Sarah=partPersonne;             //déclaration et initialition de la constante avec un tier du patrimone catégorie 2 au profit de Sarah

// console.log(part_Mme_MUKUNA+" "+part_Joseph+" "+part_Sarah);

console.log("- Paul "+"a comme part dans le patrimoine          : "+partPaul);      //  part de Paul** 
console.log("- Marie "+"a comme part dans le patrimoine         : "+partMarie);  //  part de Marie** 
console.log("- Eric "+"a comme part dans le patrimoine          : "+partEric);      //  part de Eric** 
console.log("- Claire "+"a comme part dans le patrimoine        : "+partClaire);     //  part de Claire** 
console.log("- Madame MUKUNA "+"a comme part dans le patrimoine : "+part_Mme_MUKUNA);  //  part de Mme MUKUNA** 
console.log("- Joseph "+"a comme part dans le patrimoine        : "+part_Joseph);        //  part de Joseph** 
console.log("- Sarah "+"a comme part dans le patrimoine         : "+part_Sarah);         //  part de Sarah** 

module.exports = { valMaison, valTerrain, valLiquide, categorie_1, categorie_2, patrimoine, partEnfant, partPaul, partMarie, part_Enfant_Alain, partEric, partClaire, partPersonne, part_Mme_MUKUNA, part_Joseph, part_Sarah };