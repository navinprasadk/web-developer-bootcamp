var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

var squareColor = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('ColorDisplay');
var messageDisplay = document.querySelector('#messageDisplay');
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

// if the user selects the easy mode
easyButton.addEventListener("click", function() {
  messageDisplay.textContent = " ";
  numSquares = 3;
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squareColor.length; i++) {
    if (colors[i]) {
      squareColor[i].style.backgroundColor = colors[i];
    } else {
      squareColor[i].style.display = "none";
    }
  }
})

// if the user selects the hard mode
hardButton.addEventListener("click", function() {
  messageDisplay.textContent = " ";
  numSquares = 6;
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squareColor.length; i++) {
    squareColor[i].style.backgroundColor = colors[i];
    squareColor[i].style.display = "block";
  }
})

//  If the user reset the game
resetButton.addEventListener("click", function() {
  messageDisplay.textContent = " ";
  resetButton.textContent = "New Colors";
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from the array
  pickedColor = pickColor();
  // change color display (rgb(x,x,x,)) to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares
  for (var i = 0; i < squareColor.length; i++) {
    squareColor[i].style.backgroundColor = colors[i];
  }
})

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squareColor.length; i++) {
  // Assigning colors to squares
  squareColor[i].style.backgroundColor = colors[i];
  // add click event listener to squares
  squareColor[i].addEventListener("click", function() {
    clickedColor = this.style.backgroundColor;
    // check the user picked the given color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeSquareColors(clickedColor);
    } else {
      messageDisplay.textContent = "Try Again";
      this.style.backgroundColor = "black";
    }
  })
}

// if user picked the correct color, the color of squares will be changed to clicked color
function changeSquareColors(color) {
  for (var i = 0; i < squareColor.length; i++) {
    squareColor[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(generateColors());
  }
  return arr;
}

function generateColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
