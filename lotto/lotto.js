let match;
let userArray = [];
let funds = 10;

// User's numbers input.
document.getElementById('btn').addEventListener('click', function() {
    match = 0;
    funds -= 2;
document.getElementById('btn').textContent = 'PLAY AGAIN (£2)'
userArray.splice(0,6);
for (let index = 1; index < 7; index++) {
let userNumber = prompt('Please enter value number ' + index);
    if (userNumber %1 === 0 && userNumber >=1 && userNumber <= 49 && userArray.includes(userNumber) === false) {
    userArray.push(userNumber); 
    } else {
        index--;
        alert('Please enter an integer between 1-49. Do not repeat previous numbers.')
    }
    };

// Convert user array's strings to numbers.
let userArrayNumber = userArray.map(Number);
userArrayNumber.sort();

// Array created with random winning numbers (between 1-49). Non-repeatable set of numbers.
let winSet = new Set(); 
for (let index = 0; index < 30; index++) {
        winSet.add(Math.floor(Math.random() * 49) + 1) 
    };
winSetToArray = Array.from(winSet).slice(0,6);
winSetToArray.sort();

// Check if winning numbers contain user's numbers.
for (let index = 0; index < 7; index++) {   
    if (winSetToArray.includes(userArrayNumber[index])) {      
    match ++;
    }
};

// Winning alerts.
    if (match > 0 && match < 2){
    alert(`Congratulations, you have ${match} matching number!`);
  
}   else if (match >= 2 && match < 7){
    alert(`Congratulations, you have ${match} matching numbers!`);
}  
    else {
    alert(`You do not have any matching numbers.`);
}

// Prize breakdown.
    if (match == 2) {
        funds += 2;
    } else if (match == 3){
        funds += 138;
    }else if (match == 4){
        funds += 724;
    }else if (match == 5){
        funds += 19820;
    }else if (match == 6){
        funds += 1388525
    };
    

document.getElementById('usr').innerHTML = '<font color="black">Your numbers:</font>' + '<br>' + userArrayNumber.join(', ');
document.getElementById('win').innerHTML = '<font color="black">Winning numbers:</font>' + '<br>' + winSetToArray.join(', ');
document.getElementById('matches').innerHTML = 'Matches: ' + match;
document.getElementById('funds').innerHTML = 'Funds(£): ' + funds;

console.log('winSetToArray' + '\n' + winSetToArray);
console.log('userArray' + '\n' +userArray);
console.log('userArrayNumber' + '\n' + userArrayNumber);
console.log('funds' + '\n' + funds);
console.log('match' + '\n' + match);

});


