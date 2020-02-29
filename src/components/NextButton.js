import React from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

import { useStore } from '../context/Provider'

export default function () {
  const { state, next } = useStore()
  const { currentAnswer } = state

  return (
    <NextButtonStyled data-testid="next" currentAnswer={currentAnswer}
      onClick={next}>Next</NextButtonStyled>
  )
}

var NextButtonStyled = styled(Button)`
  visibility: ${props => props.currentAnswer ? 'visible' : 'hidden'}
`