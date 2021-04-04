
function moveLeft() {
  //This fun will get the left position of the character and remove 100px. 
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}

function moveRight() {
  //This fun will get the right position of the character and add 100px.
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}

document.addEventListener("keydown", event => {
  //We create EventListner which will wait for any key to be pressed.
  if (event.key === "ArrowLeft") { moveLeft(); }
  //If the pressed key is left key then if will run moveLeft function. 
  if (event.key === "ArrowRight") { moveRight(); }
  //If the pressed key is right key then if will run moveright function.
});


var character = document.getElementById("character");
var counter = 0;

var block = document.getElementById("block");//Access the block element

block.addEventListener('animationiteration', () => {
//Change the position of the block
  var random = Math.floor(Math.random() * 3);
  // we set var random to any random number under 3(0,1,2)
  left = random * 100;
  //we multiplay them with 100.So the possiblitys will be 0,100,200. 
  block.style.left = left + "px";
  //we set new left position and with the help of that the block will come down randomly at any coloum.
  counter++;
});

setInterval(function () { //setInterval function is for hit detection which will run every 1ms.
  var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  //In this set Interval function we get the left position of the character to left position of the block.If they are the
  //same then it means they are in the same column and if they have the same top position then that means they are on top of eachother.
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  
  if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    alert("Game over. Ur Score is : " + counter);
    alert("Would you like to restart the game?");
    counter = 0;
  }
}, 1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);

