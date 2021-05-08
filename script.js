const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const print = document.getElementById("print");
const player1= 'Congratulations! Player1 wins';
const player2 = 'Congratulations! Player2 wins';

// btn1.innerText='x';
let disable_btn=()=>{
    btn1.disabled=true;
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
    btn5.disabled=true;
    btn6.disabled=true;
    btn7.disabled=true;
    btn8.disabled=true;
    btn9.disabled=true;
}



    // Setting DOM to all boxes or input field
function myfunc(){
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = btn1.innerText;
    b2 = btn2.innerText;
    b3 = btn3.innerText;
    b4 = btn4.innerText;
    b5 = btn5.innerText;
    b6 = btn6.innerText;
    b7 = btn7.innerText;
    b8 = btn8.innerText;
    b9 = btn9.innerText;

  
  
    //player 1 cheking
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        print.innerHTML = player1;
        print.style.color='green';
        disable_btn();
        window.alert(player1);
    }
  
   //player 2 checking
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert('Player 0 won');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        print.innerHTML = player2;
         print.style.color='green';
        disable_btn();
        window.alert(player2);
    }
  
    // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
        b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            print.innerHTML = "Draw!";
            window.alert('Draw!');
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            print.innerHTML = "Player 1 Turn";
            print.style.color='teal';
        }
        else {
            print.innerHTML = "Player 2 Turn";
            print.style.color='blue';
        }
    }
}
  
// Function to reset game
function myfunc_2() {
    // location.reload();
    btn1.innerText = '';
    btn2.innerText = '';
    btn3.innerText = '';
    btn4.innerText = '';
    btn5.innerText = '';
    btn6.innerText = '';
    btn7.innerText = '';
    btn8.innerText = '';
    btn9.innerText = '';
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    btn4.disabled=false;
    btn5.disabled=false;
    btn6.disabled=false;
    btn7.disabled=false;
    btn8.disabled=false;
    btn9.disabled=false;
    print.innerText='Player Moves and Results';
    print.style.color='red';
  
}
  
// Here onwards, functions check turn of the player 
// and put accordingly innerText X or 0
let flag = 1;
function fn_1() {
    btn1.innerText='p';
    if (flag == 1) {
        btn1.innerText = "X";
        btn1.disabled = true;
        flag = 0;
    }
    else {
        btn1.innerText = "0";
        btn1.disabled = true;
        flag = 1;
    }
}
  
function fn_2() {
    if (flag == 1) {
        btn2.innerText = "X";
        btn2.disabled = true;
        flag = 0;
    }
    else {
        btn2.innerText = "0";
        btn2.disabled = true;
        flag = 1;
    }
}
  
function fn_3() {
    if (flag == 1) {
        btn3.innerText = "X";
        btn3.disabled = true;
        flag = 0;
    }
    else {
        btn3.innerText = "0";
        btn3.disabled = true;
        flag = 1;
    }
}
  
function fn_4() {
    if (flag == 1) {
        btn4.innerText = "X";
        btn4.disabled = true;
        flag = 0;
    }
    else {
        btn4.innerText = "0";
        btn4.disabled = true;
        flag = 1;
    }
}
  
function fn_5() {
    if (flag == 1) {
        btn5.innerText = "X";
        btn5.disabled = true;
        flag = 0;
    }
    else {
        btn5.innerText = "0";
        btn5.disabled = true;
        flag = 1;
    }
}
  
function fn_6() {
    if (flag == 1) {
        btn6.innerText = "X";
        btn6.disabled = true;
        flag = 0;
    }
    else {
        btn6.innerText = "0";
        btn6.disabled = true;
        flag = 1;
    }
}
  
function fn_7() {
    if (flag == 1) {
        btn7.innerText = "X";
        btn7.disabled = true;
        flag = 0;
    }
    else {
        btn7.innerText = "0";
        btn7.disabled = true;
        flag = 1;
    }
}
  
function fn_8() {
    if (flag == 1) {
        btn8.innerText = "X";
        btn8.disabled = true;
        flag = 0;
    }
    else {
        btn8.innerText = "0";
        btn8.disabled = true;
        flag = 1;
    }
}
  
function fn_9() {
    if (flag == 1) {
        btn9.innerText = "X";
        btn9.disabled = true;
        flag = 0;
    }
    else {
        btn9.innerText = "0";
        btn9.disabled = true;
        flag = 1;
    }
}