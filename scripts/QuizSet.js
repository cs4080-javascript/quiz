class QuizSet {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.cards = [];
  }

  add(term, definition) {
    this.cards.push({
      term,
      definition
    });
  }

}

export default QuizSet;