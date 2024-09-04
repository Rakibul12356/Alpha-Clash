function play(){
    //step-1 Hide the Home Screen
    const hideHome = document.getElementById('home-section');
    hideHome.classList.add('hidden');
    //Show the Play Ground section
    const showPlayGround = document.getElementById('Play-Ground');
    showPlayGround.classList.remove('hidden');
    continueGame();
    
}
function playGroundScore(){
    //step-1 Hide the Home Screen
    const hideHome = document.getElementById('Play-Ground');
    hideHome.classList.add('hidden');
    //Show the Play Ground section
    const showPlayGround = document.getElementById('final-score');
    showPlayGround.classList.remove('hidden');
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setElementValuByTd('gameover-score',lastScore)
    
}
function playAgainButton(){
    //step-1 Hide the Home Screen
    const hideHome = document.getElementById('final-score');
    hideHome.classList.add('hidden');
    //Show the Play Ground section
    const showPlayGround = document.getElementById('Play-Ground');
    showPlayGround.classList.remove('hidden');
    continueGame();
    setElementValuByTd('current-life',5);
    setElementValuByTd('current-score',0);
}
//KeyBoard play section start
function handleKeyboardButtonpress(event){
    const playerPressed=event.key;
    console.log(playerPressed);
    const currentAlphabetElement=document.getElementById('currunt-alphabet');
   // console.log(currentAlphabetElement.innerText);
    const currentAlphabet=currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase();
    //cheacked match or not
    if(playerPressed === expectedAlphabet){
        console.log('you win');
        //update score
        const scoreElement = document.getElementById('current-score');
        const currentscoreText= scoreElement.innerText;
        const currentscore=parseInt(currentscoreText)
        const newscore=currentscore + 1;
        scoreElement.innerText=newscore
        //start a new round
        removeBAckGroundColorById(expectedAlphabet)
        continueGame() 
    }
    else{
        console.log('you mised a life');
        const currentLife=document.getElementById('current-life');
        const currentLifeText=currentLife.innerText;
        const life =parseInt(currentLifeText);
        const newLife= life - 1;
        currentLife.innerText=newLife;
        if(newLife === 0){
            playGroundScore()
        }

    }
}
//capture key board key press
document.addEventListener('keyup',handleKeyboardButtonpress)
//keyboard paly section end
function continueGame(){
    const alphabet =generateRandomAlphabet();
    console.log(alphabet);
    const currentAlphabet=document.getElementById('currunt-alphabet');
    currentAlphabet.innerText=alphabet;
    //set background color
    addBackGroundColorById(alphabet);
}
