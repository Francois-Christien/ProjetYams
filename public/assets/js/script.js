// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fonction Lancer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //
function rollDices(numberOfTheTotalDices) {
    let dicesValues = [];

    for (let i = 0; i < numberOfTheTotalDices; i++) {
        dicesValues[i] = Math.floor(Math.random() * 6 + 1);
    }
    return dicesValues;
}
console.log(rollDices(5));

// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fin fonction Lancer les dés // // // //
// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fonction Bloquer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //

function restartDices() {
    // let resultsFirstRoll= rollDices(5);

    let keepDices = [];

    // choix utilisateur 
    keepDices.push(4,5);

    console.log(keepDices);
    
    let resultsSecondRoll = rollDices(3);
    
    console.log(resultsSecondRoll)

    resultsSecondRoll.forEach((dice)=> {
      // choix utilisateur 
        console.log(keepDices.push(dice));
    })
    console.log(keepDices);

}

restartDices();

// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fin Fonction Bloquer les dés// // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // 3.Fonctions pour chaque combinaison possible // //
// // // // // // // // // // // // // // // // // // // //

// total1
// total2
// total3
// total4
// total5
// total6
// bonus
// brelan
// carré
// full

// let dicesValues = [2 ,2 ,2 ,3 ,3]
// // déterminer le nombres d'occurence d'une valeur

// const nbrOfoccurrences = (value) => {
//     let nbr = 0
//     dicesValues.forEach((dicesValue, i) => {
//         if (value == dicesValue){
//             nbr++
//         }

//     })
//     return nbr
// };

// console.log(nbrOfoccurrences(1));
// console.log(nbrOfoccurrences(2));
// console.log(nbrOfoccurrences(3));
// console.log(nbrOfoccurrences(4));
// console.log(nbrOfoccurrences(5));
// console.log(nbrOfoccurrences(6));


// petiteSuite
// grandeSuite
// yams
// chance

// // // // // // // // // // // // // // // // // // // //
// // // 3.Fin Fonctions pour chaque combinaison possible //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //