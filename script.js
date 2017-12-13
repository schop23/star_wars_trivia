// setting up needed variables
var quesNum = 0
var testQues 
var progress 
var question
var option
var optA 
var optB 
var optC
var optD 
var options
var rightAnswer = 0
//typing questions and answers into arrays
var questions = [
    ["What was Anakin Skywalker’s mother’s name?", "Alura", "Shmi", "Beru", "Hera", "B"],
    ["Who kills Jabba the Hutt?", "Leia Organa", "C-3PO", "Han Solo", "Luke Skywalker", "A"],
    ["What are the odds of successfully navigating an asteroid field according to C-3PO?", "673 to 1", "4828 to 1", "743 to 1", "3720 to 1", "D"],
    ["Who is the Jedi that initiated the creation of the Clone Army?", "Count Dooku", "Qui-Gon Jinn", "Sifo-Dyas", "Ki-Adi-Mundi", "C"],
    ["How many of the films does Palpatine appear in?", "2", "6", "4", "5", "D"],
    ["The Force Awakens is set how many years after Return of the Jedi?", "30", "25", "17", "40", "A"],
    ["Who was the first owner, based on the films, of the Millennium Falcon?", "Chewbacca", "Lando Calrissian", "Han Solo", "Jabba the Hutt", "B"],
    ["Who did Luke seek out on Dagobah for training?", "Obi-Wan Kenobi", "Han Solo", "Yoda", "Mace Windu", "C"],
    ["What planet did Obi-Wan Kenobi go to battle, and ultimately kill, General Grievous?", "Naboo", "Utapau", "Mustafar", "Geonosis", "B"],
    ["What was Finn’s First Order Stormtrooper designation number?", "FN-2187", "FN-3211", "FN-1138", "FN-1764", "A"]
]
// function to return element by ID
function elById (x) {
    return document.getElementById(x)
}
//getting the questions to show up on the screen
function askQuestions () {
    testQues = elById('testQues')
    // lets player know what question they are on
    elById("progress").innerHTML = 'Question' + (quesNum + 1) + ' of ' + questions.length
    // getting the questions and options by pulling them out of the arrays
    question = questions[quesNum][0]
    optA = questions[quesNum][1]
    optB = questions[quesNum][2]
    optC = questions[quesNum][3]
    optD = questions[quesNum][4]
    testQues.innerHTML = '<h3>' + question + '</h3>'
    testQues.innerHTML += "<input type='radio' name='options' value='A'> " + optA + '<br>'
    testQues.innerHTML += "<input type='radio' name='options' value='B'> " + optB + '<br>'
    testQues.innerHTML += "<input type='radio' name='options' value='C'> " + optC + '<br>'
    testQues.innerHTML += "<input type='radio' name='options' value='D'> " + optD + '<br><br>'
    testQues.innerHTML += "<button onClick='checkAnswer()'>Submit</button>"
}
