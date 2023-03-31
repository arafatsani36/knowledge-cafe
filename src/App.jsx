import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/HomeContainer/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>

      <Home></Home>
      
       
       
      
      
    </div>
  )
}

export default App
