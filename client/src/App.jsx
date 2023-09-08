import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home"
import Register from "../src/pages/Register"
import Login from "../src/pages/Login"
import Integrate from './pages/Integrate';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/integrate" element={<Integrate/>} />
      </Routes>
    </>
  )
}

export default App
