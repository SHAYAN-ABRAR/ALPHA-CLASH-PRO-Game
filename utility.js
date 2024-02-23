function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackGroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    } else {
        console.error('Element not found with ID:', elementId);
    }
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('hidden'); 
    } else {
        console.error('Element not found with ID:', elementId);
    }
}


