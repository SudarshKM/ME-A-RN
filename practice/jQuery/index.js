
jQuery("h1").css("color" , "red")

$("button").text("neeext")



$(document).on("keypress",(e)=>{
    $("h1").text(e.key);
    console.log(e.key);
})