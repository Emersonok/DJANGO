function helloYou(name){
    console.log("hello " + name)
}

function addNum(num1, num2){
    console.log(num1+num2)
}

function helloSomeone(name="Frank") {
    console.log("Hello "+name)
}

function formal(name="Emmy", title="Chief"){
    return(title + " "+name)
}

function timesFive(numInput) {
    // Local scope to the function
    var result = numInput * 5
    return result
}

//Global Scope

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
}

fun()
console.log(stuff)