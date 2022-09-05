var questions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomQuestionSelector(questions){ //selects a random number, which corresponds to a specific question
    var questionNumber = questions[Math.floor(Math.random() * questions.length)];
    if(questions.length > 1){
        questions.splice(questions.indexOf(questionNumber), 1);
    }
    return questionNumber;
}

function getQuestionAndOptions(){
    var selectedQuestion = randomQuestionSelector(questions);
    var options = getChoices(selectedQuestion);


}

function questionValue(question){ //get the question
    switch (selectedQuestion) {
        case 0:
            return "What's the true name of The Rock?"
        case 1:
            return "What's the tallest building in the World?"
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            
            break;
        case 8:
            
            break;
        case 9:
            
            break;    
        default:
            break;
    }
}

function getChoices(question){ //get the four choices

}