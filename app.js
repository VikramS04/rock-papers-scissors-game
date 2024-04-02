let textEl = document.querySelector("#text-el");
let RockEl = document.querySelector("#rock-el");
let PaperEl = document.querySelector("#paper-el");
let ScissorsEl = document.querySelector("#scissors-el");
let StartEl = document.querySelector("#startBtn-el");
let WcountEl = document.querySelector("#Wcount-el");
let LcountEl = document.querySelector("#Lcount-el");
let DcountEl = document.querySelector("#Dcount-el");
let Wins = 0;
let Loses = 0;
let Draws = 0;
let DeclareResultEl = document.querySelector("#declareResult-el");

let Hands = ["Rock✊","Paper✋","Scissors✌️"];

let Upick = "";

document.querySelector('#rock-el').onclick = function() {
  Upick = "Rock✊";
}
document.querySelector('#paper-el').onclick = function(){
  Upick = "Paper✋";
}
document.querySelector('#scissors-el').onclick = function(){
  Upick = "Scissors✌️";
}
function getRandomHand(){
  let RandomHand = Math.floor(Math.random()*3);
  return Hands[RandomHand]; 
}
function startGame(){
  textEl.textContent = "Computer's Choice: ";
  let Cpick = getRandomHand();
  textEl.textContent += Cpick;

  if( Upick === "Rock✊" && Cpick === "Rock✊"){
    DeclareResultEl.textContent = "Draw!!";
    Draws++;
  }else if(Upick === "Rock✊" && Cpick === "Scissors✌️"){
    DeclareResultEl.textContent = "You Won!!";
    Wins++;
  }else if(Upick === "Rock✊" && Cpick === "Paper✋"){
    DeclareResultEl.textContent = "You lose!!";
    Loses++;
  }

  if( Upick === "Paper✋" && Cpick === "Rock✊"){
    DeclareResultEl.textContent = "You Won!!";
    Wins++;
  }else if(Upick === "Paper✋" && Cpick === "Scissors✌️"){
    DeclareResultEl.textContent = "You lose!!";
    Loses++;
  }else if(Upick === "Paper✋" && Cpick === "Paper✋"){
    DeclareResultEl.textContent = "Draw!!";
    Draws++;
  }

  if( Upick === "Scissors✌️" && Cpick === "Rock✊"){
    DeclareResultEl.textContent = "You lose!!";
    Loses++;
  }else if(Upick === "Scissors✌️" && Cpick === "Scissors✌️"){
    DeclareResultEl.textContent = "Draw!!";
    Draws++;
  }else if(Upick === "Scissors✌️" && Cpick === "Paper✋"){
    DeclareResultEl.textContent = "You Won!!";
    Wins++;
  }

  WcountEl.textContent = "Wins: " + Wins;
  LcountEl.textContent = "Loses: " + Loses;
  DcountEl.textContent = "Draws: " + Draws;
}








