### Node[JS] Concepts

##### A function could be represented in the below ways:

```
var printHelloEarth0 = function() {
    console.log("Hello Earth 0");
 }
```
Invoked as: **printHelloEarth0();**
```
function printHelloEarth1() {
   console.log("Hello Earth 1");
}
```
Invoked as: **printHelloEarth1();**
 
 <hr>

 ##### Function Interaction:

```
var printMethod = function(val) {
    val();
 }

var printHelloEarth0 = function() {
    console.log("Hello Earth 0");
 }

function printHelloEarth1() {
  printHelloEarth0();
  console.log("Hello Earth 1");
}
```
Invoked as: <br>
**printHelloEarth0();** <br>
**printHelloEarth1();** <br>
**printMethod(printHelloEarth0);** // Passing the name, which will replace val() with printHelloEarth0() <br>
**printMethod(printHelloEarth1);** // Passing the name, which will replace val() with printHelloEarth1() <br>





 
