// Exercise 10
//
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”

// var card1 = parseInt(prompt("Give a number card."));
// var card2 = parseInt(prompt("Give another number card."));
// var card3 = parseInt(prompt("Give another number card."));
// var blackJack = card1 + card2 + card3;
//
// if (blackJack === 21){
//     alert("BLACKJACK!!!!!!!")
// }
// else if (blackJack < 21){
//     alert("The total is " + blackJack)
// }
// else if (blackJack > 21){
//     alert("BUST")
// }
// else{
//     alert("ERROR")
// }



// Exercise 11
//
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// Extra Credit:
//
//     If it's negative or over 100 print an error.


// var grade = parseInt(prompt("What is your number grade?"));
//
// if (grade < 0){
//     alert("ERROR")
// }
// else if (grade <= 59){
//     alert("F")
// }
// else if (grade <= 69){
//     alert("D")
// }
// else if (grade <= 79){
//     alert("C")
// }
// else if (grade <= 89){
//     alert("B")
// }
// else if (grade <= 100){
//     alert("A")
// }
// else {
//     alert("ERROR")
// }

// Exercise 12
//
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”

var userAge = parseInt(prompt("What is your age?"));

if (userAge >= 0 && userAge <= 125){
    alert("REAL AGE")
}
else{
    alert("NOT A REAL AGE")
}