$(document).ready(function () {
    $("#start").on("click", function () {
        var number = 50; // set variable number to 50 to count on time of 50 seconds
        
        
        // functions to be called on click of every button
        $("#restart").on("click", restart);
        $("#show-answer").on("click", results);
        $("#submit").on("click", finish);
        
        // function to start the game and to display questions with options in it and the submit button
        function startGame() {
            
            // Setinterval to have a count on timer function and it gets called every second
            counter = setInterval(timer, 1000);
            alert("lets begin");
            
            // .show is an inbuilt function and i am using it to display the questions in container
            $(".question").show();

            // .show is an inbuilt function and i am using it to display the answers in container
            $(".answers").show();

            // similarly .hide() inbuilt function to hide the content with specific id's
            $(".inner-container").hide();
            
            $(".start").hide(); // I did same to hide start button
            $("#submit").show();
        }
        function timer() {
            number--; //decrement number by one
            $("#show_timer").html("<h2> Time Left:" + number + "</h2>");  // displays number in html
            if (number == 0) {
                stop(); // call function stop when times-up
            }
        }
        function stop() {
            clearInterval(counter); //stops the timer
            //hides questions, answers and submit button
            $(".question").hide();
            $(".answers").hide();
            $("#submit").hide();
            //shows the play again and show answers button
            $("#restart").show();
            $("#show-answer").show();
        }

        // function restart, if the user wanted to play game again
        function restart() {
            number = 50; // set number back to 50
            startGame();   // calls the function start
        }

        // this function will be called if user wanted to see answers
        function results() {
            clearInterval(counter);
            $(".results").show();
            $("#show-answer").hide();
            $("#restart").hide();
        }

        // this function will be called if user wanted to stop the game
        function finish() {
            number=1;   // sets the number to 1
        clearInterval(counter);   
       answer();   //calls the function answers to display answers
        }

       function answer(){
        // var are assigned to all correct answers and its fetching the answers through id's that is if a radio button with particular id is checked
           var ans1= ($("input[id='a1']").is(':checked'));
           var ans2= ($("input[id='d2']").is(':checked'));
           var ans3= ($("input[id='c3']").is(':checked'));
           var ans4= ($("input[id='b4']").is(':checked'));
           var ans5= ($("input[id='c5']").is(':checked'));
           if(ans1 && ans2 && ans3 && ans4 && ans5)  // if every answer is correct
           {
               stop();     // stop function will be called
               
               alert("congratulations! you answered all questions correct");
           }
           else{
               stop();    // else it will stop and alert says sorry and ask to play again
               alert("sorry! try again");
           }
           
        
        }

        //Calling the start game function to begin the game
        startGame();
    });
});
