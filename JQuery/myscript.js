$("h1").click(function(){
    $(this).text("I was changed")
})

$("li").click(function(){
    console.log("li clicked")
})

// Key press

// $("input").eq(0).keypress(function(event){
//     //$("h3").toggleClass("turnBlue")
//     if (event.which === 13){
//         $("h3").toggleClass("turnBlue")
//     }
// })

// $("h1").on("dblclick",function(){
//     $(this).toggleClass("turnBlue")
// })

$("h1").on("mouseenter",function(){
    $(this).toggleClass("turnBlue")
})

// Animations

$("input").eq(1).on("click", function(){
    $(".container").fadeOut(800)
})


