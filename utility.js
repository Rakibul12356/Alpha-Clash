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
};
function removeBAckGroundColorById(elementId){
 const element = document.getElementById(elementId);
 element.classList.remove('bg-orange-500')
}
function setElementValuByTd(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}
function getTextElementValueById(elementId){
    const scoreElement = document.getElementById(elementId);
    const currentscoreText= scoreElement.innerText;
    const currentscore=parseInt(currentscoreText);
    return currentscore
   
}