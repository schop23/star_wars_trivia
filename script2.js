function submitAnswers () {
  //answers array
  let answers = ['B', 'A', 'D', 'C', 'D', 'A', 'B', 'C', 'B', 'A', 'C', 'B', 'D', 'A', 'A', 'B', 'B', 'D', 'A', 'C']
  let score = 0
  let numQuestions = 20
  //var for the questions
  let q1 = document.forms['trivia']['question0'].value
  let q2 = document.forms['trivia']['question1'].value
  let q3 = document.forms['trivia']['question2'].value
  let q4 = document.forms['trivia']['question3'].value
  let q5 = document.forms['trivia']['question4'].value
  let q6 = document.forms['trivia']['question5'].value
  let q7 = document.forms['trivia']['question6'].value
  let q8 = document.forms['trivia']['question7'].value
  let q9 = document.forms['trivia']['question8'].value
  let q10 = document.forms['trivia']['question9'].value
  let q11 = document.forms['trivia']['question10'].value
  let q12 = document.forms['trivia']['question11'].value
  let q13 = document.forms['trivia']['question12'].value
  let q14 = document.forms['trivia']['question13'].value
  let q15 = document.forms['trivia']['question14'].value
  let q16 = document.forms['trivia']['question15'].value
  let q17 = document.forms['trivia']['question16'].value
  let q18 = document.forms['trivia']['question17'].value
  let q19 = document.forms['trivia']['question18'].value
  let q20 = document.forms['trivia']['question19'].value

  for (var i = 0; i <= numQuestions; i++) {
      if(eval('q' + i) === '') {
          alert('Miss this question, you have. More training, you require.')
      }
    }
  for(var i = 0; i <= numQuestions; i++) {
      if(eval('q + 1') === answers) {
          score++
          alert('Impressive, most impressive. That answer is correct.')
      }
  }

var scoreFinal = document.getElementsByClassName('score')
results.innerHTML='<h2>Your Score: ' + score +'</h2>'
return false
}

