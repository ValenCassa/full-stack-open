import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick}) => {
  return (
    <>
    <button onClick={handleClick}>Next anecdote</button>
    </>
  )
}

const App = (props) => {

  let [selected, setSelected] = useState(0)
  const [point, setPoint] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
  })


  const getRandomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    setSelected(selected = Math.floor(Math.random() * (max - min + 1) + min))
  }
  
  const handlePoint = () => {
    setPoint({...point, [selected]: point[selected] += 1})
  }
  

  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      <Button handleClick={() => getRandomValue(0, anecdotes.length)}/>


      
      <button onClick={() => handlePoint()}>Vote</button>
      <p>Points = {point[selected]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)