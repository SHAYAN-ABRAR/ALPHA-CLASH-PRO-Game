function play(){
    const homeSection=document.getElementById('homescreen')
    homeSection.classList.add('hidden');

    const playGroundSection=document.getElementById('playground')
    playGroundSection.classList.remove('hidden')
    continueGame()
}


function continueGame(){
    const alphabet=getARandomAlphabet();
    console.log('your random letter is',alphabet);

    const currentAlphabetElement=document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColorById(alphabet);
}