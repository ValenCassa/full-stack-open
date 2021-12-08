import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Table = ({good, neutral, bad, all, average, positive}) => {
  return (
    <table>
      <tr>
        <th>Good</th>
        <td>{good}</td>
      </tr>
      <tr>
        <th>Neutral</th>
        <td>{neutral}</td>
      </tr>
      <tr>
        <th>Bad</th>
        <td>{bad}</td>
      </tr>
      <tr>
        <th>All</th>
        <td>{all}</td>
      </tr>
      <tr>
        <th>Average</th>
        <td>{average}</td>
      </tr>
      <tr>
        <th>positive</th>
        <td>{positive}</td>
      </tr>
    </table>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  return(
  <>
  <h2>Statistics</h2>
  <Table good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
  </>
    )
}

const Feedback = ({handleGood, handleNeutral, handleBad}) => {
  return(
  <div>
  <h1>Give Feedback</h1>
  <button onClick={handleGood}>Good</button>
  <button onClick={handleNeutral}>Neutral</button>
  <button onClick={handleBad}>Bad</button>
  </div>
  )
}

const App = () => {
  
  // save clicks of each button to its own state
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  })

  
  const handleGood = () => {
    setStats({...stats, good: stats.good + 1, all: stats.all + 1})
  }

  const handleNeutral = () => {
    setStats({...stats, neutral: stats.neutral + 1, all: stats.all + 1})
  }

  const handleBad = () => {
    setStats({...stats, bad: stats.bad + 1, all: stats.all + 1})

  }
  if (stats.all === 0) {
    return (

      <div>
        <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
        <p>No feedback given</p>
      </div>

    )
  }else {

  return (
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
      <Statistics good={stats.good} neutral={stats.neutral} bad={stats.bad} all={stats.all} average={(stats.good - stats.bad)/stats.all} positive={stats.good / stats.all}/>

    </div>
  )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
