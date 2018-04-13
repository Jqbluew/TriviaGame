$('#start').on('click', function(){
	game.start();
});

$(document).on('click','#end', function(){
	game.done();
});

var questions =[{
	question: "Which of the following is NOT a family in Game of Thrones?",
	answers:["Stark", "Tyrell", "Mortensen", "Bolton"],
	correctAnswer: "Mortensen"
}, {
	question: "In the first episode of season 1, who accidentally discovers Queen Cersei's secret?",
	answers:["Arya Stark", "Bran Stark", "Joffry Baratheon", "Tyrion Lannister"],
	correctAnswer:"Bran Stark"
}, {
	question: "Who is Robb Stark's mother?",
	answers:["Talisa Stark", "Sansa Stark", "Arya Stark", "Catelyn Stark"],
	correctAnswer:"Catelyn Stark"
}, {
	question: "What does Tyrion murder his father with?",
	answers:["Poison", "Crossbow", "Sword", "Mace"],
	correctAnswer:"Crossbow"
}, {
	question: 'Who is known as "The Kingslayer"?',
	answers:["Sandor Clegane", "Joffrey Baratheon", "Eddard Stark", "Jaime Lannister"],
	correctAnswer:"Jaime Lannister"
}, {
	question: 'Who said "You know nothing Jon Snow"?',
	answers:["Daenerys Targaryen", "Cersei Lannister", "Ygritte", "Podrick Payne"],
	correctAnswer:"Ygritte"
}, {
	question: "When did Daenerys receive the dragon eggs?",
	answers:["They were a welcome gift after arriving at the city of Astapor in Slaver's Bay.", "They were a wedding gift from Magister Illyrio.", "She found them the first night she traveled with the Dothraki.", "A scout brought them to her after exploring the Red Waste and trying to find shelter."],
	correctAnswer:"They were a wedding gift from Magister Illyrio."
}, {
	question:"What is Sandor Clegane's nickname?",
	answers:["The Bastard of Bolton", "The Kingslayer","The Hound", "The Mountain"],
	correctAnswer:"The Hound"
}, {
	question: "Who is the Mother of Dragons?",
	answers:["Arya Stark", "Daenerys Targaryen", "Cersei Lannister", "Brienne of Tarth"],
	correctAnswer:"Daenerys Targaryen"
}, {
	question: "Who rescues Sansa and Theon as they fled through the forests of the North?",
	answers:["Robb Stark", "The Hound", "Brienne and Podrick", "Lord Varys"],
	correctAnswer:"Brienne and Podrick"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if (game.counter<=0){
			//console.log("time is up");
			game.done();
		}
	},
	start: function(){ 	
		timer = setInterval(game.countdown, 1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds </h2>');
		$('#start').remove();
		for (var i = 0; i < questions.length; i++) {
			$("#subwrapper").append('<h2>' + questions[i].question+'</h2>');
			for (var j=0; j<questions[i].answers.length; j++){
				$('#subwrapper').append("<input type= 'radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
			}
		}
		$('#subwrapper').append('<br><button id="end">DONE</button>')
	},

	done: function() {
		$.each($('input[name="question-0"]:checked'), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1"]:checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-7"]:checked'), function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-8"]:checked'), function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});	
		$.each($('input[name="question-9"]:checked'), function(){
			if($(this).val()==questions[9].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});	

		this.result();
	},
	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All Done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
	}
}

//START OF COPY
//-------------------------------
// function countDown(secs) {

// 	var timerButton = document.getElementById("button");

// 			timerButton.innerHTML = "You have "+secs+" seconds";
// 			var timer = setInterval(SubtractSeconds, 1000);

// 		function SubtractSeconds() {
// 			secs--;
// 			timerButton.innerHTML = "You have "+secs+" seconds";

// 			 if (secs < 1) {
// 				clearTimeout(timer);
// 				timerButton.innerHTML = "Quiz Completed!"
// 		}
// 	}
// }


// function addListerners() {
// 	if (window.addEventListener) {
// 		document.getElementById("button").addEventListener("click", btn1func);
// 	}

// function btn1func(){
// 		//alert("Insert TIMER HERE");
// 		countDown(30)
// 	var quiz = document.getElementById("results");
		
// 		if (quiz.style.display === "none") {
// 			quiz.style.display = "block";
// 			} else {
// 				quiz.style.display = "block";
// 		}
// 	}
// }
// window.onload = addListerners;


// /*var button = document.getElementById('button');
// 	('click', buttonClick);

// function buttonClick(){
// 	console.log("HI");
// };*/

// function submitAnswers() {
// 	var total = 10;
// 	var score = 0;

// 	//User Selection/Response
// 	var q1 = document.forms["quizForm"]["q1"].value;
// 	var q2 = document.forms["quizForm"]["q2"].value;
// 	var q3 = document.forms["quizForm"]["q3"].value;
// 	var q4 = document.forms["quizForm"]["q4"].value;
// 	var q5 = document.forms["quizForm"]["q5"].value;
// 	var q6 = document.forms["quizForm"]["q6"].value;
// 	var q7 = document.forms["quizForm"]["q7"].value;
// 	var q8 = document.forms["quizForm"]["q8"].value;
// 	var q9 = document.forms["quizForm"]["q9"].value;
// 	var q10 = document.forms["quizForm"]["q10"].value;


// 	for (i = 1; i <= total; i++) {
// 		if (eval ("q"+i) == null || eval ("q"+i) == " ") {
// 			alert("You missed question "+ i);
// 			return false;
// 		} 	
// 	}

// 	var answers = ["c", "b", "d", "b", "d", "c", "b", "c", "b", "c"];

// 	//Check responses 
// 	for (i = 1; i <= total; i++) {
// 		if (eval ("q"+i) == answers[i - 1]) {
// 			score++;
// 		}
// 	}
	
// 	//Score

// 	var results = document.getElementById("results");
// 	results.innerHTML = '<body>You scored '+score+' out of '+total+'</body>';
// 	//alert("You scored "+score+" out of +total");

// 	return false;
// }


// 		/* 
// 		Answers
// 		q1-Answer is C
// 		q2-Answer is B
// 		q3-Answer is D
// 		q4-Answer is B
// 		q5-Answer is D
// 		q6-Answer is C
// 		q7-Answer is B
// 		q8-Answer is C
// 		q9-Answer is B
// 		q10-Answer is C
// 		*/
	


