import React, { useReducer, useContext } from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import Results from './components/Results'
import QuizContext from './context/QuizContext'

import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, RESET } from './reducers/types'
import quizReducer from './reducers/QuizReducer'
import initialState from './context/initialState'

function App() {
  const { state, dispatch } = useContext(QuizContext);
  // const [state, dispatch] = useReducer(quizReducer, initialState)
  const { currentQuestion, currentAnswer, answers, showResults, questions } = state
  const question = questions[currentQuestion]

  const next = () => {
    if (!currentAnswer) return false
    const answer = { id: question.id, answer: currentAnswer }
    dispatch({ type: SET_ANSWERS, payload: [...answers, answer] })

    dispatch({ type: SET_CURRENT_ANSWER, payload: '' })

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: SET_CURRENT_QUESTION, payload: currentQuestion + 1 })
    } else {
      dispatch({ type: SET_SHOW_RESULTS, payload: true })
    }
  }

  const restart = () => dispatch({ type: RESET })

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <div className="container">
        {
          showResults ?
            <>
              <Results questions={questions} answers={answers} restart={restart} />
            </>
            :
            <>
              <Progress total={questions.length} current={currentQuestion + 1}></Progress>
              <Question question={question.question}></Question>
              <Answers />
              <button data-testid="next" className="btn btn-primary" style={{ visibility: currentAnswer ? 'visible' : 'hidden' }} onClick={next}>Confirm and Continue</button>
            </>
        }
      </div>
    </QuizContext.Provider>
  )
}

export default App
