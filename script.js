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

Q5 
var sqrNumber = +prompt("Enter Number")

function square() {
    var Sqrofuserinput = sqrNumber * sqrNumber;
    alert(`Square of ${sqrNumber} is ${Sqrofuserinput}`)
}
square()

//Q6 
  var num = +prompt("Enter a number");

    function factorial(n) {
        let result = 1;

        for (let i = n; i >= 1; i--) {
            result = result * i;
        }

        return result;
    }

    alert("Factorial is: " + factorial(num));

//Q7
var startNum = +prompt("Enter start number");
var endNum = +prompt("Enter end number");

function counting() {
    for (let i = startNum; i <= endNum; i++) {
        document.write(i + "<br>");
    }
}

counting();

//Q8 
var baseValue = +prompt("Enter base value");
var perpendicularValue = +prompt("Enter perpendicular value");

function calculateHypotenuse() {

    function calculateSquare(num) {
        return num * num;
    }

    let hypotenuse = calculateSquare(baseValue) + calculateSquare(perpendicularValue);

    alert("Hypotenuse squared is: " + hypotenuse);
}

calculateHypotenuse();
//Q9
//i
function areaRectangleValue(width, height) {
    alert("Area: " + (width * height));
}
areaRectangleValue(5, 10);

//ii
var w = 7;
var h = 12;
function areaRectangleVar(width, height) {
    alert("Area: " + (width * height));
}
areaRectangleVar(w, h);

//Q10
function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    if (str === reversed) {
        alert(str + " is a palindrome");
    } else {
        alert(str + " is not a palindrome");
    }
}
isPalindrome("madam");

//Q11
function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    alert(words.join(' '));
}
capitalizeWords('the quick brown fox');

//Q12
function longestWord(str) {
    var words = str.split(' ');
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    alert("Longest word: " + longest);
}
longestWord('Web Development Tutorial');

//Q13
function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    alert("Letter '" + letter + "' occurs " + count + " times");
}
countLetter('JSResourceS.com', 'o');

//Q14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference);
}
calcCircumference(5);

//Q14
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is " + area);
}
calcArea(5);

