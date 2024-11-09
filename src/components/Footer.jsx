import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
  const name = useContext(DataContext)
  return (
    <div>
        <h1>Footer {name.city}</h1>
    </div>
  )
}

export default Footer