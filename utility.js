function generateRandomAlphabet(){
    const getnerateAlphabet ='abcdefghijklmnovpqrstwxyz';
    const alphabets = getnerateAlphabet.split('');
    console.log(alphabets) ;;
    const randomNumber = Math.random()*25;
    const index= Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
}


function addBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}