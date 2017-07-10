// ************* What will each of these return?

console.log(false == '0') //loose equals - 0 is falsy so it's true
console.log(false === '0') //Strict equals - Word false is not equal to 0


// *******************************************************************************

// ************* What will each of these output?


console.log(1 + "2" + "2") //122
console.log(1 + +"2" + "2") //32
console.log(1 + -"1" + "2") //02 
console.log(+"1" + "1" + "2") //112
console.log("A" - "B" + "2") //NaN2 can't minus letters but adds 2
console.log("A" - "B" + 2) //NaN can't minus letters or number from NaN

// in JS with '+' if they aren't numbers it assumes you want concatination. 
// in JS '-' assumes you are trying to 'do math'


// *******************************************************************************

// ************* What will this output?

for(var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, i * 1000)
} // 5, 5, 5, 5, 5,

// For loop finishes before set timeout even starts so i = 5. i has to hit 5 first before it breaks the condition. Console log outside of setTime out displays 0-4 then within setTimeout it is just 5,5,5,5,5. Let i will be undefined within setTimeout. Once it finally invokes the timeout function the value of i will already be 5. 

for(var i = 0; i < 5; i++) {
  setTimeout(function(x) {
    return function() {
      console.log(x)
    }
  }(i), i * 1000)
}  // 0, 1, 2, 3, 4

// you have to use a closure to make it work. Function that returns a function. Fires set timeout each loop. The immediately invoked function invokes itself. Iffy. 



// *******************************************************************************

// ************* What is the outcome of each of these functions?

function returnQuestion() {
  return 3
}
returnQuestion()

function returnQuestion() {
  return 
  3             //Returns end at the end of the line so it doesn't pick up the 3. 
}
returnQuestion()

// *******************************************************************************

// ************* Difference between Passing by Value and Passing by Reference?

var a = 1
function ads(b) {
  b = 2
}
ads(a)
console.log(a) // 1

//Pass by value-doesn't work


var a = {baaa: 'baaa'}
function ads(b) {
  b.baaa = 'maaa'
}
ads(a)
console.log(a) //{baaa: 'maaa'}


var a = ['baaa', 'waaa']
function ads(b) {
  b[0] = 'maaa'
}
ads(a)
console.log(a) //['maaa', 'waaa']


//Pass by reference does work

// Javascript always passes by value. However, if you pass an object to a function, the "value" is really a reference to that object, so the function can modify that object's properties but not cause the variable outside the function to point to some other object.

function changeParam(x, y, z) {
  x = 3;
  y = "new string";
  z["key2"] = "new";
  z["key3"] = "newer";

  z = {"new" : "object"};
}

var a = 1,
    b = "something",
    c = {"key1" : "whatever", "key2" : "original value"};

changeParam(a, b, c);

// at this point a is still 1
// b is still "something"
// c still points to the same object but its properties have been updated
// so it is now {"key1" : "whatever", "key2" : "new", "key3" : "newer"}
// c definitely doesn't point to the new object created as the last line
// of the function with z = ...

// *******************************************************************************

// ************* Explain Block Scoping VS Function Scoping?

// var vs. let
// The var keyword behaves differently in function scopes and block scopes. A variable declared with var in a function scope can’t be accessed outside that function scope.

function iHaveScope() {
  var secret = 42;
}
secret; // ReferenceError: secret is not defined (in this scope)

// A variable declared with var in a block scope is available outside of that block scope.

for (var i=0; i<10; i++) {
  // block scope for the for statement
}
console.log(i) // => 10 

// Variables declared with let inside a block scope are only accessible inside that scope, making let the ideal solution to the for loop index variable scope problem. If we use let to declare the i variable in a for loop, that variable will only be available inside the for loop.

for (let i=0; i<10; i++) {
  // block scope for the for statement
}
console.log(i) // ReferenceError: i is not defined 


function iHaveScope() {
  // local function scope
  function iHaveNestedScope() {
    // nested local function scope
  }
}

// *******************************************************************************

// ************* Explain a closure?

// Function that is returned within another function. 





// *******************************************************************************

// *************  are semi-colons important in javascript? 

// The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}).

var i;                        // variable declaration
i = 5;                        // value assignment
i = i + 1;                    // value assignment
i++;                          // same as above
var x = 9;                    // declaration & assignment
var fun = function() {...};   // var decl., assignmt, and func. defin.
alert("hi");                  // function call

// All of these statements can end with a ; but none of them must. The semicolon is only obligatory when you have two or more statements on the same line:

var i = 0; i++        // <-- semicolon obligatory
                      //     (but optional before newline)
var i = 0             // <-- semicolon optional
    i++               // <-- semicolon optional

// You shouldn’t put a semicolon after a closing curly bracket }. The only exceptions are assignment statements, such as var obj = {};  

// Some consider it a good habit to terminate each statement with a ; – that makes your code a little easier to parse, and to compress: if you remove line breaks you needn't worry about several statements ending up unseparated on the same line.

// *******************************************************************************

// ************* what will the results of these console logs be?

(function test() { 
  var a = 3; //a is declared within the function can't be accessed outside.
  b = a;     //b is a global variable so it can be accessed outside the                                 function.
})()

console.log(a) 
  //undefined
console.log(b)
  // 3




// *******************************************************************************

// ************* How can you get the result to be vanilla?

var obj = {
  flavor: 'vanilla',
  test: function() {
    // =====> return this.flavor
  }
}
obj.test() 




// *******************************************************************************

// ************* Assuming the ajax code is correct and working, what potential problems do you see with this code? .... While leaving the keypress, how would you make it so when the user pauses their typing, it would autosave?

$(document).ready(function() {
  $('input').keypress(function() {
    //ajax call here
  })
})



// iffy

//palindrome

isPalindrome = (word) => {
    var forwards = word
    var backwards = word
    backwards = backwards.split('').reverse().join('')


    if ( forwards === backwards ) {
      return 'true'
    } else {
      return 'false'
    }
  }
  
isPalindrome('racecar')

or 

isPalindrome = (word) => {
    var forwards = word
    var backwards = word
    backwards = backwards.split('').reverse().join('')
  
  return (forwards === backwards ) ? true: false;
  
  }
  
  
  
isPalindrome('racecar')


// function func() {
//   return arguments.callee
// }

// func()



// var x = []

// console.log(typeof x)




// function hmmm() {
// if('luck' > 'Work') {
//   return true;
// } else {
//   return false
// }
// }

// hmmm()




// var a = 10
// var b = a++
// console.log(a)
// console.log(b)



// var a = 10
// var b = ++a
// console.log(a)
// console.log(b)



// var a = true
// var b = false
// a++; b++
// console.log(a)
// console.log(b)



// var a = new Array(3)
// a[0] = 'Hello'
// a[1] = '3'
// a[2] = 100
// console.log(a)



// console.log(isFinite(6/3))
// console.log(isFinite(4/0))
// console.log(isFinite(Math.sqrt(-9)))
// console.log(isFinite(9))



// var a = new Array('red', 'green', 'blue')
// a.push('cyan', 'magenta')
// console.log(a)



// var a = null
// var b
// console.log(a)
// console.log(b)