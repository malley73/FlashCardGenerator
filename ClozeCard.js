const ClozeCard = function(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze)
  }
  this.fullText = text
  this.cloze = cloze
  this.partial = this.createPartialIf()
}

ClozeCard.prototype.createPartialIf = function(text, cloze) {
  try {
    if (this.fullText.indexOf(this.cloze) === -1) throw '!!Error!!: "' + this.fullText + '" does not contain "' + this.cloze + '". Check your spelling and case and try again.'
    var length = this.cloze.length
    var loc = this.fullText.indexOf(this.cloze);
    var replaceString = ''
    for (i = 0; i < length; i++) {
      replaceString += '_'
    }
    return this.fullText.replace(this.cloze, replaceString)
  } catch (e) {
    console.log(e)
    return 'ERROR'
  }
}

ClozeCard.prototype.showPartial = function() {
  console.log(this.partial)
}
ClozeCard.prototype.showFullText = function() {
  console.log(this.fullText)
}
ClozeCard.prototype.showCloze = function() {
  console.log(this.cloze)
}

module.exports = ClozeCard