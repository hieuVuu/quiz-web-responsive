function startgame () {
       const usernameElem = document.getElementById('username')
       const hideElem = document.getElementById('welcome-quiz')
       hideElem.style.display ='none'
       document.getElementById('welcomeUser').innerHTML = "Hello"+' '+`${usernameElem.value}`
       document.getElementById('quiz-sport').style.display ='block'
       getData()
}
       // let time = 5;
       // const countdownEl = document.getElementById('countdown')
       // const statusTimeOut = document.getElementById('status-time')
       // function updateCountdown() {
       // const minute = Math.floor(time/60);
       // let seconds = time%60;
       // countdownEl.innerHTML = `${minute}` +' : '+ `${seconds}`;
       // time--;
       // }
       // setInterval(updateCountdown, 1000);

async function getData() {
       const res = await axios.get('https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple')
       const data = res.data.results
       showNextQuestion(data) 

}
function showQuiz (data) {
       document.getElementById('question').innerText = data[data.length-1].question
       const answers = data[data.length-1].incorrect_answers
       answers.push(data[data.length-1].correct_answer)
       const correctAnswer = data[data.length-1].correct_answer
       shuffleArray(answers)
       const indexCorrect = answers.indexOf(correctAnswer)
       console.log(correctAnswer)
       const answerElements =  document.getElementsByClassName('answer')
       answerElements[indexCorrect].setAttribute('id','correct-answer')
       answers.map((item,index)=> {
              answerElements[index].innerHTML = answers[index]
       })
       restart('btn-restart')
}
function showNextQuestion(data) {
       showQuiz(data)
       document.getElementById('btn-next').addEventListener('click', (e)=> {
              e.preventDefault()
              const correctAnswer =  document.getElementById('correct-answer')
                    correctAnswer.setAttribute('id','')
                    correctAnswer.setAttribute('class','answer')
              document.getElementById('status').innerHTML=''
              if(data.length>1) {
                     data.pop()
                     showQuiz(data)
              }
              else { 
                     document.getElementById('quiz-sport').style.display ='none'
                     document.getElementById('end-game').style.display ='block'
                     showTotalScore("status-end",totalScore)
                     restart('btn-end')
              }
       })
}
function checkAnswer(answer) {
       if(answer.id ==='correct-answer'){
              document.getElementById('correct-answer').classList.add('correct')
              document.getElementById('status').innerText = 'Amazing, Good Job :)'
              addScore()
       }   
       else{  
              document.getElementById('status').innerText = 'ops, incorrect answer :)'
       }
}
var totalScore = 0
function addScore() {
       totalScore = 10+totalScore;
       document.getElementById('score').innerHTML = "score:" +' '+ `${totalScore}`
}
function showTotalScore(id,totalScore) {
       document.getElementById(id).innerText = `Your score is: ${totalScore}`
}


function restart (id) {
       document.getElementById(id).addEventListener('click', (e)=> {
              e.preventDefault()
              location.reload()
       })
}
//tao randomIndexArray
function shuffleArray(array) {
       for (var i = array.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * array.length);
           var temp = array[i];
           array[i] = array[j];
           array[j] = temp;
       }
}
