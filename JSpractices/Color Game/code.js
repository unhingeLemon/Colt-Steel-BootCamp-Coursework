// DOMs
let squares = document.querySelectorAll(".square");
let color_display = document.getElementById("color_display");
let pickedColor;
let message = document.getElementById("message");
let header = document.getElementById("header");
let newColors = document.getElementById("newColors");
let hard = document.getElementById("hard");
let easy = document.getElementById("easy");
let color;
let boxes;

boxes = 6;
// difficulties
hard.addEventListener("click",function(){
    boxes = 6;
    hard.style.background = "#9e579d"
    hard.style.color = "white"
    easy.style.background = "whitesmoke"
    easy.style.color = "black"
    reset();
});
easy.addEventListener("click",function(){
    boxes = 3;
    easy.style.background = "#9e579d"
    easy.style.color = "white"
    hard.style.background = "whitesmoke"
    hard.style.color = "black"
    reset();
});

color = generateRandomColors(boxes);

let guessColor;
/// reset button/new colors button
newColors.addEventListener("click",reset);

function reset(){
    console.log("NC CLICKED")
    color = generateRandomColors(boxes);
    message.innerHTML = "GUESS NOW";
    message.style.color = "BLACK";
    color_display.innerHTML = color[random(0,boxes-1)]; 
    guessColor = color_display.innerHTML;
    for (var i = 0;i < squares.length;i++){
        squares[i].style.background = color[i];
    }
    if(boxes === 3){
        for (var i = 3;i < squares.length;i++){
            squares[i].style.background = "#232323";
        }
    }

};

color_display.innerHTML = color[random(0,boxes-1)]; 
guessColor = color_display.innerHTML;
for (var i = 0;i < squares.length;i++){
    squares[i].style.background = color[i];
}

// assigning the clicked color to a variable
for (var i = 0;i < squares.length;i++){
    squares[i].addEventListener("click", function(){
        pickedColor = this.style.background;
        console.log(pickedColor);
        check();
    })
}

// this will check if the clicked color is the same 
function check(){
    // if correct
    if(pickedColor === guessColor){
        console.log("MATCHED");
        // to make another color again
        guessColor = color[random(0,boxes-1)];
        color_display.innerHTML = guessColor;
        // change the header color to picked color
        header.style.backgroundColor = pickedColor;
        if(boxes === 6){
            for(var i = 0; i <squares.length ; i++){
                squares[i].style.backgroundColor = pickedColor;
            }
        } else {
            for(var i = 0; i < 3 ; i++){
                squares[i].style.backgroundColor = pickedColor;
            }
            for(var i = 3; i < 6 ; i++){
                squares[i].style.backgroundColor = "#232323";
            }
        }
     
        message.innerHTML = "CORRECT!";
        message.style.color = "GREEN";
        // make the boxes unlickable
        for(var i = 0; i < 6 ; i++){
            squares[i].style.pointerEvents = "none";
        }
        setTimeout(function () {
            header.style.backgroundColor = "#9e579d"
            message.innerHTML = "GUESS NOW!";
            // make the boxes clickable again
            for(var i = 0; i < 6 ; i++){
                squares[i].style.pointerEvents = "auto";
            }
            reset();
          }, 2000)
    // if wrong
    } else{
        message.innerHTML = "TRY AGAIN!";
        message.style.color = "red";
        // make the clicked box disappear
        for(let i = 0; i < squares.length; i++){
            if(squares[i].style.background === pickedColor){
                squares[i].style.background =  "#232323";
            }
        }
    }
   
}

function generateRandomColors(num) {
    arr = [];

    for(var i=0;i< num;i++){
        arr[i] = getRandomColor();
    }
    return arr;
}

//get random num
function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//get random color 
function getRandomColor(){
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);

      return "rgb(" + r + ", "+ g + ", " +b +")";
  }



