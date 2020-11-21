let spent = 0;
let wins = 0;
let match;
let userArray = [];
let funds = 10;
let drawsNumber = 0;
let matchOnes = 0;
let matchTwos = 0;
let matchThrees = 0;
let matchFours = 0;
let matchFives = 0;
let matchSixes = 0;


// // Vibrate on button click
// const button = document.querySelector('.btn')
// button.addEventListener('click', function () {
    
// })

// Input fields
let inputs = document.querySelector('.inputs')
let f1 = document.querySelector('.f1');
let f2 = document.querySelector('.f2');
let f3 = document.querySelector('.f3');
let f4 = document.querySelector('.f4');
let f5 = document.querySelector('.f5');
let f6 = document.querySelector('.f6');

function timeouts() {
    setTimeout(() => {
        document.querySelector('h1').innerText = 'Wprowadź liczbę między 1-49. Nie powtarzaj poprzednich.'
    }, 10);
    setTimeout(() => {
        document.querySelector('h1').innerText = 'Wprowadź swoje numery'
    }, 5000);
}

function parse(arg) {
    return parseInt(arg);


}

// Field 1
f1.addEventListener('change', function () {
    let userNumber1 = f1.value;
    if (userNumber1 % 1 === 0 && userNumber1 >= 1 && userNumber1 <= 49 && userArray.includes(userNumber1) === false) {
        userArray[0] = userNumber1;
    }
    else {
        userNumber1.value = '';
        userArray[0] = '';
        f1.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)

}
);

// Field 2
f2.addEventListener('change', function () {
    let userNumber2 = f2.value;
    if (userNumber2 % 1 === 0 && userNumber2 >= 1 && userNumber2 <= 49 && userArray.includes(userNumber2) === false) {
        userArray[1] = userNumber2;
    }
    else {
        userNumber2.value = '';
        userArray[1] = ''
        f2.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)

}
);

// Field 3
f3.addEventListener('change', function () {
    let userNumber3 = f3.value;
    if (userNumber3 % 1 === 0 && userNumber3 >= 1 && userNumber3 <= 49 && userArray.includes(userNumber3) === false) {
        userArray[2] = userNumber3;
    }
    else {
        userNumber3.value = '';
        userArray[2] = ''
        f3.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)

}
);

// Field 4
f4.addEventListener('change', function () {
    let userNumber4 = f4.value;
    if (userNumber4 % 1 === 0 && userNumber4 >= 1 && userNumber4 <= 49 && userArray.includes(userNumber4) === false) {
        userArray[3] = userNumber4;
    }
    else {
        userNumber4.value = '';
        userArray[3] = ''
        f4.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)

}
);

// Field 5
f5.addEventListener('change', function () {
    let userNumber5 = f5.value;
    if (userNumber5 % 1 === 0 && userNumber5 >= 1 && userNumber5 <= 49 && userArray.includes(userNumber5) === false) {
        userArray[4] = userNumber5;
    }
    else {
        userNumber5.value = '';
        userArray[4] = '';
        f5.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)

}
);

// Field 6
f6.addEventListener('change', function () {
    let userNumber6 = f6.value;
    if (userNumber6 % 1 === 0 && userNumber6 >= 1 && userNumber6 <= 49 && userArray.includes(userNumber6) === false) {
        userArray[5] = userNumber6;
    }
    else {
        userNumber6.value = '';
        userArray[5] = '';
        f6.value = '';
        timeouts();
    }
    numberArray = userArray.map(parse)
    console.log(numberArray);
}
);

