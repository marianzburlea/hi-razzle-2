import React, { useContext } from 'react'
import { AppContext, AppState } from '../app/app.context'

export const Home = () => {
  const { state, dispatch } = AppState()
  // const a = useContext(AppContext)
  console.log(state, dispatch)
  return (
    <div>
      <h1>Home</h1>
      {/* <div>{state.title}</div> */}
    </div>
  )
}
