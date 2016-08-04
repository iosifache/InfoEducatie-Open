$(document).ready(function(){

    // Get URL id
    function urlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    // Extract URL parameter function
    var id = urlParam('id');

    // Story
    function story(){
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
        showTooltip();
        hideTooltip(5000);
        changeTextTimer("In partea de sus poti vedea titlul primit daca vei termina aceasta lectie. Mai jos, ai continutul lectiei.", 6000);
        showTooltipTimer(6000);
    }

    // Generate
    $.ajax({
        type: "GET",
        url: "php/generateLesson.php",
        dataType: "html",
        data: {id:id},
        success: function(response){
            $(".lectie").html(response);
            story();
        }
    });

});