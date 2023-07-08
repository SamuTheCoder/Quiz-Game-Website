var questions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var score = 0;

while(questions.length > 0){
    setQuestion();
}



function randomQuestionSelector(questions){ //selects a random number, which corresponds to a specific question
    var questionNumber = questions[Math.floor(Math.random() * questions.length)];
    questions.splice(questions.indexOf(questionNumber), 1);

    return questionNumber;
}

function getQuestionAndOptions(){
    return questionValue(randomQuestionSelector(questions));
}

function questionValue(question){ //get the question
    switch (selectedQuestion) {
        case 0:
            return ["What's the true name of The Rock?", "Dwayne Johnson", "Eric Bishof", "Dalai Lama", "Barack Obama", "A"];
        case 1:
            return "What's the tallest building in the World?"
        case 2:
            return "blablabla"
        case 3:
            return "blablabla"
        case 4:
            return "blablabla"
        case 5:
            return "blablabla"
        case 6:
            return "blablabla"
        case 7:
            return "blablabla"
        case 8:
            return "blablabla"
        case 9:
            return "blablabla"   
        default:
            break;
    }
}

function setQuestion(){//changes the question
    const questionDiv = document.getElementsByClassName("question");
    const firstChoice = document.getElementById("first");
    const secondChoice = document.getElementById("second");
    const thirdChoice = document.getElementById("third");
    const forthChoice = document.getElementById("forth");

    const aux = getQuestionAndOptions();
    const question = aux[0];
    const choices = aux.splice(0, 1);

    questionDiv.textContent = question;
    
    firstChoice.textContent = choices[0];
    secondChoice.textContent = choices[1];
    thirdChoice.textContent = choices[2];
    forthChoice.textContent = choices[3];

    checkChoice(choices[4]); //choices[4] is the letter that corresponds to the correct option
}

function checkChoice(correctAnswer, selectedAnswer){
    return correctAnswer == selectedAnswer;
}

function getSelectedAnswer(choice){
    do{
        if(choice == 'first') return 'A';
        if(choice == 'second') return 'B';
        if(choice == 'third') return 'C';
        if(choice == 'forth') return 'D';
    }while(choice == null);
}