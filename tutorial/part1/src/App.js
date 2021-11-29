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
  const [clicks,setClicks] = useState({
    left :0,right:0
  })

/* const handleLeftClick = () => {
    const newClicks = {
      left : clicks.left + 1,
      right : clicks.right
    }
    setClicks(newClicks)
  }*/

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
  }

  
/* const handleRightClick = () => {
    const newClicks = {
      left : clicks.left,
      right : clicks.right + 1
    }

    setClicks(newClicks)
  }*/
  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
  }

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
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