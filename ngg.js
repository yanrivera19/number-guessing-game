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
	console.log(numberOfSub);
	event.preventDefault();		
};

const enterKey = document.getElementById("inputPare");
enterKey.addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});


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

