let x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
const inputValue = document.getElementById("num").value;

function checkInput() {
	let numberOfSub = 1;
	const parr = document.getElementById("demo");
	if(inputValue == x && numberOfSub <= 3) {
		parr.innerHTML = "Congratulations, you got it right!"
	} else if(inputValue < x && numberOfSub < 3) {
		parr.innerHTML = "Too Low"
	} else if(inputValue > x && numberOfSub < 3) {
		parr.innerHTML = "Too high"
	} else if(inputValue != x && numberOfSub == 3) {
		parr.innerHTML = `Sorry, the correct number was ${x}. Try again.`
	}
	numberOfSub++

};




