import React, { useRef, useEffect, useState } from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import Results from './components/Results'
import { useStore } from './context/Provider'
import NextButton from './components/NextButton'
import StartButton from './components/StartButton'

function App() {
  const { state, setCurrentAnswer } = useStore()
  const { currentQuestion, showResults, questions, isStarted, currentAnswer } = state
  const startInterval = useRef(true)
  const [secondsLeft, setSecondsLeft] = useState(10)

  const containerRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    containerRef.current!.focus()
  }, [currentQuestion])

  // countdown timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isStarted) {
        return false
      }
      if (!startInterval.current) {
        return false
      }
      if (currentAnswer) {
        return false
      }
      if (showResults) {
        return false
      }

      // dispatch an action if time runs out
      if (secondsLeft <= 0) {
        setCurrentAnswer({ target: { value: "Unanswered" } })
        return false
      }

      setSecondsLeft(secondsLeft - 1)
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  }, [currentAnswer, isStarted, secondsLeft, setCurrentAnswer, showResults])

  useEffect(() => {
    if (currentAnswer) setSecondsLeft(10)
    if (showResults) setSecondsLeft(10)
  }, [currentAnswer, showResults])

  const showSeconds = secondsLeft > 0 && !currentAnswer;

  return (
    <div className="container" tabIndex={0} ref={containerRef}>
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
              {showSeconds && <div className="seconds">{secondsLeft}</div>}
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
