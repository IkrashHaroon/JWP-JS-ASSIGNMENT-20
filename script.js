// Q1
function currentDateandTime() {
    var now = new Date();
     document.write("Current Date and Time: " + now)
}

currentDateandTime();

//Q2

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var userName = firstName  + " " + lastName

// console.log(userName);
function greet() {
    alert(`Hello ${userName} Welcome`)
}
greet();

//Q3

var num1 = +prompt("Enter First number");
var num2 = +prompt("Enter Last number");
var sum2num = num1 + num2 

function addtoNumbers() {
  alert(`Sum of ${num1} and ${num2} is ${sum2num}`)
}

addtoNumbers();


//Q4 
var firstNum = +prompt("Enter First number");
var lastNum = +prompt("Enter Last number");
var operator = prompt("Enter Operator (+,-,/,*)")

function calculator(){
    if (operator === "+"){
        alert(firstNum + lastNum)
    }
    else if (operator === "-"){
        alert(firstNum - lastNum)
    }
    else if (operator === "/"){
        alert(firstNum / lastNum)
    }
    else {
        alert(firstNum * lastNum)
    }
}
calculator();