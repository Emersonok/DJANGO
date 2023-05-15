// var hot = false
// var temp = 36

// if (temp > 80){
//     console.log("Hot Outside")
// }
// else if(temp <= 80 && temp >= 50)
// {
//     console.log("Average temp")

// }else if(temp < 50 && temp >= 32)
// {
//     console.log("It's pretty cold out")
// }
// else{
//     console.log("It's very cold outside!")
// }

var ham = 0
var cheese = 0

var report = "blank"
if(ham >= 10 && cheese >= 10) {
    report = "Strong sales of both ham and cheese"
}else if(ham === 0 && cheese === 0 ){
    report = "Nothing sold"
}else{
    report = "We have some sales"
}
console.log(report)