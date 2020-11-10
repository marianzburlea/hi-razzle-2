import React, { useReducer } from 'react'

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'add':
      return state + 1
    case 'take':
      return state - 1
    default:
      return state
  }
}
export const Contact = () => {
  const [state, dispatch] = useReducer(reducer, 2)

  const increase = () =>{
    dispatch({
      type: 'add'
    })
  }

  const decrease = () =>{
    dispatch({
      type: 'take'
    })
  }
  return (
    <div>
      <div>Contact</div>
      <div>Current count: {state}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}
