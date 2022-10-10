import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Cart} from '../context/CartContext'

const Nav = () => {
  const {cart} = useContext(Cart)
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart({cart.length})</Link>
    </nav>
  )
}

export default Nav