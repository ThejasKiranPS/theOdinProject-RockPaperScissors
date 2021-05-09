
function play() {
    let uchoice = userChoice();
    let cChoice = computerChoice();
    return evaluate(uchoice,cChoice);
}

function computerChoice(){ //returns 0 || 1 || 2
    return Math.floor(Math.random() * 3);
}

function userChoice() {
    let choice = prompt("enter your choice (rock/paper/scissors):");
    if (choice.toLowerCase() === 'rock') return 0;
    else if(choice.toLowerCase() === 'paper') return 1;
    else return 2;
}

function evaluate(user, computer) {
    /*
        0 - rock
        1 - paper
        2 - scissors
    */
   if(user === computer){
       return 0;
   } else if (user === 0) {
       return (computer===1)? 0:1; 
   } else if (user === 1){
       return (computer === 0)? 1:0;
   } else if (user === 2) {
       return (computer === 0)? 0:1;
   }
}

let score = 0;
for(let i=0; i<5; i++){
    score+=play();
    console.log(score);
}