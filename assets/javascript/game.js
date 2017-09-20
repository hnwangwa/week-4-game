//To ensure the page fully loads before any script gets run
$(document).ready(function() {
//Variables for the counters
	var userScore = 0;
	var winsCounter = 0;
	var lossesCounter = 0;
//This will populate the random number between 19-120
	var targetNumber = Math.floor((Math.random() * 120) + 19);
	console.log(targetNumber);

//This will print this random number in the "target number" panel
	$(".target-number").text(targetNumber);
//Setting up random numbers between 1 - 12 for the gems
	var garnetNumber = Math.floor((Math.random() * 12) + 1);
	var amethystNumber = Math.floor((Math.random() * 12) + 1);
	var pearlNumber = Math.floor((Math.random() * 12) + 1);
	var rosequartsNumber = Math.floor((Math.random() * 12) + 1);

//Updates the counters as the game progresses
	$(".wins").text(winsCounter);
	$(".losses").text(lossesCounter);
//This should reset the game
	function resetGame () {
		targetNumber = Math.floor((Math.random() * 120) + 19);
		console.log("New target = " + targetNumber);
		$(".target-number").text(targetNumber);
		garnetNumber = Math.floor((Math.random() * 12) + 1);
		console.log("New garnet = " + garnetNumber);
		amethystNumber = Math.floor((Math.random() * 12) + 1);
		console.log("New amethyst = " + amethystNumber);
		pearlNumber = Math.floor((Math.random() * 12) + 1);
		console.log("New pearl = " + pearlNumber);
		rosequartsNumber = Math.floor((Math.random() * 12) + 1);
		console.log("New rose = " + rosequartsNumber);
		userScore = 0;
		$(".user-score").text(userScore);
	}
//Function for when the player wins
	function success(){
		$("#result").text("You win!");
		winsCounter++;
		$("#wins").text("Wins: " + winsCounter);
		resetGame();
	}
//Function for when the player loses
	function failure () {
		$("#result").text("You lose!");
		lossesCounter++;
		$("#losses").text("Losses: " + lossesCounter);
		resetGame();
	}
//Make the gems clickable, and sets up gameplay 
	$("#garnet").on("click", function() {
		userScore = userScore + garnetNumber;
		console.log("garnet = " + garnetNumber);
		$(".user-score").text(userScore);
			if (userScore == targetNumber){
				success();
			}
			else if (userScore > targetNumber) {
				failure();
			}

	});
	$("#amethyst").on("click", function() {
		userScore = userScore + amethystNumber;
		console.log("amethyst = " + amethystNumber);
		$(".user-score").text(userScore);
			if (userScore == targetNumber){
				success();
			}
			else if (userScore > targetNumber) {
				failure();
			}
		
	});

	$("#pearl").on("click", function() {
		userScore = userScore + pearlNumber;
		console.log("pearl = " + pearlNumber);
		$(".user-score").text(userScore);
			if (userScore == targetNumber){
				success();
			}
			else if (userScore > targetNumber) {
				failure();
			}
	});

	$("#rose-quartz").on("click", function() {
		userScore = userScore + rosequartsNumber;
		console.log("rose = " + rosequartsNumber);
		$(".user-score").text(userScore);
			if (userScore == targetNumber){
				success();
			}
			else if (userScore > targetNumber) {
				failure();
			}
	});
});