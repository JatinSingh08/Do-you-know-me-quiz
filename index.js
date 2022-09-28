var readlinesync = require('readline-sync')
var chalk = require('chalk');
var userName = readlinesync.question('What is your Name ? ')
console.log('Welcome ' + chalk.yellow(userName) + '!')

var score = 0

var highScore = {
  name: 'yash',
  score: 4
}

function checkQuestion(question, answer) {
  
  var useranswer = readlinesync.question(question + ' ')
  console.log('You entered : ' + chalk.green(useranswer))
  
  if ( useranswer.toUpperCase() === answer.toUpperCase() ) {
    console.log('Your answer is ', chalk.green('correct') ,'👍')
    score++
    console.log('Your score is : ' + chalk.blue(score));
  }
  else {
    console.log('Your answer is', chalk.red('wrong'), '👎');
    console.log('Correct answer is : ', chalk.red(answer))

    console.log('Your score is : ' + chalk.blue(score))
  }
  
}

var questionOne = "Am i greater than 25 ?"
var answerOne = "no"

var questionTwo = "Do i live in Delhi ?"
var answerTwo = "yes"

var questionThree = "Do i love to watch Anime ?"
var answerThree = "no"

var questionFour = "Who is my favourite cricketer ?"
var answerFour = "Virat Kohli"

var questionFive = "Who's my favourite Hollywood actor ?"
var answerFive = "Leonardo DiCaprio"

var questionSix = "Who's my favourite Bollywood actor ?"
var answerSix = "Shahrukh Khan"

checkQuestion(questionOne, answerOne)
checkQuestion(questionTwo, answerTwo)
checkQuestion(questionThree, answerThree)
checkQuestion(questionFour, answerFour)
checkQuestion(questionFive, answerFive)
checkQuestion(questionSix, answerSix)

console.log(chalk.yellow('Your Final Score is : ') + chalk.blue(score))
if(highScore.score < score) {
  console.log(chalk.blue('Congrats, You broke the high score 🎉\n', 'send me the screenshot to add your name to the High Score list.\n'))
}
