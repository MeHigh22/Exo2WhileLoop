// let prenoms = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama"];

// x = 0;

// while( x < 9){
//     console.log("Bonjour" +" "+  prenoms[x]);
//     x++;
// };

// let fruits = ["Mangue", "Pasteque","Pomme","Cerise","Orange"];


// while(fruits.length > 0){
//     fruits.pop()
// };

// console.log(fruits);

//Exo3
// let panierLegumes = ["Courgette","Tomate","Mozarella","Fromage"];

// let longeur = panierLegumes.length;

// let caisseLegumes = [];

// while(longeur = panierLegumes.length){
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
// }

// console.log(caisseLegumes);

// console.log(panierLegumes);

// let question = prompt("Qui est le plus beau de tout les rebeux ?");
// while(question != "Arouf Gangsta"){
// 
// }    mdp = prompt("Mdp Faux, try again");




// do {
//     mdp = prompt("Arouf Oesalem On t'a diiiiit")
// } while (question != "Arouf Gangsta");

// alert("Connexion réussie")


// let annee = 2021

// const MIN = 1970;
// const MAX = 2021;

// let random = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
// let chances = 0;
// let number = 0;

// do {
//     let input = prompt(`Si je suis né en ${random} quel âge ai-je aujourd'hui? `);
//     number = parseInt(input)
//     chances++;
//     if(chances == 3){
//         alert("Tu es nul en math")
//         break;
//     }
//     if (input == annee - random){
//         alert(`Bravo après ${chances} essai(s)`)
//     }
// } while(number != annee - random)


let panierFruit = [];
let reponse;
let index = false;
let compteur = 0;

while (index == false) {
    if (compteur < 8) {
        reponse = prompt("Donnez moi un fruit");
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.push(reponse);
        compteur++;
    }

    if (compteur == 8) {
        alert(panierFruit);
        reponse = prompt('Voulez vous retirer un fruit ?');
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.splice(panierFruit.indexOf(reponse), 1);

        if (panierFruit.indexOf(reponse) == -1) {
            index = true;
        }
    }
}

alert('merci bonne appétit');
alert(`ceci est le derniere etat de votre panier: ${panierFruit}`);


