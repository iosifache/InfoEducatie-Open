$(document).ready(function(){

    // Generate
    $.ajax({
        type: "GET",
        url: "php/definitie.php",
        dataType: "html",
        success: function(response){
        	var combo =  JSON.parse(response);
            $(".definitie").html("Definitie: " + combo[0]);
            var corect = combo[1];

            // Story
	        showTooltip();
	        hideTooltip(5000);

            // Verify
         	$("#show").click(function(){
         		var user = replaceDiacritics($('#cuvant').val().toLowerCase());
         		if (user==corect){
         			$(".definitie").html("Cuvantul cautat este: <b>" + corect + "</b>. Raspunsul tau este: <b>corect</b>.");
         		}
         		else{
         			$(".definitie").html("Cuvantul cautat este: <b>" + corect + "</b>. Raspunsul tau este: <b>incorect</b>.");
         		}
         	});

        }
    });

});