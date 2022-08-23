let digit1, digit2;
let is_right = true;

function next() {
    // Creating two new numbers
    let one = Math.floor(100 + Math.random() * 900);
    digit1 = one;
    let two = Math.floor(100 + Math.random() * 900);
    while (one+two>1000) {
        two = Math.floor(100 + Math.random() * 900);
    }
    digit2 = two;
    
    // Drawing them
    let field = document.getElementById("field");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let ctx = field.getContext("2d");
    if (is_right == true) {
        ctx.clearRect(0, 0, field.width, field.height);
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input1.style.backgroundColor = "white";
        input2.style.backgroundColor = "white";
        input3.style.backgroundColor = "white";
        ctx.fillStyle = "black";
        ctx.font = "60px Arial";
        ctx.fillText(one, 50, 65)
        ctx.fillText("+", 10, 100)
        ctx.fillText(two, 50, 130)
        ctx.fillText("--------", 10, 160)
    }
}

function check() {
    let answerinput1 = document.getElementById("input1");
    let answerinput2 = document.getElementById("input2");
    let answerinput3 = document.getElementById("input3");
    let answer = answerinput1.value + answerinput2.value + answerinput3.value;
    console.log(answer, typeof Number(answer));
    console.log(digit1, digit2, digit1 + digit2);
    console.log(Number(answer) == digit1 + digit2);
    if (Number(answer) == digit1 + digit2) {
        is_right = true;
        answerinput1.style.backgroundColor = "green";
        answerinput2.style.backgroundColor = "green";
        answerinput3.style.backgroundColor = "green";
    } else {
        is_right = false;
        answerinput1.style.backgroundColor = "red";
        answerinput2.style.backgroundColor = "red";
        answerinput3.style.backgroundColor = "red";
    }
}