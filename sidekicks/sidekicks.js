//procedural
var sidekicks = [
{ name: "Robin", hero: "Batman" },
{ name: "Supergirl", hero: "Superman" },
{ name: "Oracle", hero: "Batman" },
{ name: "Krypto", hero: "Superman" },
];
var sideKickSuperDuper = [];

for (var i=0; i<sidekicks.length; i++) {
  if(sidekicks[i].hero === 'Batman') {
    sideKickSuperDuper.push(sidekicks[i].name);
  }
  }
console.log(sideKickSuperDuper);

//********************FUNCTIONAL*************//

//Can use filter almost always when using iteration loop

var someArray = sidekicks.filter(function(el) {
  return el.hero === 'Batman';
});

console.log(someArray);

//====> [ { name: 'Robin', hero: 'Batman' },
//====> { name: 'Oracle', hero: 'Batman' } ]