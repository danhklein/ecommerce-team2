//Event Listener

document.querySelector('form').addEventListener('submit',function(event) {
  event.preventDefault();
  var num = document.getElementById('number').value;
  guessing(num);
});


//Helper function
var guessing = function (input) {

  var compNum = Math.random() * 1e2 + 1;
  compNum = Math.floor(compNum);
  if (input === compNum) {
    alert("Nailed it! You win.");
  }
  else if (input > compNum) {
    alert("The Computer got " + compNum +"! You over shot!");
  }
  else {
    alert("The Computer got " + compNum +"! You fell short!");
  }
};


