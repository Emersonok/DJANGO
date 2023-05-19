//Problem 1: SLEEPING IN
// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//

function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
//    if (weekday){
//     console.log("It is a weekday")
//     return false
//    }
//    else if (vacation){
//     console.log("It is a vacation")
//     return true
//    }else{
//     return false
//    } 
}

//Problem 2: MONKEY TROUBLE
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.

function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === bSmile){
        console.log("We're in trouble here")
        return true
    }else{
        console.log("All good here")
        return false
    }
}

//Problem 3: STRING TIMES
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.

function stringTimes(str, n) {
    var new_str = ""
    for(i = 0; i < n; i++){   
        new_str+=str
    }
    return new_str
}

//Problem 4: LUCKY SUM
// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.

function luckySum(a, b, c) {
    if (a == 13){
        return 0
    }else if(b == 13){
        return a
    }else if (c == 13){
        return a + b
    }else{
    return a + b + c
    }
}

//Problem 5: CAUGHT SPEEDING
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

function caught_speeding(speed, is_birthday) {
    limit1 = 60
    limit2 = 80
    if(is_birthday){
        limit1 +=5
        limit2 +=5
        if (speed <= limit1){
            return "ticket is 0"
        }else if (speed > limit1 && speed <= limit2) {
            return "ticket is 1"
        }else{
            return "ticket is 2"
        }

    }else{
    if (speed <= limit1){
        return "ticket is 0"
    }else if (speed > limit1 && speed <= limit2) {
        return "ticket is 1"
    }else{
        return "ticket is 2"
    }
}
}

// Bonus
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if itis possible to make the goal by choosing from the given bricks. 

function makeBricks(small, big, goal){
    if (small + (big * 5) >= goal){
        return true
    }else{
        return false
    }
}