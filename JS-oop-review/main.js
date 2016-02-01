

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
  .append(this.author);
  return this.$element;
}