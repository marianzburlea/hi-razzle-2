import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../home'
import { Contact } from '../contact'
import { Nav } from '../nav'

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Nav />
      <Router>
        <Home path="/" />
        <Contact path="/contact" />
      </Router>
    </div>
  )
}
