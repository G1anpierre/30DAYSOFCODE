//Selectors

const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2");


// windows open

comando1();
comando2();


// Functions 

function comando1(){
    randomNumber1 = Math.floor(Math.random()*6) + 1;
    firstDice.setAttribute("src", `images/dice${randomNumber1}.png`);
}

function comando2(){
    let randomNumber2 = Math.floor(Math.random()*6) + 1;
    secondDice.setAttribute("src", `images/dice${randomNumber2}.png`);
}


// click Dices 


firstDice.addEventListener("click", function(){
    console.log('img 1 was click');
    comando1();
});

secondDice.addEventListener("click", function(){
    console.log('img 2 was clisk');
    comando2();
});