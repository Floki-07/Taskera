import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>

          <Route path='/' element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>

        </Routes>
      </div>
    </Router>
  )
}

export default App
