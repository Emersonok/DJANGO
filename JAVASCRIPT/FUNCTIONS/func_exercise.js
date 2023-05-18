//Problem 1: SLEEPING IN

function sleepIn(weekday, vacation) {
   if (weekday){
    console.log("It is a weekday")
    return false
   }
   else if (vacation){
    console.log("It is a vacation")
    return true
   }else{
    return false
   } 
}

//Problem 2: MONKEY TROUBLE

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

function stringTimes(str, n) {
    new_str = ""
    for(i = 0; i < n; i++){   
        new_str+=str
    }
    return new_str
}

//Problem 4: LUCKY SUM

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

function caught_speeding(speed, is_birthday) {
    limit1 = 60
    limit2 = 80
    if(is_birthday){
        limit1 *=5
        limit2 *=5
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