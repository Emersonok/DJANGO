//Problem 1
//Add a method called called nameLength that prints out the length of the employees name to the console

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        return this.name.length
    }
  }
  console.log(employee.nameLength())

//Problem 2  
// Write program that will create an Alert in the browser of each of the object's values for the key value pairs. For example, it should alert:
// Name is John Smith, Job is Programmer, Age is 31.

  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    theAlert: function(){
        message = alert("Name is " + employee["name"] + ", Job is "+ employee["job"] + ", Age is "+ employee["age"])
        return this.message
    }
  }
  console.log(employee.theAlert())

//Problem 3
// Add a method called lastName that prints
// out the employee's last name to the console.
// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function(){
        lastname = employee["name"].split(" ")
        return this.lastname[1]
    }
}
console.log(employee.lastName())

