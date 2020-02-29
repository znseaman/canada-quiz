import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

import { useStore } from '../context/Provider'

export default function () {
  const { state, next } = useStore()
  const { currentAnswer } = state

  const buttonRef = useRef(null)
  useEffect(() => {
    if (currentAnswer) buttonRef.current.focus()
  }, [currentAnswer])

  return (
    <NextButtonStyled ref={buttonRef} data-testid="next" primary={'#4f4c4c'} secondary={'#ffc107'} halo={'rgba(235, 196, 117, 1)'} currentAnswer={currentAnswer}
      onClick={next}>Next</NextButtonStyled>
  )
}

var NextButtonStyled = styled(Button)`
  visibility: ${props => props.currentAnswer ? 'visible' : 'hidden'}
`