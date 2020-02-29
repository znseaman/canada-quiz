import React from 'react'
import Button from '../ui/Button'

import { useStore } from '../context/Provider'

export default function () {
  const { start } = useStore()

  return (
    <Button data-testid="start"
      onClick={start} primary={'#4f4c4c'} secondary={'#ffc107'} halo={'rgba(235, 196, 117, 1)'}>Start</Button>
  )
}