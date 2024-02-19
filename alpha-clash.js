function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('currentAlphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed ===expectedAlphabet){
        console.log('Right Answer.You got a point');
    }
    else{
        console.log('Wrong Answer.You lost a life')
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
    console.log('your random letter is', alphabet);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}