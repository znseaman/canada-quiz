import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, RESET, START } from './types'

function quizReducer(state: any, { type, payload }: any) {
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
        showResults: false,
        isStarted: false
      }
    case START:
      return {
        ...state,
        isStarted: true
      }
    default:
      return state
  }
}

export default quizReducer