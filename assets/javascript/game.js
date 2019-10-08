$(document).ready(function () {
    var crystalOrange = Math.floor(Math.random() * 12 + 1);
    var crystalPurple = Math.floor(Math.random() * 12 + 1);
    var crystalRed = Math.floor(Math.random() * 12 + 1);
    var compChoice = Math.floor(Math.random() * 102 + 19);
    

    // the variables that will appear on the screen:
    $("#matchNum").text("Match this number: " + compChoice);
    var result = 0; // this will show the total # that the user has accumulated
    $("#userNum").text(result);
    var wins = 0; // will go up if result === compChoice
    $(".wins").text("Wins: " + wins)
    var losses = 0; // will go up if they surpass target # (result > compChoice)
    $(".losses").text("Losses: " + losses);


    function winner() {
        wins++;
        $(".wins").text("Wins: " + wins);
    }

    function loser() {
        losses++;
        $(".losses").text("Losses: " + losses);
    };

    function surpassed() {
        if (result > compChoice)
        result = 0;
        $("#userNum").text(result);
        crystalOrange = Math.floor(Math.random() * 12 + 1);
        crystalPurple = Math.floor(Math.random() * 12 + 1);
        crystalRed = Math.floor(Math.random() * 12 + 1);
        compChoice = Math.floor(Math.random() * 102 + 19);

        $("#matchNum").text("Match this number: " + compChoice);
    }

    
    $(".crystalOrange").on("click", function () {
        result = result + crystalOrange;
        
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystalPurple").on("click", function () {
        result = result + crystalPurple;
        
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystalRed").on("click", function () {
        result = result + crystalRed;
        
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

});