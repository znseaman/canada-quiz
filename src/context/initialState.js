import questions from '../data/rawQuestions'

const initialState = {
  questions,
  currentQuestion: 0,
  currentAnswer: '',
  answers: [],
  showResults: false
}

export default initialState;