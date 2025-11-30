// printing even NUMBERS till 100;
for(let num=0; num<= 100; num++){
    if(num % 2 !== 0){
        console.log("even number=", num)
    } 
}

// Create a game and ask the user to keep guessing until the no. is correct;
let gameNum =25;
let userNum = prompt("guess the game num: ");
 

while (userNum != gameNum){
    userNum = prompt("You Entered The Wrong Number. Guess Again :");
}

console.log("You Won the Game .")