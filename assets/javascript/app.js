
/*var counter = 0;

function setup() {

	var timer = document.getElementById("timer");
	
	function timeIt() {
		counter++;
		timer.innerHTML("counter");
	}
	setInterval(timeIt, 1000);
}*/


function submitAnswers() {
	var total = 10;
	var score = 0;

	//User Selection/Response
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;


	for (i = 1; i <= total; i++) {
		if (eval ("q"+i) == null || eval ("q"+i) == " ") {
			alert("You missed question "+ i);
			return false;
		} 	
	}

	var answers = ["c", "b", "d", "b", "d", "c", "b", "c", "b", "c"];

	//Check responses 
	for (i = 1; i <= total; i++) {
		if (eval ("q"+i) == answers[i - 1]) {
			score++;
		}
	}
	
	//Score

	var results = document.getElementById("results");
	results.innerHTML = '<body>You scored '+score+' out of '+total+'</body>';
	//alert("You scored "+score+" out of +total");

	return false;
}


		/* 
		Answers
		q1-Answer is C
		q2-Answer is B
		q3-Answer is D
		q4-Answer is B
		q5-Answer is D
		q6-Answer is C
		q7-Answer is B
		q8-Answer is C
		q9-Answer is B
		q10-Answer is C
		*/
	


