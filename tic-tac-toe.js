window.addEventListener('DOMContentLoaded', event => {

// Understand: Player clicks section
    // set variable to board element
    // add event listener listening for click on board
        // populate and X or O on the click
        // alternate between X and O
        // if the square is already filled, nothing happens
// Plan
    // set variable to board element
    // add event listener listening for click on board
        // player is equal to 1
        // create 2 image elements (X and O)
        // if square is already occupied
            // don't append image or alternate turns
        // append image to event.target.id element
        // if player is equal to 1
            // change value of player to 2
            // else, change value to 1

    const board = document.getElementById('tic-tac-toe-board');
    let player = 1;
    let xImg = document.createElement('img');
    xImg.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'
    let oImg = document.createElement('img');
    oImg.scr = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'

    board.addEventListener('click', event => {
        
    })
});
