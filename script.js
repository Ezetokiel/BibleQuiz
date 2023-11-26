let boxContainer = document.querySelector(".box-container");
let squares = document.querySelectorAll(".square");
let redLives = document.getElementById("red-lives");
let orangeLives = document.getElementById("orange-lives");
let yellowLives = document.getElementById("yellow-lives");
let greenLives = document.getElementById("green-lives");
let blueLives = document.getElementById("blue-lives");
let purpleLives = document.getElementById("purple-lives");
let emptyRemaining = document.getElementById("empty-remaining");

let numberToPosition = {
    9: "A1",
    10: "A2",
    11: "A3",
    12: "A4",
    13: "A5",
    14: "A6",
    17: "B1",
    18: "B2",
    19: "B3",
    20: "B4",
    21: "B5",
    22: "B6",
    25: "C1",
    26: "C2",
    27: "C3",
    28: "C4",
    29: "C5",
    30: "C6",
    33: "D1",
    34: "D2",
    35: "D3",
    36: "D4",
    37: "D5",
    38: "D6",
    41: "E1",
    42: "E2",
    43: "E3",
    44: "E4",
    45: "E5",
    46: "E6",
    49: "F1",
    50: "F2",
    51: "F3",
    52: "F4",
    53: "F5",
    54: "F6",
}

let numberArray = [9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 49, 50, 51, 52, 53, 54];
let red = [];
let orange = [];
let yellow = [];
let green = [];
let blue = [];
let purple = [];
let empty = [];

function arraySort(x, y){
    return x - y;
}

function refresh(){
    squares.forEach((item) => {
        item.style.backgroundColor = "var(--grey)";
        item.style.transform = "scale(1)";
    })
    console.clear();
    red.splice(0, 5);
    orange.splice(0, 5);
    yellow.splice(0, 5);
    green.splice(0, 5);
    blue.splice(0, 5);
    purple.splice(0, 5);
    empty.splice(0, 6);
    numberArray = [9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 49, 50, 51, 52, 53, 54];

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        red.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        orange.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        yellow.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        green.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        blue.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        purple.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    for (let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * numberArray.length);
        empty.unshift(numberArray[randomIndex]);
        numberArray.splice(randomIndex, 1);
    }

    red = red.sort(arraySort);
    orange = orange.sort(arraySort);
    yellow = yellow.sort(arraySort);
    green = green.sort(arraySort);
    blue = blue.sort(arraySort);
    purple = purple.sort(arraySort);
    empty = empty.sort(arraySort);

    console.log(`Red: ${numberToPosition[red[0]]}, ${numberToPosition[red[1]]}, ${numberToPosition[red[2]]}, ${numberToPosition[red[3]]}, ${numberToPosition[red[4]]}`);

    console.log(`Orange: ${numberToPosition[orange[0]]}, ${numberToPosition[orange[1]]}, ${numberToPosition[orange[2]]}, ${numberToPosition[orange[3]]}, ${numberToPosition[orange[4]]}`);

    console.log(`Yellow: ${numberToPosition[yellow[0]]}, ${numberToPosition[yellow[1]]}, ${numberToPosition[yellow[2]]}, ${numberToPosition[yellow[3]]}, ${numberToPosition[yellow[4]]}`);

    console.log(`Green: ${numberToPosition[green[0]]}, ${numberToPosition[green[1]]}, ${numberToPosition[green[2]]}, ${numberToPosition[green[3]]}, ${numberToPosition[green[4]]}`);

    console.log(`Blue: ${numberToPosition[blue[0]]}, ${numberToPosition[blue[1]]}, ${numberToPosition[blue[2]]}, ${numberToPosition[blue[3]]}, ${numberToPosition[blue[4]]}`);

    console.log(`Purple: ${numberToPosition[purple[0]]}, ${numberToPosition[purple[1]]}, ${numberToPosition[purple[2]]}, ${numberToPosition[purple[3]]}, ${numberToPosition[purple[4]]}`);

    console.log(`Empty: ${numberToPosition[empty[0]]}, ${numberToPosition[empty[1]]}, ${numberToPosition[empty[2]]}, ${numberToPosition[empty[3]]}, ${numberToPosition[empty[4]]}, ${numberToPosition[empty[5]]}`);

    squares.forEach((item) => {
        if (red.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--red)";
                item.style.transform = "scale(0.8)";
            })
        } else if(orange.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--orange)";
                item.style.transform = "scale(0.8)";
            })
        } else if(yellow.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--yellow)";
                item.style.transform = "scale(0.8)";
            })
        } else if(green.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--green)";
                item.style.transform = "scale(0.8)";
            })
        } else if(blue.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--blue)";
                item.style.transform = "scale(0.8)";
            })
        } else if(purple.includes(Array.prototype.indexOf.call(boxContainer.children, item))){
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--purple)";
                item.style.transform = "scale(0.8)";
            })
        } else {
            item.addEventListener("click", () => {
                item.style.backgroundColor = "var(--black)";
                item.style.transform = "scale(0.8)";
            })
        }
    })
}

refresh();
