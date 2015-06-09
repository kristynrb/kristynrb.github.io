// console.log("js sheet is linked properly");
// console.log("checking the push");

var $counter = 0;
var $winner = false;

var playerOne = {
	pName: "",
	piece: "X",
	score: 0
};

var playerTwo = {
	pName: "",
	piece: "O",
	score: 0
};

var $board = [
	[$('#space_1'), $('#space_2'), $('#space_3')],
	[$('#space_4'), $('#space_5'), $('#space_6')],
	[$('#space_7'), $('#space_8'), $('#space_9')]
];

var $newBoard = [
	[$('#space_1'), $('#space_2'), $('#space_3')],
	[$('#space_4'), $('#space_5'), $('#space_6')],
	[$('#space_7'), $('#space_8'), $('#space_9')]
];

function displayScore() {
	$("#play_1_score").text("Score: " + playerOne.score);
	$("#play_2_score").text("Score: " + playerTwo.score);
}

function startTheGame() {
	$('#play').on('click', function() {
		this.disabled = false
		game.assignSpace();
		$( "#play" ).hide( "slow" );
	});
};

var game = {
	players: [
		playerOne,
		playerTwo
	],

	acceptNames: function(e) {
        $('#playOneName').change(function() {
        	var $name = $("input#playOneName").val();
        	playerOne.pName = $name;
        	this.disabled = true;
        });

        $('#playTwoName').change(function() {
        	var $name = $("input#playTwoName").val();
        	playerTwo.pName = $name;
        	this.disabled = true;
        });
	},

	nextPlayer: function () {
		this.players.push(this.players.shift());
	},

	currentPlayer: function () {
		return this.players[0];
	},

	selectFirstToGo: function() {
		var chance = Math.random();
		if (chance < 0.5) {
			this.nextPlayer();
		};
		console.log(this.currentPlayer());
	},

	assignSpace: function() {	
		$('td').on('click', function() {
			var $td = $(this),
 				$tr = $td.parent(),
			    $allTrs = $('tr'),
				$trChildren = $tr.children();
				$counter = $counter + 1;

			var row = $allTrs.index($tr),
			    col = $trChildren.index($td);

			if (!$td.text()) {
				$td.text(game.currentPlayer().piece);

				game.checkForWinner(row, col);
				game.nextPlayer();
			}
		});
	},

	checkForWinner: function (rowNumber, columnNumber) {
		console.log(rowNumber, columnNumber);

		if ($board[rowNumber][0].text() === $board[rowNumber][1].text() && 
			$board[rowNumber][1].text() === $board[rowNumber][2].text()) {

			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		};

		// column
		if ($board[0][columnNumber].text() === $board[1][columnNumber].text() && 
			$board[1][columnNumber].text() === $board[2][columnNumber].text()) {

			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		};

		// diagonals 
		if ($board[0][0].text() === "X" && $board[1][1].text() === "X" && 
			$board[2][2].text() === "X") {
			
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		};

		if ($board[0][0].text() === "O" && $board[1][1].text() === "O" && 
			$board[2][2].text() === "O") {

			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		};

		if ($board[0][2].text() === "X" && $board[1][1].text() === "X" && 
			$board[2][0].text() === "X") {
			
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		};

		if ($board[0][2].text() === "O" && $board[1][1].text() === "O" && 
			$board[2][0].text() === "O") {

			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
			$winner = true;
		} ;
		if ($counter === 9) {
			game.clearBoard();
		};
	},

		clearBoard: function() {
			if ($winner === false) {
				$( "#bandaidOnBulletWound").text("The game is a tie!");
			} else {
				$( "#bandaidOnBulletWound").text(game.currentPlayer().piece + " is the winner!");
			};

				$( "#bandaidOnBulletWound" ).show( "slow" );
				$('#clear').show("slow");

				$('#clear').on('click', function(){
					$( "#bandaidOnBulletWound" ).hide( "slow" )
					$('#clear').hide("slow");
					$board = $newBoard;
						if ($('td').text()) {
							$('td').text("");
	     	 	};
			})
				game.selectFirstToGo();
				game.assignSpace();
				displayScore();
		}
};

startTheGame();
displayScore();
game.acceptNames();
game.selectFirstToGo();
