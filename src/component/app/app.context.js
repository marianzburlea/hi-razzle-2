import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  loading: false,
  error: '',
  title: 'Testing razzle'
}

export const AppContext = createContext()
const appReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(appReducer, initialState)
  const { state, dispatch } = useReducer(appReducer, initialState)
  console.log(state, dispatch)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const AppState = () => useContext(AppContext)
