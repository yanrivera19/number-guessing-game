let x = Math.floor((Math.random() * 100) + 1);
	console.log(x);

function checkInput(event) {
	const inputValue = document.getElementById("num").value;
	let numberOfSub = 0;
	const parr = document.getElementById("demo");	
	if(inputValue == x && numberOfSub <= 3) {
		parr.innerHTML = "Congratulations, you got it right!"
		resetButton();
	} else if(inputValue < x && numberOfSub < 3) {
		parr.innerHTML = "Too Low"
	} else if(inputValue > x && numberOfSub < 3) {
		parr.innerHTML = "Too high"
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
  	y.addEventListener("click", resetGame);
 	y.innerHTML	= "Try Again";
  	document.body.appendChild(y);
  };

