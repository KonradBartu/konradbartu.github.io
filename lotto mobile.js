// Vibrate on button click
const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    window.navigator.vibrate(10);
})

let match;
let userArray = [];
let funds = 10;

// Button change
document.querySelector('.btn').addEventListener('click', function() {
    match = 0;
    funds -= 2;
}
)
// document.querySelector('.btn').textContent = 'Losuj jeszcze raz'

let inputs = document.querySelector('.inputs')


// How to delete number from input and from array at the same time? 
inputs.addEventListener('change', function (event) {
    let userNumber = event.target.value;
    if (userNumber %1 === 0 && userNumber >=1 && userNumber <= 49 && userArray.includes(userNumber) === false && event.target.tagName === 'INPUT') {
        userArray.push(userNumber); 
        } 
        else {
            userNumber.value = ' ';

            // input.innerText = ' ';
            alert('Wprowadź liczbę między 1-49. Nie powtarzaj poprzednich.')
        }
        console.log(userArray);
    }
);


// for (let index = 1; index < 7; index++) {


// // Convert user array's strings to numbers. Add function to .map 
// let userArrayNumber = userArray.map(Number); //Does it even work? 
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

// // Array created with random winning numbers (between 1-49). Non-repeatable set of numbers.
// let winSet = new Set(); 
// for (let index = 0; index < 30; index++) {
//         winSet.add(Math.floor(Math.random() * 49) + 1) 
//     };
// winSetToArray = Array.from(winSet).slice(0,6);
// winSetToArray.sort(function(num1, num2) {
//     if (num1 > num2) {
//         return 1;
//     } else if (num2 > num1) {
//         return -1;
//     } else {
//     return 0;
//     }
// }
// );

// // Check if winning numbers contain user's numbers.
// for (let index = 0; index < 7; index++) {   
//     if (winSetToArray.includes(userArrayNumber[index])) {      
//     match ++;
//     }
// };

// // Winning alerts.
//     if (match = 1){
//     alert(`Brawo, masz ${match} trafienie!`);
  
// }   else if (match >= 2 && match <= 4){
//     alert(`Brawo, masz ${match} trafienia!`);
// }   else if (match >4 && match <= 6){
//     alert(`Brawo, masz ${match} trafień`)
// }
//     else {
//     alert(`Brak trafień 😢`);
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
    

// document.getElementById('usr').innerHTML = '<font color="black">Your numbers:</font>' + '<br>' + userArrayNumber.join(', ');
// document.getElementById('win').innerHTML = '<font color="black">Winning numbers:</font>' + '<br>' + winSetToArray.join(', ');
// document.getElementById('matches').innerHTML = 'Matches: ' + match;
// document.getElementById('funds').innerHTML = 'Funds(£): ' + funds;

// console.log('winSetToArray' + '\n' + winSetToArray);
// console.log('userArray' + '\n' +userArray);
// console.log('userArrayNumber' + '\n' + userArrayNumber);
// console.log('funds' + '\n' + funds);
// console.log('match' + '\n' + match);



