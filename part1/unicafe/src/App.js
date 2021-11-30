import { useState } from 'react';

const Button = ({onClick,text}) => {
  return (
  <button onClick={onClick}>{text}</button>
  )
}

const Stats = ({good,neutral,bad}) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

function App() {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] =useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
