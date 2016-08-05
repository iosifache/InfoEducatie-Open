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
		hideTooltip(11000);
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
	}

	// Generate
	$.ajax({
		type: "GET",
		url: "php/test.php",
		dataType: "html",
		data: {id: id},
		success: function(response){
			$(".lectie").append(response);
			story();
		}
	});

	// Local questions because SERVER DOESN'T ALLOW TO COMBINE JSON IN PHP
	var questions = [{
	question: "Maria are o pisica. Pisica sa e roscata.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "Pisica s-a urcat in copac.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "Copii sau intalnit in parc.",
	choices: ["Corect","Incorect"],
	correctAnswer: 1
	},
	{
	question: "O sa ii cumpar mamei mele trandafiri sau irisi.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "Diana ia cartea de la biblioteca scolii.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "Ion i-a imprumutat o carte lui Niculae.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "In vacanta, voi merge la bunici si la mare.",
	choices: ["Corect","Incorect"],
	correctAnswer: 0
	},
	{
	question: "Ea la vazut pe Richard la magazin.",
	choices: ["Corect","Incorect"],
	correctAnswer: 1
	}];

	// Create Question elements
	function createQuestionElement(index){
		var qDiv = document.createElement('div');
		qDiv.setAttribute('id','question');
		var question = document.createElement('p');
		indexIncreased = index + 1;
		question.innerHTML = "<b>Intrebare " + indexIncreased + "</b>: " + questions[index].question;
		qDiv.appendChild(question);
		qDiv.appendChild(createRadios(index));
		return qDiv;
	}

	// Create radio
	function createRadios(index){
		var radioList = document.createElement('ul');
		var str;
		for(var i=0; i<questions[index].choices.length ; i++){
			var item = document.createElement('li');
			var input = '<input type="radio" name="answer" value=' + i + ' />';
			input += questions[index].choices[i];
			item.innerHTML =input;
			radioList.appendChild(item);
		}
		return radioList;
	}

	// Init
	var questionCounter = 0;
	var numCorrect = 0;
	var firstDiv = createQuestionElement(questionCounter);
	$('#quiz').append(firstDiv);
	var radios = document.getElementsByName('answer');
	$('#button').on('click', function() {
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
			var score = numCorrect;
			var total = questions.length;
			document.getElementById('quiz').appendChild(displayScore());
			if (score < total/2){
				console.log(score + "<" + total/2);
				changeText("Uhh! Rezultatul tau este nemultumitor.");
			}
			else if (score < 3*total/4){
				console.log(score + "<" + 3*total/4);
				changeText("Rezultatul tau se incadreaza in media celor de varsta ta.");
			}
			else{
				console.log(score + ">" + 3*total/4);
				changeText("Felicitari! Sunt uimit de rezultatul obtinut de tine.");
			}
			showTooltip();
			hideTooltip(5000);
		}
	});

	// Return score
	function displayScore(){
		var para = document.createElement('p');
		para.innerHTML = 'Ai rezolvat corect ' + numCorrect + ' intrebari din cele ' +questions.length + ' in test.';
		return para;
	}

});