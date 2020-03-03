import React, { useRef, useEffect } from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import Results from './components/Results'
import { useStore } from './context/Provider'
import NextButton from './components/NextButton'
import StartButton from './components/StartButton'

function App() {
  const { state } = useStore()
  const { currentQuestion, showResults, questions, isStarted } = state

  const containerRef = useRef(null)
  useEffect(() => {
    containerRef.current.focus()
  }, [currentQuestion])

  return (
    <div className="container" tabIndex={"0"} ref={containerRef}>
      {
        !isStarted ?
          <>
            <h1>Canadian Citizenship Quiz</h1>
            <StartButton />
          </>
          :
          showResults ?
            <Results />
            :
            <>
              <Progress total={questions.length} current={currentQuestion + 1}></Progress>
              <Question question={questions[currentQuestion].question}></Question>
              <Answers />
              <NextButton />
            </>
      }
    </div>
  )
}

export default App
