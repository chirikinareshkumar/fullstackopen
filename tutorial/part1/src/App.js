import React, { useState } from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Display = ({counter}) => {
  return (
      <div>{counter}</div>
    )
}

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [counter,setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}

const App2 = () => {
  const name="Peter"
  const age = 15
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Naresh" age={10+20}/>
      <Hello name={name} age={age}/>
      <Hello />
    </div>
  )
}

const App1 = () => {
  const now =  new Date()
  const a = 10
  const b = 20
  
  return (
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <p>
      {a} plus {b} is {a + b}
    </p>
  </div>
  )
}

export default App