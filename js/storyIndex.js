$(document).ready(function(){

	// Functions for tooltip show and hide
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
});