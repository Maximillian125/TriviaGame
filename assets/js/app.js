// Start function 
	$("#start").on('click', function() {
        game.begin();
	    $('#submit').show();
});

    var questions = [{
    question: "What is his birth name?",
    answers: ["Nicolas Cage", "Nicolas Coppola", "Luke Cage", "Francis Leopold"],
    correctAns: "Nicolas Coppola"
}, {
    question: "Who's signature did he have to get to prove his love to his first wife?",
    answers: ["Johnny Depp", "Francis Coppola", "J.D. Sallinger", "Kanye West"],
    correctAns: "J.D. Sallinger"
}, {
    question: "T/F: Nic Cage and Michael Jackson married to the same woman.",
    answers: ["True", "False"],
    correctAns: "True"
}, {
    question: "T/F: Nicolas Coppola picked the last name «Cage» in reference to Marvel super hero, Luke Cage.",
    answers: ["True", "False"],
    correctAns: "True"
}, {
    question: "What did Nic Cage name his son (in reference to DC comics Superman’s Kryptonian name)?",
    answers: ["Clark Kent", "Bruce Wayne", "E.T.", "Kal El"],
    correctAns: "Kal El"
}, {
    question: "T/F: Nic Cage was married to Elvis Presley’s granddaughter.",
    answers: ["True", "False"],
    correctAns: "True"
}, {
    question: "For what role did Cage win Best Actor in a Leading Role?",
    answers: ["National Treasure", "Leaving Las Vegas", "Ghost Rider", "National Treasure 2"],
    correctAns: "Leaving Las Vegas"
}, {
    question: "What is Cage’s alma mater?",
    answers: ["Harvard", "USC", "UCLA", "ITT Technical Institute"],
    correctAns: "UCLA"
}, {
    question: "What does Nicolas Cage plan to do with his remains after he dies?",
    answers: ["Interred in a pyramid", "Cremation", "Cryogenic Freezing", "Shot out of a cannon into space"],
    correctAns: "Interred in a pyramid"
}, {
    question: "What is Nic Cage’s self-proclaimed acting style?",
    answers: ["Method Acting", "Meisner Technique", "He has a style?", "Nouveau Shamanic"],
    correctAns: "Nouveau Shamanic"
}];

var game = {
    correct: 0,
    incorrect: 0,
    number: 30,
    countdown: function(){
        game.number--;
        $("#timer").html(game.number);
        if(game.number <= 0){
            game.done();
        }
    },

    begin: function(){
        timer = setInterval(game.countdown, 1000);
        $(".subcontainer").prepend("<h2><span id='timer'>30</span></h2>")
        $('#startDiv').remove();
        for (var i = 0; i < questions.length; i++) {
            $("#questionList").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#questionList").append("<input type='radio' name='question-" + i +  "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
                
            }
        }
    },

    done: function(){
        // looking for question and making sure it's checked
        $.each($('input[name="question-0"]:checked'), function(){
            if ($(this).val() == questions[0].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-1"]:checked'), function(){
            if ($(this).val() == questions[1].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2"]:checked'), function(){
            if ($(this).val() == questions[2].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3"]:checked'), function(){
            if ($(this).val() == questions[3].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4"]:checked'), function(){
            if ($(this).val() == questions[4].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-5"]:checked'), function(){
            if ($(this).val() == questions[5].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-6"]:checked'), function(){
            if ($(this).val() == questions[6].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-7"]:checked'), function(){
            if ($(this).val() == questions[7].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-8"]:checked'), function(){
            if ($(this).val() == questions[8].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-9"]:checked'), function(){
            if ($(this).val() == questions[9].correctAns){
                game.correct++;
            } else {
                game.incorrect++;
            }


        });

        this.result();


    },

    result: function(){
        clearInterval(timer);
        $("#timer").remove();
        // $("#timeRemaining").remove();
        $("#questionList").remove();
        $(".subcontainer").prepend("<h3>Correct Answers: " + this.correct + "</h3>")
        $(".subcontainer").prepend("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
    }
}


$("#submit").on("click", function(){
    game.done();
});
