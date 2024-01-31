
let userInput;

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        userInput = document.getElementById('choiceInput').value; 

        userInput = userInput.toUpperCase();
    
        switch (userInput) {
            case "ROCK":
                userInput = 1;
                break;
            case "PAPER":
                userInput = 2;
                break;
            case "SCISSORS":
                userInput = 3;
                break;
            default:
                console.log("Please select paper, rock or scissors");
                return;
            };
        
        let computerChoice = (Math.floor(Math.random() * (3-1) + 1));
        
        let comp = computerChoice;
        let user = userInput;
        
        switch (computerChoice) {
            case 1:
                computerChoice = "Rock";
                break;
            case 2:
                computerChoice = "Paper";
                break;
            case 3:
                computerChoice = "Scissors";
                break;
        }

        switch (userInput) {
            case 1:
                userInput = "Rock";
                break;
            case 2:
                userInput = "Paper";
                break;
            case 3:
                userInput = "Scissors";
                break;
        }

        console.log("The computer chose " + computerChoice);
        
        console.log("You chose " + userInput);

        if (comp == 1 && user == 2) {
                console.log("You win");
        }   else if (comp == 1 && user == 3) {
                console.log("You lose");
        }   else if (comp == 2 && user == 1) {
                console.log("You lose");
        }   else if (comp == 2 && user == 3) {
                console.log("You win");
        }   else if (comp == 3 && user == 1) {
                console.log("You win")
        }   else if (comp == 3 && user == 2) {
                console.log("You lose");        
        }   else {
            console.log("You tie");
        }
        
        }    
    }
);



