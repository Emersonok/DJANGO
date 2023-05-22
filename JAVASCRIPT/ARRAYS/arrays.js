var students = []

function add (){
   var name = prompt("What name would you like to add? ")
    students.push(name)
}

function remove(){
   var  name = prompt("What name would you like to remove? ")
   var index = students.indexOf(name)
    students.splice(index, 1)
    if (name !== students){alert("Name not available")}
}

var start = prompt("Would you like to start the roaster web app? y/n")
if (start == "y"){
    web_app_use = true
}else{web_app_use = false}

while (web_app_use){
var command = prompt("Please select an action: add, remove, display or quit")
if(command == "quit"){
    web_app_use = false
    alert("Thank you for using the web app")
}
else if (command == "add"){
    add()
}
else if (command == "display"){
    console.log(students)
}else if(command == "remove"){
    remove()
}else{
    alert("Not available")
}
}