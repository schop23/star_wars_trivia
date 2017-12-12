//accessing the div that is the playing area for trivia
let playingArea = $(".playingArea")
//make an array for what the player picks
let selectedAnswer = []
//how to keep track of what the question number the player is on
let questionNumber = 0
// making up the questions
function () {
    let questions = [{
        question: "What was Anakin Skywalker’s mother’s name?",
        options: ["Alura", "Shmi", "Beru", "Hera"],
        rightAnswer: "Shmi"
    }, {
        question: "Who kills Jabba the Hutt?",
        options: ["Leia Organa", "C-3PO", "Han Solo", "Luke Skywalker"],
        rightAnswer: "Leia Organa"
    }, {
        question: "What are the odds of successfully navigating an asteroid field according to C-3PO?",
        options: ["673 to 1", "4828 to 1", "743 to 1", "3720 to 1"],
        rightAnswer: "3720 to 1"
    }, {
        question: "Who is the Jedi that initiated the creation of the Clone Army?",
        options: ["Count Dooku", "Qui-Gon Jinn", "Sifo-Dyas", "Ki-Adi-Mundi"],
        rightAnswer: "Sifo-Dyas"
    }, {
        question: "How many of the films does Palpatine appear in?",
        options: ["2", "6", "4", "5"],
        rightAnswer: "5"
    }, {
        question: "The Force Awakens is set how many years after Return of the Jedi?",
        options: ["30", "25", "17", "40"],
        rightAnswer: "30"
    }, {
        question: "Who was the first owner, based on the films, of the Millennium Falcon?",
        options: ["Chewbacca", "Lando Calrissian", "Han Solo", "Jabba the Hutt"],
        rightAnswer: "Lando Calrissian"
    }, {
        question: "Who did Luke seek out on Dagobah for training?",
        options: ["Obi-Wan Kenobi", "Han Solo", "Yoda", "Mace Windu"],
        rightAnswer: "Yoda"
    }, {
        question: "What planet did Obi-Wan Kenobi go to battle, and ultimately kill, General Grievous?",
        options: ["Naboo", "Utapau", "Mustafar", "Geonosis"],
        rightAnswer: "Utapau"
    }, {
        question: "What was Finn’s First Order Stormtrooper designation number?",
        options: ["FN-2187", "FN-3211", "FN-1138", "FN-1764"],
        rightAnswer: "FN-2187"
    }]
    //bringing up the questions
    nextQuestion();

    //function for the next button
    $(".next").on("click", function(event) {
        event.preventDefault()
        //stops click event if the questions is still fading
        if(playingArea.is(":animated")) {
            return false;
        }
        //the player makes a guess
    playerGuess();
    nextQuestion();
    })
    //putting the questions and answers on the page
    function questionElement(index) {
        let quesEl = $("<div>", {
            id: "question"
        })
    
        let question = $("<h3>"(index + 1) + ": ").append(questions[index].question)
        quesEl.append(question)

        let radioButtons = createRadioButtons(index)
        quesEl.append(radioButtons)

        return quesEl
    }
    //set up the radio buttons with the players answer options instead of doing ol and li in html
    function createRadioButtons(index) {
        let radioList = $("<ul>")
        let item
        let input = ""
        for (var i = 0; i < questions[index].options.length; i++) {
            item = $("<li>")
            input = "<input type='radio' name='answer' value=" + i + " />"
            item.append(input)
            radioList.append(item)
        }
        return radioList
    }
    
    
}
// fade effects animation, click events, organization based on: Gary Carino https://codepen.io/gcarino/pen/LDgtn?editors=0010#0 
