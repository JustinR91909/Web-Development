var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = "<img style='height:100px; width:100px;' src='https://cdn-icons-png.flaticon.com/512/2164/2164620.png'> Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! <img style='height:100px; width:100px;' src='https://cdn-icons-png.flaticon.com/512/2164/2164620.png'>";
}
else{
  document.querySelector(".container h1").innerHTML = "Draw!";
}
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//image can also contain emoji instead of actual <img>
