var BasicCard = require('./BasicCard.js')
var ClozeCard = require('./ClozeCard.js')
var type = process.argv[2]
var text1 = process.argv[3]
var text2 = process.argv[4]

if (type === "flashcard") {
  var card = createBasicCard(text1, text2)
  displayNewFlashcard(card)
} else if (type === "clozecard") {
  var cloze = createClozeCard(text1, text2)
  displayNewClozecard(cloze)
} else {
  runDemo()
}


function createBasicCard(text1, text2) {
  var card = BasicCard(text1, text2)
  return card
}

function createClozeCard(text1, text2) {
  var cloze = ClozeCard(text1, text2)
  return cloze
}

function displayNewFlashcard(card) {
  console.log('Here is the flashcard');
  card.showFront()
  card.showBack()
}

function displayNewClozecard(cloze) {
  if (cloze.partial === 'ERROR') {
    console.log('There was something wrong with your command.')
  } else {
    console.log('Here is the Clozecard')
    cloze.showCloze()
    cloze.showPartial()
    cloze.showFullText()
  }
}

function runDemo() {
  text1 = 'Who was the first president of the United States?'
  text2 = 'George Washington'
  var card = createBasicCard(text1, text2)
  console.log('The first flashcard was made for you.')
  displayNewFlashcard(card)
  console.log('To make your own Flashcard run node main.js flashcard "Your Question" "Your Answer"')
  console.log("")
  text1 = 'George Washington was the first president of the United States.'
  text2 = 'George Washington'
  var cloze = createClozeCard(text1, text2)
  console.log('This cloze card was made for you.')
  displayNewClozecard(cloze)
  console.log('To make your own Clozecard run node main.js clozecard "Your Full Statement" "Your Cloze Deletion"')
  console.log("")
}