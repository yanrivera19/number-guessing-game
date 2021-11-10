/*
Number-guseeing-Game

Step 1: Define a variable called x with a random number producer, using
the Math.random method to generate the random number from 1-100, and apply
to it the Math.floor method to make the random numbers integers and not decimals.
Step 2: Define a variable called numberOfSub with an initial value of 0. We will use
this variable to track the amount of submits that have been made in the browser.
Step 3: Define a variable called maxSubmits with the maximum number of submits 
allowed, which is 3.
Step 4: Create a function called checkInput that takes in an event as a parameter.
Step 5: Define a variable called inputValue with the selection of the input element's
value.
Step 6: Define a variable called parr with the selection of a p element in out HTML file
that will display a message.
Step 7: The function will check several conditions. In general, the purpose of the game
is to guess the random number that the computer selected in no more than 3 attempts. So
firstly we will check if the inputValue received is equal to the random number and if the
numberOfSub is less or equal to the maxSubmits(3). If this is true, we will display on our 
selected p element a message of congratulations and we will call a function called resetButton
that will disable the submit button and display a button on the page that can start the game 
again. This function will be defined later on.
Step 8: We will check if the inputValue is less than the random number and if the numberOfSub
is less that the maxSubmits. If this is true, we will display a message to the browser stating 
that the input value submitted was too low.
Step 9: We will check if the inputValue is greater than the random number and if the numberOfSub
is greater that the maxSubmits. If this is true, we will display a message to the browser stating 
that the input value submitted was too high.
Step 10: If none of these previous conditions are met, then we will display a message to the browser
indicating that the game is over and giving the option to play again. The resetButton function will
be called, and the "Play Again" button will we displayed and the submit button disabled.
Step 11: As long as the user has more chances to submit a guess, the numberOfSub will increase by one.
Step 12: We will use the preventDefault method on the event parameter to prevent the form to be submitted.
This will be used so that the random number doesn't change with every submission and the messages 
displayed on the page can be visible after every submission. 
Step 13: Create a function called resetGame that will refresh the page whenever executed.
Step 14: Create the function called resetButton that will create and display a button element whenever 
executed. We add to it an addEventListener method with "click" and the resetGame function as its 
parameters. This will execute the resetGame function whenever the newly created button gets clicked.
We also select the submit button by its Id name, add to it the disabled property, and assign to it the 
boolean value true. What this will do is that whenever the resetButton function gets executed, the submit 
button will get disabled and therefore the "Play Again" button created by the resetButton function will get 
displayed only once, and not everytime you either press the enter-key or click the submit button.
*/

let x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
let numberOfSub = 0;
const maxSubmits = 3;

function checkInput(event) {
	const inputValue = document.getElementById("num").value;
	const parr = document.getElementById("demo");	
	if(inputValue == x && numberOfSub <= maxSubmits) {
		parr.innerHTML = "Congratulations, you got it right!"
		resetButton();
	} else if(inputValue < x && numberOfSub < maxSubmits) {
		parr.innerHTML = "Too Low"
		numberOfSub++;
	} else if(inputValue > x && numberOfSub < maxSubmits) {
		parr.innerHTML = "Too high"
		numberOfSub++;		
	} else {
		parr.innerHTML = `Sorry, the correct number was ${x}. Try again.`
		resetButton();	
	}

	numberOfSub++;
	event.preventDefault();		
};

let resetGame = function () {
document.location.href = "";
};

function resetButton() {
	var y = document.createElement("BUTTON");
	y.className = "btn btn-success";
  	y.innerHTML	= "Play Again";
  	document.querySelector(".container-fluid").appendChild(y);
  	y.addEventListener("click", resetGame);
  	document.getElementById("buttonSub").disabled = true;
  };

