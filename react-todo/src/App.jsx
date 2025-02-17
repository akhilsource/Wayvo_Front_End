import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Components/Button.jsx'
import List from './Components/List.jsx'
import './App.css'
import Signup from './Components/Signup.jsx'
import Login_signup from './Components/Login_signup.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);
 return(
  <>
    <Router>

     <Routes>
     <Route path="/" element={<Login_signup/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/List" element={<List/>}></Route>
     </Routes>
    </Router>
  </>
  )
}

export default App
