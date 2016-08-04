$(document).ready(function(){

    // Generate
    $.ajax({
        type: "GET",
        url: "php/generateDEX.php",
        dataType: "html",
        success: function(response){
        	var combo =  JSON.parse(response);
            $(".dex").html(combo[0]);
            var corect = combo[1];

            // Story
            function showTooltip(){
	            $(".tooltip").css("opacity", "1");
	        }
	        function hideTooltip(timer){
	            setTimeout(function(){
	                $(".tooltip").removeAttr('style');
	            }, timer);
	        }
	        showTooltip();
	        hideTooltip(5000);

            // Score
           	$("#show").click(function(){
           		var user = $('#cuvant').val();
           		var userLower = user.toLowerCase();
           		if ((user==corect)||(userLower==corect)){
           			$(".dex").text("Cuvantul cautat este: " + corect + ". Raspunsul tau este: corect.");
           		}
           		else{
           			$(".dex").text("Cuvantul cautat este: " + corect + ". Raspunsul tau este: incorect.");
           		}
           	});

        }
    });

});