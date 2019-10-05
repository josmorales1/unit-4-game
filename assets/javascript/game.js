$(document).ready(function(){
    // Generate random number to guess
    var Random=Math.floor(Math.random()*120+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    console.log("Red: " + num1, "Blue: " + num2, "Yellow: " + num3, "Green: " + num4);
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
  
    $('#winner1,#winner2').hide();
    $('#lose1,#lose2').hide();  
    $('#wins').text(wins);
    $('#losses').text(losses);
  

  
  // Display wins
  function winner(){
  //alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    $('#winner1,#winner2').show();
    reset();
  }
  
  // Display losses
  function loser(){
    //alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    $('#lose1,#lose2').show();    
    reset();
  }
  
  // Clicking crystals
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      $('#totalScore').text(playerTotal); 

  //Win & lose conditions
    if (playerTotal == Random){
        winner();
    }
    else if ( playerTotal > Random){
        loser();
        reset();
    }   
    })
    
// Image click functions
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + num3;
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num4;
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }
    }); 
    
// Reset game
  function reset(){
    Random=Math.floor(Math.random()*120+19);
    $('#scoreToMatch').text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    playerTotal= 0;
    $('#totalScore').text(playerTotal);
    } 
  }); 