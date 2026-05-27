//!Exercice Modif DOM + setTimeout
setTimeout(()=>{
    document.body.style.backgroundColor = 'PaleTurquoise';
},3000);


//!Exercice setInterval
const buttonSetInterval = document.querySelector('#button-exercice-setInterval');
const timerTitle = document.querySelector('#timer-title');

buttonSetInterval.addEventListener('click',()=>{
    //Pour quand on reclick le bouton on remet le titre du timer à TIMER
    timerTitle.innerText = 'TIMER';
    let counter = 3;
    console.log('On démarre le Timer');
    const intervalID = setInterval(() => {
        
        if (counter > 0) {
            timerTitle.innerText = counter;
        }
        else{
            console.log('On arrête le Timer');
            timerTitle.innerText = "GO !";
            clearInterval(intervalID);
        }
        counter--;
    }, 1000);
});