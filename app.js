'use strict'

setTimeout(function(load){
let user = prompt("Hello! What's your name?")
    alert("Welcome to Ike's About Me Webpage, " + user + "!")
    console.log(user)

let hometown = prompt("5 quick questions! Is Ike originally from Washington?");
    console.log("Originally From Washington Guess: " + hometown);

if(hometown.toLowerCase() == "no"){
    // console.log("Congratulations, that's correct!");
    alert("Congratulations, that's correct!")
} else if(hometown.toLowerCase() == "yes")
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
}

let fullname = prompt("Is Ike's full name Michael?")
    console.log("Full Name Michael or Not Guess: " + fullname);

if(fullname.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
} else if(fullname.toLowerCase() == "no")
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
}

let graduate = prompt("Did Ike graduate from high school in 2011?")
    console.log("Do they think Ike graduated in 2011: " + graduate);

if(graduate.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
} else if(graduate.toLowerCase() == "no")
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
}

let currentjob = prompt("Does Ike currently work for Amazon?")
    console.log("Their guess on if Ike works at Amazon: " + currentjob);

if(currentjob.toLowerCase() == "no"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
} else if(currentjob.toLowerCase() == "yes")
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
}

let hobbies = prompt("Does Ike like to ride bicycles?")
    console.log("Do they think Ike likes to ride bikes: " + hobbies);

if(hobbies.toLowerCase() == "yes"){
    // console.log("Congratulations, that's correct!")
    alert("Congratulations, that's correct!")
} else if(hobbies.toLowerCase() == "no")
    // console.log("Nice try, but not quite!");
    alert("Nice try, but not quite!")
else{
    // console.log("That's a yes or no question, silly goose!");
    alert("That's a yes or no question, silly goose!");
}

alert("Thanks for answering my questions, " + user + ", I hope you enjoy your visit!")
}, 200)