$(document).ready(function(){

	// Story
	showTooltip();
	hideTooltip(5000);

	// User click to show
	$('.plural').click(function(){
		var cuvant = $('#cuvant').val();
		var sendURL = 'http://openapi.ro/api/inflections/' + cuvant + '.json';
		$.ajax({
			type: 'get',
			url: sendURL,
			dataType: 'jsonp',
			success: function(data){
				var plural= data["plural"];
				$('#plural').text(plural);
			}
		});
	});
	
});