var fname = prompt("Hello and Welcome. Please enter your First Name: ")
var lname = prompt("Please enter your Last Name: ")
var age = prompt("How old are you? ")
var height = prompt("How tall are you in centimeters? ")
var pet = prompt("What is the name of your pet? ")
alert("Thank you so much for the informations")

SpyMessage = "Welcome Comreade! I see you"
NoSpyMessage = "Nothing for you bro!"

if (fname[0] === lname[0] && age >= 20 && age <= 30 && height >= 170 && pet[pet.length - 1]){
    console.log(SpyMessage)
}
else{
    console.log(NoSpyMessage)
}