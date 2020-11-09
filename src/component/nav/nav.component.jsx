import { Link } from 'react-router-dom'
import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
