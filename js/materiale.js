$(document).ready(function(){

	// Story
	function story(){
		showTooltip();
		hideTooltip(5000);
	}

    // Generate
    $.ajax({
        type: "GET",
        url: "php/materiale.php",
        dataType: "html",
        success: function(response){
            $(".grid").html(response);
            story();
        }
    });

});