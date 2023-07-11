var questions = [
  new Question(
    "What is the capital of Portugal?",
    ["Lisbon", "Porto", "Coimbra", "Braga"],
    "A"
  ),
  new Question(
    "What is the largest bone in the human body?",
    ["Femur", "Tibia", "Humerus", "Clavicle"],
    "A"
  ),
  new Question(
    "What is the name of the author of Don Quixote?",
    [
      "Miguel de Cervantes",
      "Gabriel García Márquez",
      "Jorge Luis Borges",
      "Mario Vargas Llosa",
    ],
    "A"
  ),
  new Question(
    "What is the name of the largest ocean in the world?",
    ["Pacific", "Atlantic", "Indian", "Arctic"],
    "A"
  ),
  new Question(
    "What is the name of the official currency of the European Union?",
    ["Euro", "Pound", "Franc", "Mark"],
    "A"
  ),
  new Question(
    "What is the name of the inventor of the electric light bulb?",
    ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
    "A"
  ),
  new Question(
    "What is the name of the largest planet in the solar system?",
    ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "A"
  ),
  new Question(
    "What is the name of the painter who cut off his own ear?",
    ["Vincent van Gogh", "Pablo Picasso", "Salvador Dalí", "Claude Monet"],
    "A"
  ),
  new Question(
    "What is the name of the current queen of the United Kingdom?",
    ["Elizabeth II", "Victoria I", "Mary I", "Anne I"],
    "A"
  ),
  new Question(
    "What is the name of the sport that uses cues and colored balls on a green table?",
    ["Snooker", "Billiards", "Golf", "Hockey"],
    "A"
  ),
];
var score = 0;
var usedQuestions = [];
var index;
var questionCount = 0;

function randomQuestionSelector(questions) {
  //selects a random number, which corresponds to a specific question
  var questionNumber = Math.floor(Math.random() * questions.length);

  while (usedQuestions.includes(questionNumber)) {
    questionNumber = Math.floor(Math.random() * questions.length);
  }

  usedQuestions.push(questionNumber);
  return questionNumber;
}

function setQuestion() {
  //changes the question
  const questionDiv = document.getElementsByClassName("question")[0];
  const firstChoice = document.getElementById("first");
  const secondChoice = document.getElementById("second");
  const thirdChoice = document.getElementById("third");
  const forthChoice = document.getElementById("fourth");

  index = randomQuestionSelector(questions);

  const question = questions[index];
  const questionText = question.getText();
  const choices = question.getOptions();
  const correctAnswer = question.getAnswer();

  questionDiv.textContent = questionText;

  firstChoice.textContent = choices[0];
  secondChoice.textContent = choices[1];
  thirdChoice.textContent = choices[2];
  forthChoice.textContent = choices[3];

  questionCount++;
}

function checkChoice(correctAnswer, selectedAnswer) {
  return correctAnswer == selectedAnswer;
}

function getSelectedAnswer() {
  var buttons = document.getElementsByClassName("choice");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.checked) {
      return button.value;
    }
  }
}

function resetQuiz() {
  score = 0;
  usedQuestions = [];
  questionCount = 0;

  var buttons = document.getElementsByClassName("choice");
  for(var i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.checked = false;
  }
}

document.getElementById("start").addEventListener("click", function () {
  setQuestion();
});

document.getElementById("next").addEventListener("click", function () {
  var selectedAnswer = getSelectedAnswer();
  var question = questions[index];
  if (question.checkAnswer(selectedAnswer)) {
    score++;
  }

  if (questionCount < questions.length) {
    setQuestion();
  } else {
    alert("You finished the quiz! Score: " + score);
  }
});

document.getElementById("start").addEventListener("click", function () {
  resetQuiz();
  setQuestion();
})
