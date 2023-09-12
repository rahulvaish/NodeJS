#### Understanding JS Objects:

```
var address = {
    street: 'Bedford',
    city: 'Montreal',
    country: 'Canada'
}
```
```
var myFunction = function(){
    console.log("From Function")
}
```
```
var myObject = {
    name: 'Rahul',
    gender: 'Male',
    residence: address, 
    class: {
        course: 'MTH',
        students: 80
    },
    func: myFunction,

    age: null,
}
```
Invoking:

```
console.log(myObject.residence.city); // This will print 'Montreal'
console.log((myObject['residence'])['city']); // This will print 'Montreal' | Array Style of getting object value!
console.log(myObject.age); //Undefined
myObject.age = 3 // This is how we assign value to object's value
console.log(myObject.age); //3
console.log(myObject);// Prints the complete oject
myObject.func();// Prints From Function
```
