import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
 <>
    <div>Header</div>
    <button onClick={()=>navigate('/')}>home</button>
       <button onClick={()=>navigate('/about')}>about</button>
          <button onClick={()=>navigate('/contact')}>contact</button>
          <Link to={'/about'}>about</Link>
 </>
  
  )
}

export default Header