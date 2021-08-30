var user = require("readline-sync");

// Taking input from the user

var userName = user.question("What's your name? ");
console.log("Welcome "+ userName + " to Do You Know Aditi Dalvi ");

var questionOne = {
question:"Where do i live? ",
answer:"mumbai" 
}

var questionTwo = {
  question:"My favourite dessert is? ",
  answer:"kheer"
}

var questionThree = {
  question:"What is my favourite color? ",
  answer:"black"
}

var questionFour = {
  question:"Who is my favourite superstar? ",
  answer:"deepika padukone"
}


var questionFive = {
  question:"My favourite movie?",
  answer:"shershaah"
}
var arr = [questionOne,questionTwo,questionThree,questionFour,questionFive];

var score = 0;

for(i=0;i<arr.length;i++){
  var current = arr[i];
  var a = user.question(current.question);
  if(a.toUpperCase()===current.answer.toUpperCase()){
    console.log("The answer is right!!")
    score+=1;
    console.log("Your current score: "+score);
  }
  else{
    console.log("Your answer is wrong!!");
  
    console.log("Your current score is "+score);
  }

}
console.log()
console.log("Yayy! You Scored:" +score);
console.log();
var highscores = [{
  name:"Aditi",
  score:4}
  ,{
    name:"Sneha",
    score:2
  }]

  console.log("Check out the high scores, if you should be there ping me and send a screenshot. I'll update it");
  console.log()

  for(i=0;i<highscores.length;i++){
    console.log(highscores[i].name)
    console.log(highscores[i].score)
    console.log();
  }
