var randsum = Math.random() * (100);
var randsum2 = Math.random() * 100;
var mean = ((randsum2 + randsum)/2);
var variance = Math.sqrt((Math.pow(randsum - mean, 2) + Math.pow(randsum2 - mean, 2))/2);
var dev = Math.pow(variance, 2); console.log (mean); console.log (dev); console.log (variance);
console.log(randsum2); console.log (randsum)


// var randint = Math.random() * 100;

// for (var num = 0; num <= randint; num += 2) {
//   console.log(num)
// }

// var randnum = Math.random() * 100;

// if (var randnum > 40) {
//   if
//     for (var num = 40; num <= randnum; )

// }

var array =[];
for (var i; i < 20; i++) {
  array=Math.random() * 100;}
console.log(array);

// Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
// Generate twenty random integers from 0 to 100 and print the largest and smallest integers.