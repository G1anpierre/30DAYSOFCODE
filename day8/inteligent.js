

/*  buttones */
const push1 = document.querySelector(".boton1");
const push2 = document.querySelector(".boton2");
const restart = document.querySelector(".reset");

/* Show screen, Scores for left and right */

const marcador1 = document.getElementById("score1");
const marcador2 = document.getElementById("score2");

/* Show, Playing to */

const maxScore = document.getElementById("final");

/* Input Selector  */

const entrada = document.querySelector("input");

/* Selector for the winner Celebration */

const homeS = document.querySelector(".home");
const awayS = document.querySelector(".away");
const winMessage = document.querySelector("#message");

/* Initialize Values */

let valor1 = 0;
let valor2 = 0;

/* Max Num to play */

let winningScore = 0;


/* Event Listeners and logic   */

entrada.addEventListener("change", function(){
    maxScore.textContent = entrada.value ;
    winningScore = parseInt(entrada.value) ;
    push1.disabled = false;
    push2.disabled = false;
});



push1.addEventListener("click", function(){
    
    if(valor1 < winningScore){
      valor1++;
      marcador1.textContent = valor1;
      if(valor1 == winningScore){
          
          homeS.classList.add("champion");
          console.log("Gano home");
          winMessage.textContent = "Home won!";
          push1.disabled = true;
          push2.disabled = true;
      }
    }
    
});

push2.addEventListener("click", function(){

    if(valor2 < winningScore){
       valor2++;
       marcador2.textContent = valor2;
       if(valor2 == winningScore){
          
           awayS.classList.add("champion");
           console.log("Gano away");
            winMessage.textContent = "Away won!";
           push1.disabled = true;
           push2.disabled = true;
       }
    }
});

restart.addEventListener("click", function(){
    valor1 = 0;
    valor2 = 0;
    winningScore = 0;
    entrada.value = 0;
    marcador1.textContent = valor1;
    marcador2.textContent = valor2;
    maxScore.textContent = winningScore;
    winMessage.textContent = "vs.";
   homeS.classList.remove("champion");
   awayS.classList.remove("champion");
    push1.disabled = false;
    push2.disabled = false;
});