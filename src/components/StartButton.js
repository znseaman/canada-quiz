import React, { useRef, useEffect } from 'react'
import Button from '../ui/Button'

import { useStore } from '../context/Provider'

export default function () {
  const { isStarted, start } = useStore()

  const buttonRef = useRef(null)
  useEffect(() => {
    if (!isStarted) buttonRef.current.focus()
  }, [isStarted])

  return (
    <Button data-testid="start"
      ref={buttonRef} onClick={start} primary={'#4f4c4c'} secondary={'#ffc107'} halo={'rgba(235, 196, 117, 1)'}>Start</Button>
  )
}