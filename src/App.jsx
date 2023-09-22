import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
    // setAll(allClicks.concat('L'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    // setAll(allClicks.concat('L'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    // setAll(allClicks.concat('R'))
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='Good'  />
      <Button onClick={handleNeutralClick} text='Neutral'  />
      <Button onClick={handleBadClick} text='Bad'  />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App





