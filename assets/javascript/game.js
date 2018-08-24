$(document).ready(function() {
    let magicNumber; 
    let totalScore= 0;
    let gem1;
    let gem2;
    let gem3;
    let gem4;
    let wins= 0;
    let losses= 0;

    function newNumbers() {
        magicNumber = Math.floor(Math.random() * 110) + 20;
        gem1Number = Math.ceil(Math.random() * 12);
        gem2Number = Math.floor(Math.random() * 12);
        gem3Number = Math.floor(Math.random() * 12);
        gem4Number = Math.floor(Math.random() * 12);
    }

    function newGame() {
        newNumbers ();
        totalScore = 0;
        $("#magicNumber").text(magicNumber);
        $("#totalScore").text(totalScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#playAgain").text("");
        $("#gem1").attr("data-gemvalue", gem1Number);
        $("#gem2").attr("data-gemvalue", gem2Number);
        $("#gem3").attr("data-gemvalue", gem3Number);
        $("#gem4").attr("data-gemvalue", gem3Number);
    }

    function youLose() {
        $("#playAgain").text("You Lose!");
        losses++;
        $("#losses").text(losses);
    }

    function youWin() {
        $("#playAgain").text("You WIN!");
        wins++;
        $("#wins").text(wins);
    }

  

    newGame();

    $(".gemimg").hover(function() {
        $(this).css({opacity: 0.3});
    },
    function() {
        $(this).css({opacity: 1});
    });


    $(".gemimg").on("click", function() {
        if (totalScore >= magicNumber) {
            return;
        }
    

    let gemValue = $(this).attr("data-gemvalue");
    gemValue= parseInt(gemValue);
    totalScore += gemValue;
    $("#totalScore").text(totalScore);

    if (totalScore === magicNumber) {
            youWin();
    } else if (totalScore > magicNumber) {
            youLose();
    }

});


    $(".btn").on("click",function() {
            newGame();
    });

});