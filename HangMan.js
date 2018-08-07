let word = document.getElementById("word");
// word pool
let trial = ["banana", "hello", "bye", "asus", "bottle"];
let wordTemporary = "";
let correct = [];
let button = document.querySelector("button");
let ans = "";
let guessed = document.getElementById("guessed-word");
let left = document.getElementById("left");
let guessTrack = 10;
let random;
let wordChosen = "";

// start the game
function runAtStart(){
	// randomly generate a number and choose word from the word pool
	random = Math.floor(Math.random() * trial.length);
	wordChosen = trial[random];
	for (let i = 0; i < wordChosen.length; i++){
		// update the correct answer array
		correct.push("_");
		wordTemporary += "_";
	}
	// print out all the empty line
	word.innerHTML = wordTemporary;
}

// run the function directly
runAtStart();

// the submit button when click
button.onclick = function (){
	ans = answer.value;
	// if the guessing time is not 0
	if (guessTrack !== 0){
		// if the answer input is not empty
		if (ans !== ""){
			guessTrack--;
			for (let i = 0; i < wordChosen.length; i++){
				// check one by one the char with all the char in the word
				if (wordChosen[i] === ans){
					// just log out to see true
					console.log(true);
					// update the correct aray
					correct[i] = ans;
				}
				for (let i = 0; i < correct.length; i++){
					// join the correct array into string
					wordTemporary = correct.join("");
				}
			}
			// create a temp array that store the word into array
			let temporary = [];
			for (let i = 0; i < wordChosen.length; i++){
				temporary[i] = wordChosen[i];
			}
			// if check whether the answer input is in the temp array
			if (temporary.indexOf(ans) === -1){
				// if not the append it out as bad trial
				let listItem = document.createElement("li");
				listItem.innerHTML = ans;
				guessed.appendChild(listItem);
			}
		} else {
			window.alert("Input cannot be empty");
		}
		word.innerHTML = wordTemporary;
		left.innerHTML = guessTrack;
		answer.value = "";
		// if matched all, reload the page
		if (wordTemporary === wordChosen){
			window.alert("You Win!");
			location.reload();
		}
	} else {
		// reload the page if game over
		window.alert("Game Over!");
		location.reload();
	}
}