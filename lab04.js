'use strict'

let correctanswers = 0;
let incorrectanswers = 0;

// declare global scope variable user
let user = '';

// Gets name from prompt
function getUser(){

    while (user === '' || user === null){
        user = prompt("Hello! What's your name?");
    }

    alert("Welcome to Ike's About Me Webpage, " + user + "!")
    console.log("Their name is " + user);

    return user;
}

// Calls the get user function
// console.log(user);

// store questions in an array
let questionsList = [
    '5 quick questions! Is Ike originally from Washington?',
    'Is Ike\'s full name Michael?',
    'Did Ike graduate from high school in 2011?',
    'Does Ike currently work for Amazon?',
    'Does Ike like to ride bicycles?'
];

// store cooresponding answer in array 
let answers = [
    'no', 
    'yes',
    'yes',
    'no',
    'yes'
];

// // console.log(questionsList);
// // console.log(answers);

// creates function to check if the user guess matches the answer
function quizUser(question, answer){

    let response = prompt(question);
    response = response.toLowerCase();

    if (parseInt(response)){
        response = parseInt(response);
    }

    if (response === answer){
        return true;
    } else {
        return false;
    }
}

function checkAnswers(){
for (let i = 0; i < questionsList.length; i++){
    let isCorrect = quizUser(questionsList[i], answers[i]);

    if (isCorrect){
        alert("Congratulations, that's correct!");
        correctanswers++;
        console.log(correctanswers);
    } else {
        alert("Nice try, but not quite!");
        incorrectanswers++;
        console.log(incorrectanswers);
    }
}
}

function guessingGame(){
    for(let i = 0; i < 4; i ++){
        let dockside = prompt("What year did Ike start working at Dockside?");
            console.log("Their guess for year started at Dockside is " + dockside);
        if(dockside == 2018){
            alert("That's the correct answer! Nice work.");
            correctanswers++;
            break;
        }
        else if(dockside < 2018 && i < 4){
            alert("Good guess, but that's too low / long ago! Try again.");
        }
        else if(dockside > 2018 && i < 4){
            alert("Good guess, but that's too high / recently / in the future! Try again.");
        }
        if(i == 3){
            alert("4 attempts is the limit, sorry! Answer was 2018.");
            incorrectanswers++;
        }

        
    }

}

function multipleChoiceGame(){
    let gameanswer = ["hunt", "hunt: showdown", "hunt showdown", "dark souls", "outer wilds", "hades", "legend of zelda", "legend of zelda: majora's mask", "red dead redemption 2", "celeste", "hollow Knight", "rock band", "final fantasy xi"]

    for(let i = 0; i < 6; i ++){
        let favgame = prompt("What is one of Ike's favorite games?");
            console.log("Their guess for Ike's favorite game is " + favgame);
        if(favgame.toLowerCase() == gameanswer[i]){
            alert("Great guess! You were right. Possible answers were: Hunt Showdown, Dark Souls, Outer Wilds, Hades, Legend of Zelda, Red Dead Redemption 2, Celeste, Hollow Knight, Rock Band, or Final Fantasy XI.");
            correctanswers++;
            break;
        }
        else if(favgame.toLowerCase() != gameanswer[i]){
            alert("That was an incorrect guess! Try again.");
        }
        if(i == 5){
            alert("6 attempts is the limit, sorry! Possible answers were: Hunt Showdown, Dark Souls, Outer Wilds, Hades, Legend of Zelda, Red Dead Redemption 2, Celeste, Hollow Knight, Rock Band, or Final Fantasy XI.")
            incorrectanswers++;
        }

    }
}

// getUser();
// checkAnswers();
// guessingGame();
// multipleChoiceGame();

// alert("Thanks for answering my questions, " + user + "! You got " + correctanswers + " questions correct and " + incorrectanswers + " questions incorrect! Nice work. I hope you enjoy your visit!")
// console.log("They got " + correctanswers + " answers correct & they got " + incorrectanswers + " answers incorrect.")



