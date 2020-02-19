import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, RESET } from './types'

function quizReducer(state, { type, payload }) {
  switch (type) {
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: payload
      }
    case SET_ANSWERS:
      return {
        ...state,
        answers: payload
      }
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: payload
      }
    case SET_SHOW_RESULTS:
      return {
        ...state,
        showResults: payload
      }
    case RESET:
      return {
        ...state,
        answers: [],
        currentAnswer: '',
        currentQuestion: 0,
        showResults: false
      }
    default:
      return state
  }
}

export default quizReducer