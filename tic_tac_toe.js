console.log("js sheet is linked properly");

var playerOne = {
	name: "",
	piece: "X",
	score: 0
};

var playerTwo = {
	name: "",
	piece: "O",
	score: 0
};

var $win = "n";

var $board = [
	[$('#space_1'), $('#space_2'), $('#space_3')],
	[$('#space_4'), $('#space_5'), $('#space_6')],
	[$('#space_7'), $('#space_8'), $('#space_9')]
];

function startTheGame() {
	$('button').on('click', function() {
		this.disabled = false;
		game.assignSpace();
	});
};

var game = {
	players: [
		playerOne,
		playerTwo
	],

	acceptNames: function(e) {
        $('#playOneName').change(function() {
        	$name = $("input#playOneName").val();
        	this.disabled = true;
        	alert("your name is " + $name);		//FOR TESTING ONLY
        });

        $('#playTwoName').change(function() {
        	$name = $("input#playTwoName").val();
        	this.disabled = true;
        	alert("your name is " + $name);		//FOR TESTING ONLY
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
		// row:
		if ($board[rowNumber][0].text() === $board[rowNumber][1].text() && 
			$board[rowNumber][1].text() === $board[rowNumber][2].text()) {
			alert(game.currentPlayer().piece, "has won by row!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};

		// column
		if ($board[0][columnNumber].text() === $board[1][columnNumber].text() && 
			$board[1][columnNumber].text() === $board[2][columnNumber].text()) {
			alert(game.currentPlayer().piece, "has won by column!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};

		// diagonals NOT WORKING
		if ($board[0][0].text() === "X" && $board[1][1].text() === "X" && 
			$board[2][2].text() === "X") {
			alert("XX has won diagonally1!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};

		if ($board[0][0].text() === "O" && $board[1][1].text() === "O" && 
			$board[2][2].text() === "O") {
			alert("OO has won diagonally1!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};

		if ($board[0][2].text() === "X" && $board[1][1].text() === "X" && 
			$board[2][0].text() === "X") {
			alert("XX has won diagonally!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};

		if ($board[0][2].text() === "O" && $board[1][1].text() === "O" && 
			$board[2][0].text() === "O") {
			alert("OO has won diagonally!");
			
			var $win = game.currentPlayer().piece;
			game.currentPlayer().score = game.currentPlayer().score + 1;
			game.clearBoard();
		};
	},

	clearBoard: function() {
		for (var i = 0; i < $board.length; i++) {
			for (j = 0; j < $board.length; j++) {
				$board[i][j].empty;
			}
		};
	}

		// restartGame: function(win) {
		// 	if ($win === "X" || $win === "O") {
		// 		alert("Play again?");
		// 		if ($('td').text() === "X") {
		// 			$('td').text("");
		// 		} else if ($('td').text() === "O"){
		// 			$('td').text("");
	 //     	 	};

		// 		console.log(board);

		// 		game.selectFirstToGo();
		// 		game.assignSpace();
			// };
		// }
};

startTheGame();
game.acceptNames();
game.selectFirstToGo();
