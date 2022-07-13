// Your Choice changing with clicks to match the clicked option
$(".rock-btn").click(function(){$("#your-choice").html("Rock")});
$(".paper-btn").click(function(){$("#your-choice").html("Paper")});
$(".scissors-btn").click(function(){$("#your-choice").html("Scissors")});

// Reset Game function clearing everything
function resetGame(){ 
    document.getElementById("your-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
}
//Generates randome Computer Pick
function computerPick() {

    const picks = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
     $("#computer-choice").html(picks[randomNumber]);
     let yourChoice = document.getElementById("your-choice").innerHTML
     let computerChoice = document.getElementById("computer-choice").innerHTML

     if (yourChoice + computerChoice === "RockScissors"){
          console.log("You win!")
    }
}

//This function is called if you win
function win() {
    yourScoreNum++;
    yourScore.innerHTML = yourScoreNum;
    result.innerHTML = "YOU WIN!";

}

