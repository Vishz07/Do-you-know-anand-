var readlineSync = require("readline-sync");
score = 0 

var userName = readlineSync.question("What is your name GoodSir ");

console.log("Welcome to How well do you know Anand ");
console.log("---------------")

function play(question,answer){
  var userquestion = readlineSync.question(question)
  if(userquestion === answer){
    console.log("You are right")
    score++
    console.log("your score is ",score)
    console.log("---------------")
  }else{
    console.log("You are wrong")
    console.log("---------------")
  }
  
}

var questionOne = {
  question:"what is my full name: ",
  answer:"anand nair"
  
}

var questionTwo ={
  question:"Where do i live: ",
  answer:"bhilai"
}
var questionThree ={
  question:"Who is my favourite Superhero: ",
  answer:"ironman"
}
var questionFour ={
  question:"What is my Bicep size: ",
  answer:"20"
}
var questionFive={
  question:"Are you single?: ",
  answer:"yes"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive]

for(let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
  
}


console.log("your final score is: ",score)
if(score===5){
 console.log("Whoaaa How do you know me soo well!!!!!!")
}else if(score === 4){
  console.log("wew You know me pretty well!")
}else if (score === 3){
  console.log("aaaa i mean what should i say man ")
}else if (score === 2){
  console.log("You can do better (lol-i sound like your mom naa hahahaha)")
}else if (score == 1){
  console.log("You can do better (lol i sound like your mom naa hahahaha)")
}else{
  console.log("Ohhhh come on........ ")
}

