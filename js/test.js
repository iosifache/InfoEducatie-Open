$(document).ready(function() {

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
		changeTextTimer("In partea de sus poti vedea titlul primit daca vei termina aceasta lectie. Mai jos, ai continutul testului. Punctajul se va afisa la apasarea butonului corespunzator.", 6000);
		showTooltipTimer(6000);
	}

	// Test init
	function initTest(){

		// Create Question
		function createQuestionElement(index){
			var qDiv = document.createElement('div');
			qDiv.setAttribute('id','question');
			var question = document.createElement('p');
			question.innerHTML = questions[index].question;
			qDiv.appendChild(question);
			qDiv.appendChild(createRadios(index));
			return qDiv;
		}

		// Create answer
		function createRadios(index){
			var radioList = document.createElement('ul');
			var str;
			for(var i=0; i<questions[1].choices.length ; i++){
				var item = document.createElement('li');
				var input = '<input type="radio" name="answer" value=' + i + ' />';
				input += questions[index].choices[i];
				item.innerHTML =input;
				radioList.appendChild(item);
			}
			return radioList;
		}

		// Init some things
		var questionCounter = 0;
		var numCorrect = 0;
		var firstDiv = createQuestionElement(questionCounter);
		$('#quiz').append(firstDiv);
		var radios = document.getElementsByName('answer');

		// Calculate score
		$('#button').on('click', function(){
			if(radios[questions[questionCounter].correctAnswer].checked){
				numCorrect++;
			}
			questionCounter++;
			$('#question').remove();
			if(questionCounter<questions.length){
				var nextDiv = createQuestionElement(questionCounter);
				document.getElementById('quiz').appendChild(nextDiv);
			}
			else{
				document.getElementById('quiz').appendChild(displayScore());
			}
		});

		// Display score
		function displayScore(){
			var para = document.createElement('p');
			para.innerHTML = 'You got ' + numCorrect + ' questions out of ' + questions.length + ' right!!!';
			return para;
		}

	}

	var questions = "";

	// Get correct
	function getCorect(){
		$.ajax({
			type: "GET",
			url: "php/getCorect.php",
			dataType: "html",
			data: {id: id},
			success: function(response){
				questions = $.parseJSON(response);
				initTest();
			}
		});
  		initTest();
	}

	// Generate
	$.ajax({
		type: "GET",
		url: "php/test.php",
		dataType: "html",
		data: {id: id},
		success: function(response){
			$(".lectie").html(response);
			story();
		}
	});
	getCorect();

});