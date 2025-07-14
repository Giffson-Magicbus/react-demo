import React from 'react'
import { Context } from '../App';

 const Home = () => {



  return (
   <Context.Consumer>
    {
      (name)=> {
        return <div>{name}</div>
      }
    }
   </Context.Consumer>
  )
}
export default Home;
