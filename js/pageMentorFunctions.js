 //  Functions for prof tooltip
 function showTooltip(){
    $(".tooltip").css("opacity", "1");
}
function showTooltipTimer(timer){
    setTimeout(function(){
        $(".tooltip").css("opacity", "1");
    }, timer);
}
function hideTooltip(timer){
    setTimeout(function(){
        $(".tooltip").removeAttr('style');
    }, timer);
}
function changeText(newest){
    $(".tooltip").text(newest);
}
function changeTextTimer(newest, timer){
    setTimeout(function(){
        $(".tooltip").text(newest);
    }, timer);
}