// Button click
document.querySelector('.btn').addEventListener('click', function () {
    window.navigator.vibrate(60);
    match = 0;
    funds -= 2;
    spent += 2;
    drawsNumber++;
    if (
        typeof numberArray[0] === 'number' && isNaN(numberArray[0]) === false && typeof numberArray[1] === 'number' && isNaN(numberArray[1]) === false && typeof numberArray[2] === 'number' && isNaN(numberArray[2]) === false && typeof numberArray[3] === 'number' && isNaN(numberArray[3]) === false && typeof numberArray[4] === 'number' && isNaN(numberArray[4]) === false && typeof numberArray[5] === 'number' && isNaN(numberArray[5]) === false) {

        // // Array created with random winning numbers (between 1-49). Non-repeatable set of numbers.
        let winSet = new Set();
        for (let index = 0; index < 30; index++) {
            winSet.add(Math.floor(Math.random() * 49) + 1)
        };
        let winSetToArray = Array.from(winSet).slice(0, 6);
        winSetToArray.sort(function (num1, num2) {
            if (num1 > num2) {
                return 1;
            } else if (num2 > num1) {
                return -1;
            } else {
                return 0;
            }
        })


        // Check if winning numbers contain user's numbers.
        for (let index = 0; index < 7; index++) {
            if (winSetToArray.includes(numberArray[index])) {
                match++;
            }
        };
        // Prize breakdown.
        if (match == 1) {
            matchOnes++;
        }
        else if (match == 2) {
            funds += 2;
            wins += 2;
            matchTwos++;
        } else if (match == 3) {
            funds += 138;
            wins += 138;
            matchThrees++;
        } else if (match == 4) {
            funds += 724;
            wins += 724;
            matchFours++;
        } else if (match == 5) {
            funds += 19820;
            wins += 19820;
            matchFives++;
        } else if (match == 6) {
            funds += 1388525
            wins += 1388525
            matchSixes++;
            ;

        };
        document.querySelector('.one').innerText = `Zwycięskie numery: ${winSetToArray.join(', ')}`;
        document.querySelector('.two').innerText = `Trafienia: ${match}`;
        document.querySelector('.three').innerText = `Balans: ${funds}`;
        document.querySelector('.four').innerText = `Wydane: ${spent}`;
        document.querySelector('.five').innerText = `Wygrane: ${wins}`;
        document.querySelector('.seven').innerText = `Liczba losowań: ${drawsNumber} `
        document.querySelector('.six').innerText = `Trafienia ogółem: 1*${matchOnes}, 2*${matchTwos}, 3*${matchThrees}, 4*${matchFours}, 5*${matchFives}, 6*${matchSixes}`;
        
    } else {
        document.querySelector('h1').innerText = 'Uzupełnij brakujące pola'
        setTimeout(() => {
            document.querySelector('h1').innerText = 'Wprowadź swoje numery'
        }, 4000);
    }




    // Winning alerts.
    // if (match > 0 && match < 2){
    //     alert(`Congratulations, you have ${match} matching number!`);

    // }   else if (match >= 2 && match < 7){
    //     alert(`Congratulations, you have ${match} matching numbers!`);
    // }  
    //     else {
    //     alert(`You do not have any matching numbers.`);
    // }



    // // Winning alerts.
    // if (match = 1) {
    //     document.querySelector('h1').innerText = `Masz ${match} trafienie!`;
    // } else if (match >= 2 && match <= 4) {
    //     document.querySelector('h1').innerText = `Masz ${match} trafienia!`;
    // } else if (match > 4 && match <= 6) {
    //     document.querySelector('h1').innerText = `Masz ${match} trafień!`;
    // } else {
    //     document.querySelector('h1').innerText = 'Brak trafień 😢';
    // }

    // // Prize breakdown.
    //     if (match == 2) {
    //         funds += 2;
    //     } else if (match == 3){
    //         funds += 138;
    //     }else if (match == 4){
    //         funds += 724;
    //     }else if (match == 5){
    //         funds += 19820;
    //     }else if (match == 6){
    //         funds += 1388525
    //     };

});




// document.getElementById('usr').innerHTML = '<font color="black">Your numbers:</font>' + '<br>' + userArrayNumber.join(', ');

// document.getElementById('matches').innerHTML = 'Matches: ' + match;
// document.getElementById('funds').innerHTML = 'Funds(£): ' + funds;

// console.log('funds' + '\n' + funds);
// console.log('match' + '\n' + match);

// Sort. 
// userArrayNumber.sort(function(num1, num2) {
//     if (num1 > num2) {
//         return 1;
//     } else if (num2 > num1) {
//         return -1;
//     } else {
//     return 0;
//     }
// }
// );