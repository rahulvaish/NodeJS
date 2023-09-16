#### Understanding Modules: Filename = Module

###### Step#1: Create a file earth.js 
```
var printHelloEarth0 = function() {
    console.log("Hello Earth 0");
}

module.exports = printHelloEarth0;

```
###### Step#2: Create a file solarsystem.js 
```
var planet = require('./earth.js')
planet();
```

<hr>


###### Step#1: Create a file earth.js 

```
var printHelloEarth0 = function() {
    console.log("Hello Earth 0");
 }

function printHelloEarth1() {
   console.log("Hello Earth 1");
}

var returnHiEarth0 = function() {
   return "Hi Earth 0";
}

function returnHiEarth1() {
   return "Hi Earth 1";
}
function returnHiEarth1() { // It just OVERRIDES the previously mentioned/existing method!
   return "Hi Hello";
}


module.exports =  {printHelloEarth0 , printHelloEarth1, returnHiEarth0, returnHiEarth1 } 

```

###### Step#2: Create a file solarsystem.js 

```
var e = require('./earth');

e.printHelloEarth0();
e.printHelloEarth1();
console.log(e.returnHiEarth0());
console.log(e.returnHiEarth1());
```
