import React from 'react'
import Button from '../ui/Button'

import { useStore } from '../context/Provider'

export default function () {
  const { start } = useStore()

  return (
    <Button data-testid="start"
      onClick={start}>Start</Button>
  )
}