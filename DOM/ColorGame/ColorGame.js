var colors = generateRandomColors(6);

var squareColor = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('ColorDisplay');
var messageDisplay = document.querySelector('#messageDisplay')
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i= 0; i < squareColor.length; i++){
  // Assigning colors to squares
  squareColor[i].style.backgroundColor=colors[i];
  // add click event listener to squares
  squareColor[i].addEventListener("click", function(){
     clickedColor = this.style.backgroundColor;
     // check the user picked the given color
     if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeSquareColors(clickedColor);
     }
     else{
       messageDisplay.textContent = "Try Again";
       this.style.backgroundColor = "black";
     }
  })
}
// if user picked the correct color, the color of squares will be changed to clicked color
function changeSquareColors(color){
  for(var i = 0; i < squareColor.length; i++){
    squareColor[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num){
var arr= [];
for(var i = 0; i < num; i++){
  arr.push(generateColors());
}
return arr;
}

function generateColors(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b + ")";
}
