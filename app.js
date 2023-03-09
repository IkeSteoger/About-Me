'use strict'

setTimeout(function(load){
let user = prompt("Hello! What's your name?")
    alert("Welcome to Ike's About Me Webpage, " + user + "!")
    console.log("Their name is " + user)

let hometown = prompt("5 quick questions! Is Ike originally from Washington?");
    console.log("Originally From Washington Guess: " + hometown);

let correctanswers = 0
let incorrectanswers = 0

if(hometown.toLowerCase() == "no"){
    // console.log("Congratulations, that's correct!");
    alert("Congratulations, that's correct!");
    correctanswers++;
} else if(hometown.toLowerCase() == "yes"){
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!");
    incorrectanswers++;
}
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
    incorrectanswers++;
}

let fullname = prompt("Is Ike's full name Michael?")
    console.log("Full Name Michael or Not Guess: " + fullname);

if(fullname.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
    correctanswers++;
} else if(fullname.toLowerCase() == "no"){
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
    incorrectanswers++;
}
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
    incorrectanswers++;
}

let graduate = prompt("Did Ike graduate from high school in 2011?")
    console.log("Do they think Ike graduated in 2011: " + graduate);

if(graduate.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
    correctanswers++;
} else if(graduate.toLowerCase() == "no"){
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!");
    incorrectanswers++;
}
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
    incorrectanswers++;
}

let currentjob = prompt("Does Ike currently work for Amazon?")
    console.log("Their guess on if Ike works at Amazon: " + currentjob);

if(currentjob.toLowerCase() == "no"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
    correctanswers++;
} else if(currentjob.toLowerCase() == "yes"){
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!");
    incorrectanswers++;
}
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
    incorrectanswers++;
}

let hobbies = prompt("Does Ike like to ride bicycles?")
    console.log("Do they think Ike likes to ride bikes: " + hobbies);

if(hobbies.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!");
    correctanswers++;
} else if(hobbies.toLowerCase() == "no"){
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!");
    incorrectanswers++;
}
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
    incorrectanswers++;
}


for(let i = 0; i < 4; i ++){
    let dockside = prompt("What year did Ike start working at Dockside?");
        console.log("Their guess for year started at Dockside is " + dockside);
    if(dockside == 2018){
        alert("That's the correct answer! Nice work.");
        correctanswers++;
        break;
    }
    else if(dockside < 2018){
        alert("Good guess, but that's too low / long ago! Try again.");
    }
    else if(dockside > 2018){
        alert("Good guess, but that's too high / recently / in the future! Try again.");
    }
    if(i == 3){
        alert("4 attempts is the limit, sorry! Answer was 2018.");
        incorrectanswers++;
    }
}

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

alert("Thanks for answering my questions, " + user + "! You got " + correctanswers + " questions correct and " + incorrectanswers + " questions incorrect! Nice work. I hope you enjoy your visit!")
console.log("They got " + correctanswers + " answers correct & they got " + incorrectanswers + " answers incorrect.")
}, 200)