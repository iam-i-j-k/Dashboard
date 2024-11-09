import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <>
    Main Hoon Example {props.name}
    <Ex2 user={props.name}/>
    </>
  )
}

export default Ex