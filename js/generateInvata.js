$(document).ready(function(){

    // Generate
    $.ajax({
        type: "GET",
        url: "php/generateInvata.php",
        dataType: "html",
        success: function(response){
            $(".grid").html(response);
        }
    });

});