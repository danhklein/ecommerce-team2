// function pairGuess (userInput) {
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var num = document.getElementById("userInput").value;
  console.log(num);
  guessing(num);
  });

var guessing =function(num) {
var compNum = Math.random()*100+1;
compNum = Math.floor(compNum);
console.log(compNum);


  if (num > compNum) {
    alert("TOO HIGH SUCKER!");
  }
  else if (num < compNum) {
    alert("YOUR NUMBER IS TOO SMALL");
  }

else  {
  alert("Congrats! You made it!");
}
};