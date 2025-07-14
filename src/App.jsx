import React, { createContext } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'

export const Context = createContext();

const App = () => {

  const name = 'Rockson';

  return (
   <Context.Provider value={name}>
     <BrowserRouter>
    <Header />
    <Routes>
      <Route index path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='*' element={<h1>Error page</h1>} />
    </Routes>
    <p>&copy;copyright</p>
    </BrowserRouter>
   </Context.Provider>
  )
}

export default App