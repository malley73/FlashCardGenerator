// Constructor Function
function BasicCard(front, back) {
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back)
  }
  this.front = front
  this.back = back
}

BasicCard.prototype.showFront = function() {
  console.log(this.front)
};
BasicCard.prototype.showBack = function() {
  console.log(this.back)
}

module.exports = BasicCard