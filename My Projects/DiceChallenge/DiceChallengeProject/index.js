var randomNumber1 = Math.floor(Math.random()*6) +1;
document.querySelector(".dice img").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6) +1;
document.querySelector(".dice img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1===randomNumber2){
  document.querySelector(".container h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="Player1 Wins";
}
else if(randomNumber2>randomNumber1){
      document.querySelector(".container h1").innerHTML="Player2 Wins";
}
