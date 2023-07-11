class Question {
  constructor(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }

  getText() {
    return this.text;
  }
  getOptions() {
    return this.options;
  }
  getAnswer() {
    return this.answer;
  }
  checkAnswer(selectedAnswer) {
    return (this.answer = selectedAnswer);
  }
}
