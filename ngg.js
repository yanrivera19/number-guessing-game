/*
Number-guseeing-Game

Step 1: Define a variable called randomNum with a random number producer, using
the Math.random method to generate the random number from 1-100, and apply
to it the Math.floor method to make the random numbers integers and not decimals.
Step 2: Define a variable called numberOfSub with an initial value of 1. We will use
this variable to track the amount of submits that have been made in the browser.
Step 3: Define a variable called maxNumSubmits with the marandomNumimum number of submits 
allowed, which is 3.
Step 4: Define a variable called inputValue with the selection of the input element's
value. To this selection apply the parseInt method to convert the value (string) to a number
so that it can be compared with the random number that gets generated.
Step 5: Define a variable called messageDisp with the selection of a p element in out HTML file
that will display a message.
Step 6: Define a variable called restBtn that will select a button element from our HTML file. This 
button will have a display property of "none", because it will not be displayed until the resetButton 
function that will be created later on gets executed.
Step 7: Create a function called checkInput that takes in an event as a parameter. On our HTML page, 
we add an onsubmit attribute to the form element so that it executes this function whenever a submit
is made. We also add an onfocus attribute to the input element where the users will write their numbers,
so that whenever the input box gets cleared whenever clicked and without the use of the backspace or delete
keys.
Step 8: The function will check several conditions. In general, the purpose of the game
is to guess the random number that the computer selected in no more than 3 attempts. So
firstly we will check if the inputValue received is equal to the random number and if the
numberOfSub is less or equal to the maxNumSubmits(3). If this is true, we will display on our 
selected p element a message of congratulations and we will call a function called resetButton
that will disable the submit button and display a button on the page that can start the game 
again. This function will be defined later on.
Step 9: We will check if the inputValue is less than the random number and if the numberOfSub
is less that the maxNumSubmits. If this is true, we will display a message to the browser stating 
that the input value submitted was too low.
Step 10: We will check if the inputValue is greater than the random number and if the numberOfSub
is greater that the maxNumSubmits. If this is true, we will display a message to the browser stating 
that the input value submitted was too high.
Step 11: If none of these previous conditions are met, then we will display a message to the browser
indicating that the game is over and giving the option to play again. The resetButton function will
be called, and the "Play Again" button element from our HTML file will we displayed and the submit button disabled.
Step 12: As long as the user has more chances to submit a guess, the numberOfSub will increase by one.
Step 13: We will use the preventDefault method on the event parameter to prevent the form to be submitted.
This will be used so that the random number doesn't change with every submission and the messages 
displayed on the page can be visible after every submission. 
Step 14: Create a function called resetGame that will reset the game by generating a new random number,
reseting the numberOfSub variable to its initial value of 1, clearing out the displayed messages using an empty
string, enabling the use of the submit button (which was disabled because of the resetButton fuction that will be 
created), and will hide the "Play Again" button.
Step 15: Create the function called resetButton that displays the "Play Again" button, and makes the resetBtn execute the 
resetGame funciton whenever clicked. It will also select the submit button by its Id name, add to it the disabled property,
and assign to it the boolean value true. What this will do is that whenever the resetButton function gets executed, the submit 
button will get disabled and therefore the "Play Again" button created by the resetButton function will get 
displayed once, and not everytime you either press the enter-key or click the submit button.
*/

let randomNum = Math.floor((Math.random() * 100) + 1);
let numberOfSub = 1;
let maxNumSubmits = 3;
let inputValue = parseInt(document.getElementById("num").value);
const messageDisp = document.getElementById("demo");
const resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "none";

function checkInput(event) {		
	if(inputValue === randomNum && numberOfSub <= maxNumSubmits) {
		messageDisp.innerHTML = "Congratulations, you got it right!"
		resetButton();
	} else if(inputValue < randomNum && numberOfSub < maxNumSubmits) {
		messageDisp.innerHTML = "Too Low"
	} else if(inputValue > randomNum && numberOfSub < maxNumSubmits) {
		messageDisp.innerHTML = "Too high"		
	} else {
		messageDisp.innerHTML = `Sorry, the correct number was ${randomNum}. Try again.`
		resetButton();	
	}

	numberOfSub++
	event.preventDefault();		
};

let resetGame = function () {
	randomNum = Math.floor((Math.random() * 100) + 1);
	numberOfSub = 1;
	inputValue = document.getElementById("num").value = "";
	document.getElementById("buttonSub").disabled = false;
	resetBtn.style.display= "none";
	messageDisp.innerHTML = "";
};

function resetButton() {
	resetBtn.style.display = "inline-block";	
  	resetBtn.addEventListener("click", resetGame);
  	document.getElementById("buttonSub").disabled = true;
};

