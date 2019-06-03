// Randomize the speed at which boxes move
var boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].style.setProperty('--animation-time', (Math.random() + 1) * 2 + 's');
}