// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const countReducer = (state, nextState) => {
    if (typeof nextState === 'function') {
      return nextState(state)
    }

    return {
      ...state,
      count: nextState.count,
    }
  }
  const [state, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to changeCount
  const {count} = state
  const increment = () =>
    setCount(state => ({
      count: state.count + step,
    }))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
