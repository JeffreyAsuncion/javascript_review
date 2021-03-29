// no hoisting
doStuff();

var  doStuff = function(){
    console.log("hey");
}

//youtube.js:2 Uncaught TypeError: doStuff is not a function
// at youtube.js:2