$(document).ready(function(){

    // Init canvas
    var sketcher = atrament('#mySketcher', 2000, 1300, 'black');

    // Generate
    $.ajax({
        type: "GET",
        url: "php/definitie.php",
        dataType: "html",
        success: function(response){

            // Print word
            var combo =  JSON.parse(response);
            $(".text").html(combo[1]);

            // Story	        
            showTooltip();
            hideTooltip(5000);

        }
    });

});