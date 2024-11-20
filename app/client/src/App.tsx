import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import NavBar from './components/navbar/NavBar'
import SignUp from './pages/SignUp'
import SideBar from './components/sideBar/SideBar'
import Tasks from './pages/Tasks'
import Error from './pages/Error'

function App() {

  return (
    <div className='bg-[--ternary] h-screen text-[--primary]'>
      <Router>
        <NavBar/>
      <div className='flex h-[calc(100%-60px)]'>
        <SideBar/>
        <Routes>

          <Route path='/' element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/error' element={<Error/>}></Route>

          <Route path='/tasks' element={<Tasks/>}></Route>

        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
