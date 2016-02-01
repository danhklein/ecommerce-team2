// // add scripts

// $(document).on('ready', function() {
//   console.log('sanity check!');


var Quote = function (text, author) {
  this.text = text || 'no text';
  this.author = author || 'anonymous';
};

var dIsraeli = new Quote ("That depends if I embrace your politics of your wife.", "Benjamin Disraeli");

console.log(dIsraeli);

Quote.prototype.countwords= function() {
  return this.text.split(' ').length;
};
//create <div>textauthor</div>
Quote.prototype.render = function() {
  this.$element = $('<div>')
  .append(this.text)
  .append(this.author)
  .append('<input>')
  .append('<br>')
  .append('Insert text here')
  return this.$element;
}

var wes = new Quote('Back to Class', 'Wes');
var robby = new Quote('I like candy', 'Robby');

Quote.prototype.changeText = function(newText {
  this.text = newText;
});

$(document).on('ready', function() {
  $('.container')
  .append(wes.Render())
  .append(robby.render())
  $(document).on('submit','form',function(e) {
    e.preventDefault();
    var newText =$('input').val();
    console.log(this);
  })
})
});

