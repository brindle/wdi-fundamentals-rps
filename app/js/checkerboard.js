var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];


var pieces = { 'red' : [],
                'black' : []};

                    
function setSquare(row, col, player) {
    checkerboard[row][col] = player;
    console.log(checkerboard);
}

function getPieceAt(row, col) {
    var pieceValue = checkerboard[row][col];
    console.log(pieceValue)
}

function clearBoard() { 
    for (var row = 0; row < checkerboard.length; row += 1)  
     {
        for (var col = 0; col < checkerboard[row].length; col += 1) {
            checkerboard[row][col] = null;
        }
    }
    
}


function setUpRed() {
    for(var row = 0; row < 3; row++) {
        for (var col = 0; col < checkerboard[row].length; col++){
            if (row % 2 === 0 && col % 2 === 0) { 
                checkerboard[row][col] = "R";
            } else if (row % 2 !== 0 && col % 2 !== 0) {
                checkerboard[row][col] = "R";
            }
        }
    }
}

function setUpBlack() {
    for(var row = 5; row < 8; row++) {
        for (var col = 0; col < checkerboard[row].length; col++){
            if (row % 2 === 0 && col % 2 === 0) { 
                checkerboard[row][col] = "B";
            } else if (row % 2 !== 0 && col % 2 !== 0) {
                checkerboard[row][col] = "B";
            }
        }
    }
}

function getPosition() { 
    for (var row = 0; row < checkerboard.length; row += 1)  
     {
        for (var col = 0; col < checkerboard[row].length; col += 1) {
            if  (checkerboard[row][col] === "R") {
                pieces['red'].push([row,col]);
            }
            else if (checkerboard[row][col] === "B") {
                pieces['black'].push([row,col]);
            }
        }
    }
    
}


// setSquare(2, 2, "B")
// getPieceAt(2, 1);
 clearBoard();
 setUpRed();
 setUpBlack();
 getPosition();
 console.log(checkerboard);
 console.log(pieces);