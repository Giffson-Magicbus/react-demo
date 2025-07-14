import React, { useContext } from 'react'
import {value} from '../App'
const Nested = () => {
    const user = useContext(value)
    console.log(user)
  return (
 <div>
      <div>Nested</div>


 </div>
  )
}

export default Nested