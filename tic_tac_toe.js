console.log("js sheet is linked properly");

var firstPlayer = {
	name: "",
	piece: "X",
	score: 0
};

var secondPlayer = {
	name: "",
	piece: "O",
	score: 0
};

var space1 = $('#space_1').text();
var space2 = $('#space_2').text();
var space3 = $('#space_3').text();
var space4 = $('#space_4').text();
var space5 = $('#space_5').text();
var space6 = $('#space_6').text();
var space7 = $('#space_7').text();
var space8 = $('#space_8').text();
var space9 = $('#space_9').text();

var game = {
	acceptNames: function() {
		// var firstPlayer.name = $currentInput.val();
	},


// selectFirstToGo: function(){
// 	random function that selects who will go first (playerOne or playerTwo)
// 	once the first player is chosen, insert the player's piece.

	// playMode: function () {
	// 		$('td').on('click', function () {
	// 			if ($('td').text() = null) {
	// 				$('td').push(firstPlayer);
	// },

	// testClick: function () {	//QUESTION FOR MATT
	// 	$( "#space" ).toggle(function() {
	// 	  alert( "First player move." );
	// 		}, function() {
	// 	  alert( "Second player move." );
	// 		})
	// 	},

	assignSpace: function() {		//QUESTION FOR MATT: HOW TO SET INNER TEXT - I"M ABLE TO GRAB THE ELEMENT ON CLICK, NOW JUST NEED TO ADD TEXT
		$('td').on('click', function() {
			alert("you clicked a space");   // for testing purposes
			console.log(this);
	// 		var that = this;
	// 		var that = that.text(secondPlayer.piece);
		});
	},

	findWinner: function() {

	//find if there's a winner in the rows
		if ((space1 === space2) && (space2 === space3)) {
			alert(space1 + " is the winner - they won by rows!");
				//increase score of winner
			alert("play again?");
		} else if ((space4 === space5) && (space5 === space6)) {
			alert(space4 + " is the winner - they won by rows!");
		} else if ((space7 === space8) && (space8 === space9)) {
			alert(space7 + " is the winner - they won by rows!");

	//find if there's a winner in the columns
		} else if ((space1 === space4) && (space4 === space7)) {
			alert(space1 + " is the winner - they won by columns!");
		} else if ((space2 === space5) && (space5 === space8)) {
			alert(space2 + " is the winner - they won by columns!!");
		} else if ((space3 === space6) && (space6 === space9)) {
			alert(space3 + " is the winner - they won by columns!!");

	//find if there's a winner diagonally
		} else if ((space1 === space5) && (space5 === space9)) {
			alert(space1 + " is the winner - they won diagonally!");
			//increase score of winner
			alert("play again?");
		} else if ((space3 === space5) && (space5 === space7)) {
			alert(space4 + " is the winner - they won diagonally!!");
		} else {
			alert("not yet"); //this is just for testing purposes.
		}
	alert("play again?");
	}
	
};