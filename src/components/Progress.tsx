import React from 'react'

const Progress: React.FC<{current: any, total: any}> = ({ current, total }) => (
  <h2>Question {current} of {total}</h2>
)

export default Progress
