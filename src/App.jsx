import React from 'react' 
import { Routes, Route } from 'react-router' 
 
 
import Navbar from './components/NavBar' 
import Layout from './components/Layout' 
import MarketPage from './pages/MarketPage' 
import Basket from './pages/BasketPage' 
 
 
const App = () => { 
  return ( 
    <> 
    <Navbar/> 
    <Routes> 
      <Route path='/' element={<Layout/>}> 
        <Route path='/' element={<MarketPage/>} /> 
        <Route path='/basket' element={<Basket/>} /> 
      </Route> 
    </Routes> 
    </> 
  ) 
} 
 
export default App