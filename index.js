function play(){
    //step-1 Hide the Home Screen
    const hideHome = document.getElementById('home-section');
    hideHome.classList.add('hidden');
    //Show the Play Ground section
    const showPlayGround = document.getElementById('Play-Ground');
    showPlayGround.classList.remove('hidden');
    continueGame();
    
}


function continueGame(){
    const alphabet =generateRandomAlphabet();
    console.log(alphabet);
    const currentAlphabet=document.getElementById('currunt-alphabet');
    currentAlphabet.innerText=alphabet;
    //set background color


    addBackGroundColorById(alphabet);
}
