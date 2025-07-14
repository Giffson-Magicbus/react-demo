import React, { useContext } from 'react'
import {Context} from '../App'
const Contact = () => {

  const name = useContext(Context)

  return (
    <div>Contact {name}</div>
  )
}

export default Contact