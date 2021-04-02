window.addEventListener("DOMContentLoaded", (event) => {
  // Understand: Player clicks section
  // set variable to board element
  // add event listener listening for click on board
  // populate and X or O on the click
  // alternate between X and O
  // if the square is already filled, nothing happens
  // Plan

  // set variable to board element
  const board = document.getElementById("tic-tac-toe-board");
  // player is equal to 1
  let player = 1;

  // getElement by id 'game-status'
  let header = document.getElementById('game-status');
  // create an array populated with empty strings
  let boardArray = ["", "", "", "", "", "", "", "", ""];

  // create 2 image elements (X and O)
  // append image to event.target.id element
  function addImg(event) {
    // if player is equal to 1
    if (player === 1) {
      let xImg = document.createElement("img");
      xImg.src =
        "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
      event.target.appendChild(xImg);
      // change value of player to 2
      player = 2;

      // else, change value to 1
    } else {
      let oImg = document.createElement("img");
      oImg.src =
        "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
      event.target.appendChild(oImg);
      player = 1;
    }
  }

  // understand - game Status
  // determine a winner
  // if player has 3 in a row, 3 in column, or 3 diagonal
  // header at top add winner x or o
  // empty squares in grid should not react to clicks
  // if all squares have symbol and no winner then tie
  // header at top will be winner none

  //plan - game status

  // on a click event
  // create conditional looking for if rows, columns, or diagonals are matching
  // if matching
  // set inner HTML to 'Winner! (x or o)'
  // create conditional
  // if array is full (loop through) and no winner
  // set innerHTML to no winner, it's a tie



  // add event listener listening for click on board
  // don't append image or alternate turns
  board.addEventListener("click", (event) => {
      // if square is already occupied
      console.log(boardArray.length)
      if (!event.target.src || !boardArray.length) {
          addImg(event);
        }
        // set a variable to equal its id at that position
        let boardPos = event.target.id
        // event.target.id.split('-')
        let eventClick = boardPos.split('-')
        let position = eventClick[1];

        // since function addImg is invoked above
        // the function is changing player value before we get to this conditional
        // so our x and o values are inverted
        if (player === 1) {
            // splice the array and update the value in array at the event.target with x or o
            boardArray.splice(position, 1, 'o');
        } else {
            boardArray.splice(position, 1, 'x');
        }

        findWinner()
        noMoreClicks();
    });

    function findWinner() {
        // find winner in rows
        if(boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[2] !== '') {
            header.innerHTML = `The winner is.....${boardArray[0]}`

        } else if(boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[5] !== '') {
            header.innerHTML = `The winner is.....${boardArray[3]}`

        } else if(boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[8] !== '') {
            header.innerHTML = `The winner is.....${boardArray[6]}`

        // find winner in columns
        } else if(boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[6] !== '') {
            header.innerHTML = `The winner is.....${boardArray[0]}`

        } else if(boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[7] !== '') {
            header.innerHTML = `The winner is.....${boardArray[1]}`

        } else if(boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[8] !== '') {
            header.innerHTML = `The winner is.....${boardArray[2]}`

        // find winner in diagonals
        } else if(boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[8] !== '') {
            header.innerHTML = `The winner is.....${boardArray[0]}`

        } else if(boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[6] !== '') {
            header.innerHTML = `The winner is.....${boardArray[2]}`
        }
    }

    function noMoreClicks() {
        if (!header.innerHTML) {
            boardArray = [];
            console.log('hey')
        }
    }
});
