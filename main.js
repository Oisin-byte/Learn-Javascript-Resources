var number = 5; // in-line comment * at the end of a line

/* this is a
a
s
d
w
multi-line comment */

number = 9;

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
undefined = nothing, null = emypty, boolean = true or false, string, symbol = unique value, number = number, object = can store multiple "things" 
*/ 

//To Declare an Variable
var myName = "Oisín" //throught hole program

myName = 8;

let ourName="freeCodeCamp" // only able to used within the "scope" of where you declared it

const pi = 3.14 // should never chang,  if you do you will get an error

/* There is a difference between declaring variables and asinging them

How to Assing a Variable */

// Declare
var a;

//Assign
var b = 2;
console.log(b)

a = 7 

b = a;

console.log(a)

// Initializing Variables w/ Assingment Opperator

var a = 9;

// Uninitializeed Variables
var a = 5;
var b = 10;
var c = "i am a string";

a = a + 1;
b = b + 5;
c = c + "String!";

// Case Sensitivity in Variables

//Declarations
var StUdLyCapVaR; // studlyCapVar
var properCamelCase; // properCamelCase
var TitleCaseOver; // titleCaseOver

// Assingments
STUDLYCAPVAR = 10; // studlyCapVar
PRoperCAmelCAse = "A String"; // properCamelCase
tITLEcASEoVer = 9000; // titleCaseOver 

/* these will give error because the Declarations Variables are not Captilized the same as the Assignments Variables */


// + - * /              Sums in Javascipt
var sum = 10 + 10;
var difference = 10 - 5;
var product = 10 * 100;
var quotiient = 66 / 2;
console.log(sum, difference, product, quotiient)

// Incrementing Numbers

var myVar = 87

myVar++;

// Decrementing numbers

myVar--;

// Decimal Numbers