var player1 = prompt("Write your player name: Blue")
var player1Color = "rgb(86, 151, 255)"

var player2 = prompt("Write your player name: Red")
var player2Color = "rgb(237, 45, 73)"

var game_on = true
var table = $("table tr")

function Win (rowNum, colNum){
    console.log("You won starting at this row, col")
    console.log(rowNum)
    console.log(colNum)
}

function reportColor(rowIndex, colIndex){
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color")
}

function checkBottom(colIndex){
    var colorReport = reportColor(5, colIndex)
    for (var row = 5; row > -1; row--){
        colorReoport = reportColor(row, colIndex)
        if (colorReport === "rgb(128, 128, 128)"){
            return row
        }
    }
}

function colorMatchCheck(one, two, three, four){
    return(one === two && one === three && one === four && one !== "rgb(123, 128, 128)" && one !== undefined)
}

//Check for Horizontal win
function horizontalWinCheck(){
    for (var row = 0; row < 6; row++){
        for (var col = 0; col < 4; col ++){
            if (colorMatchCheck(reportColor(row, col), reportColor(row, col+1), reportColor(row, col +2), reportColor(row, col +3))){
                console.log("horiz")
                reportWin(row, col)
                return true
            }else{
                continue
            }
        }
    }
}

//Check for Vertical win

function verticalWinCheck(){
    for (var col = 0; col < 7; col++){
        for (var row = 0; row < 3; row++){
            if(colorMatchCheck(reportColor(row,col), reportColor(row+1,col), reportColor(row+2, col))){
                console.log("vertical")
                reportWin(row, col)
                return true
            }else{
                continue
            }
        }
    }
}

function diagonalWinCheck(){
    for (var col = 0; col < 5; col++){
        for (var row = 0; row < 7; row++){
            if(colorMatchCheck(reportColor(row,col), reportColor(row+1,col+1), reportColor(row+2, col+2))){
                console.log("diagonal")
                reportWin(row, col)
                return true
            }else if(colorMatchCheck(reportColor(row,col), reportColor(row-1,col+1), reportColor(row-2, col+2))){
                console.log("diagonal")
                reportWin(row,col)
                return true
            }else{
                continue
            }
        }
    }
}

var currentPlayer = 1
var currentNmae = player1
var currentColor = player1Color

$("h3").text(player1 + " it is your turn")

$(".board button").on("click", function(){
    var col = $(this).closest("td").index()
})




