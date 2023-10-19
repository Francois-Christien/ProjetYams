// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fonction Lancer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // // // // 1.Fin fonction Lancer les dés // // // //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fonction Bloquer les dés // // // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // // // // 2.Fin Fonction Bloquer les dés// // // //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // 3.Fonctions pour chaque combinaison possible // // 
// // // // // // // // // // // // // // // // // // // //
console.log("coucou");

let tableauScore = {
    "total1": false,
    "total2": false,
    "total3": false,
    "total4": false,
    "total5": false,
    "total6": false,
    "bonus": false,
    "brelan": false,
    "carre": false,
    "full": false,
    "petite_suite": false,
    "grande_suite": false,
    "yams": false,
    "chance": false,
}
console.log(arrayScore);

function calcPoints(){
    // Tableau récupérant la valeur de chaque opération
    const tableauScore = [total1, total2, total3, total4, total5, total6];
    let sumPoints = 0;
    // Additionner les élements tu tableau de score
    for (let point = 0; point<tableauScore.length; point++){
        sumPoints += tableauScore[point];
    }
    console.log(sumPoints)
}

let array = [1, 4, 5, 6, 50]
// switch du tableau avec une boucle
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 1:
                if (!arrayScore.total1) {
                    arrayScore.
                    array
    arrayScore.total1 = 1;
                } else {
                    arrayScore.
                    arrayScore
    total1 += 1;
                }
                break;
            
                case 2:
                    if (!arrayScore.total2) {
                        arrayScore.
                        array
        arrayScore.total2 = 2;
                    } else {
                        arrayScore.
                        arrayScore
        total2 += 2;
                    }
                    break;

                    case 3:
                        if (!arrayScore.total3) {
                            arrayScore.
                            array
            arrayScore.total3 = 3;
                        } else {
                            arrayScore.
                            arrayScore
            total3 += 3;
                        }
                        break;

                    case 4:
                if (!arrayScore.total4) {
                    arrayScore.
                    array
    arrayScore.total4 = 4;
                } else {
                    arrayScore.
                    arrayScore
    total4 += 4;
                }
                break;

                    case 5:
                        if (!arrayScore.total5) {
                            arrayScore.
                            array
            arrayScore.total5 = 5;
                        } else {
                            arrayScore.
                            arrayScore
            total5 += 5;
                        }
                        break;

                    case 6:
                        if (!arrayScore.total6) {
                            arrayScore.
                            array
            arrayScore.total6 = 6;
                        } else {
                            arrayScore.
                            arrayScore
            total6 += 6;
                            }
                        break;

                    case (!sumPoints == 63):
            arrayScore.bonus = 35;
                        break;
            }
        }
        console.log(arrayScore);



//5

//     case 'value1 + value2 + value3 + value4 + value5 + value6 >= 63':
//         bonus.forEach(score => {
//             arrayScore.defineProperty(arrayScore, bonus, '35');
//         });
//     break;
// }


// // // // // // // // // // // // // // // // // // // //
// // // 3.Fin Fonctions pour chaque combinaison possible //
// // // // // // // // // // // // // // // // // // // //




// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // //
// // // // 4.Fonction Calcul des points // // // // // //
// // // // // // // // // // // // // // // // // // // //


































// // Supposons que result_blockdice soit un tableau de valeurs de dés
// let result_blockdice = [/* insérez vos valeurs de dés ici */];

// let arrayScore = {
//     "total1": false,
//     "total2": false,
//     "total3": false,
//     "total4": false,
//     "total5": false,
//     "total6": false,
//     "bonus": false,
//     // ... (ajoutez d'autres catégories ici)
// };

// // Calculez les valeurs pour chaque catégorie en fonction des dés
// for (let i = 1; i <= 6; i++) {
//     let categoryKey = `total${i}`;
//     arrayScore[categoryKey] = result_blockdice.filter(dice => dice === i).length * i;
// }

// // Calculez le bonus
// let totalSum = Object.values(arrayScore).filter(value => typeof value === 'number').reduce((acc, value) => acc + value, 0);
// if (totalSum >= 63) {
//     arrayScore["bonus"] = 35;
// }

// // Vous pouvez ajouter d'autres catégories de la même manière

// console.log(arrayScore);
