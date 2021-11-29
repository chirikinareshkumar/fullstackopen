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

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history : {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [clicks,setClicks] = useState({
    left :0,right:0
  })
  const [allClicks,setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  return(
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  )
}

const App4 = () => {
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}

const App3 = () => {
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