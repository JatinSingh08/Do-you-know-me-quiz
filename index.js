var readlinesync = require('readline-sync')

var userName = readlinesync.question('What is your Name ? ')
console.log('Welcome ' + userName + '!')

var score = 0

function checkQuestion(question, answer) {
  var useranswer = readlinesync.question(question + ' ')
  console.log('You entered :' + ' useranswer')
  if (useranswer === answer) {
    console.log('Your answer is correct 👍')
    score++
    console.log('Your score is : ' + score)
  }
  else {
    console.log('Your answer is wrong 👎')
    score--
    console.log('Your score is : ' + score)
  }
}

var questionOne = "Am i greater than 25 ?"
var answerOne = "no"

var questionTwo = "Do i live in Delhi ?"
var answerTwo = "yes"

var questionThree = "Do i love to watch Anime ?"
var answerThree = "no"

checkQuestion(questionOne, answerOne)
checkQuestion(questionTwo, answerTwo)
checkQuestion(questionThree, answerThree)

console.log('Your Final Score is : ' + chalk.red(score))
