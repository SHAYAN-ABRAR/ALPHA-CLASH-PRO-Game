function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('currentAlphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('Right Answer.You got a point');
        const currentScoreElement = document.getElementById('currentScore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);
        //increase the score
        const newScore = currentScore + 1;
        //show updated score
        currentScoreElement.innerText = newScore;
        console.log('You have pressed correctly', expectedAlphabet);
        removeBackGroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('Wrong Answer.You lost a life')
        const currentLifeElement = document.getElementById("currentLife");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //reduce life count
        const newLife = currentLife - 1;
        //display the updated life
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function play() {
    const homeSection = document.getElementById('homescreen')
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('playground')
    playGroundSection.classList.remove('hidden')
    
    continueGame()
}


function continueGame() {
    const alphabet = getARandomAlphabet();
    //console.log('your random letter is', alphabet);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function gameOver(){
    hideElementById('playground');
    showElementById('finalScore');
}

function playAgain(){
    const finalSection = document.getElementById('finalScore')
    finalSection.classList.add('hidden')

    const playGroundSection = document.getElementById('playground')
    console.log(playGroundSection)
    playGroundSection.classList.remove('hidden')
    playGroundSection.style.display='block'
    playGroundSection.classList.add('flex')
    console.log(playGroundSection.classList)
    //hideElementById('finalScore')
    //showElementById('playground')
    
    
    
    continueGame()

}

document.getElementById('final').addEventListener('click',function(){playAgain()})


