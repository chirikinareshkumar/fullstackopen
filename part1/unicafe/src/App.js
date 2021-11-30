import { useState } from 'react';

const Button = ({onClick,text}) => {
  return (
  <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  if(text === "positive"){
    return(
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )  
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}
const Statistics = ({good,neutral,bad}) => {
  let all = good + neutral +  bad

  if(all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={(good-bad)/all} />
          <StatisticLine text="positive" value={(good * 100) /all} />
        </tbody>
      </table>
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
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
