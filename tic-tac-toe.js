window.addEventListener('DOMContentLoaded', event => {

// Understand: Player clicks section
    // set variable to board element
    // add event listener listening for click on board
        // populate and X or O on the click
        // alternate between X and O
        // if the square is already filled, nothing happens
// Plan


// set variable to board element
const board = document.getElementById('tic-tac-toe-board');
// player is equal to 1
let player = 1;

// create 2 image elements (X and O)
// append image to event.target.id element
function addImg(event) {
    // if player is equal to 1
    if(player === 1) {
        let xImg = document.createElement('img');
        xImg.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'
        event.target.appendChild(xImg)
        // change value of player to 2
        player = 2

        // else, change value to 1
        } else {
            let oImg = document.createElement('img');
            oImg.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'
            event.target.appendChild(oImg)
            player = 1
        }
    }

    // add event listener listening for click on board
    // don't append image or alternate turns
    board.addEventListener('click', event => {
        // if square is already occupied
        if(!event.target.src) {
            addImg(event)
        }
    })



});
