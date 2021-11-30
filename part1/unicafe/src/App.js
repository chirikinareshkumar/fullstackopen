import { useState } from 'react';

const Button = ({onClick,text}) => {
  return (
  <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good,neutral,bad}) => {
  let all = good + neutral +  bad
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all} </p>
      <p>average {(good-bad)/all}</p>
      <p>positive {(good * 100) /all} %</p>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
