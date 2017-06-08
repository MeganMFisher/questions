// ************* What will each of these return?

console.log(false == '0') //loose equals - 0 is falsy so it's true
console.log(false === '0') //Strict equals - Word false is not equal to 0

// ************* What will each of these output?


console.log(1 + "2" + "2") //122
console.log(1 + +"2" + "2") //32
console.log(1 + -"1" + "2") //02 
console.log(+"1" + "1" + "2") //112
console.log("A" - "B" + "2") //NaN2 can't minus letters but adds 2
console.log("A" - "B" + 2) //NaN can't minus letters or number from NaN

// in JS with '+' if they aren't numbers it assumes you want concatination. 
// in JS '-' assumes you are trying to 'do math'

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


// ************* Explain Block Scoping VS Function Scoping?

// var vs let?


function iHaveScope() {
  // local function scope
  function iHaveNestedScope() {
    // nested local function scope
  }
}



// ************* Explain a closure?

// Function that is returned within another function. 




// *************  are semi-colons important in javascript? 