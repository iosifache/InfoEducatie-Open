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
        showTooltip();
        hideTooltip(5000);
        changeTextTimer("In partea de sus poti vedea titlul primit daca vei termina aceasta lectie. Mai jos, ai continutul lectiei.", 6000);
        showTooltipTimer(6000);
    }

    // Generate
    $.ajax({
        type: "GET",
        url: "php/lectie.php",
        dataType: "html",
        data: {id:id},
        success: function(response){
            $(".lectie").html(response);
            story();
        }
    });

});