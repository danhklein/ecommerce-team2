// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

var computerScore = 0;
  var userScore = 0;

  function scoreUserCard () {
  userScore++;
  console.log(userScore)

  $('.userScore').html('<p>' +userScore + '</p>');
}

  function scoreComputer () {
  computerScore++;
  console.log(computerScore);

  $('.computerScore').html('<p>' + computerScore + '</p>');
}



var computerChoice;

//Computer chooses id
  function computerChooser () {
    var randNum = Math.random();
  if (randNum < 0.334) {
  computerChoice = 'Rock';
}
else if (randNum > .667) {
  computerChoice = 'Paper';
}
else {
  computerChoice = 'Scissors'
    }
  }

$('img').on('click', function(){
  $(".results").empty('p');
  var userChoice = $(this).attr('id');
  computerChooser();

  console.log("User: " + userChoice + ", Computer: " + computerChoice);


if (computerChoice===userChoice){ $(".results").append('<p>You Tied!</p>');
}
else if (computerChoice==='Rock' && userChoice==='Scissors') {
  $(".results").append('<p>You Choose Scissors//Opponent Chose Rock. You lose.</p>');
  scoreComputer ();

}
else if (computerChoice==='Rock' && userChoice ==='Paper') {$(".results").append('<p>You Choose Paper//Opponent Chose Rock. You win.</p>');
   scoreUserCard ()
 }
else if (computerChoice==='Scissors' && userChoice ==='Paper') {$(".results").append('<p>You Choose Paper//Opponent Chose Scissors. You lose.</p>');
scoreComputer ();
}

else if (computerChoice==='Scissors' && userChoice ==='Rock') { $(".results").append('<p>You Choose Rock//Opponent Chose Scissors. You win.</p>');
scoreUserCard ()

}
else if (computerChoice==='Paper' && userChoice ==='Rock') {$(".results").append('<p>You Choose Rock//Opponent Chose Paper. You lose.</p>');
scoreComputer()
}
else if (computerChoice==='Paper' && userChoice ==='Scissors') {$(".results").append('<p>You Choose Scissors//Opponent Chose Paper. You win.</p>');
scoreUserCard ()
}

});
});

