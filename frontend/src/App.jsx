import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

function App() {
  

  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<UserLogin />}/>
      <Route path='/signup' element={<UserSignUp/>}/>
      <Route path='/captainLogin' element={<CaptainLogin />}/>
      <Route path='/captainSignup' element={<CaptainSignUp />}/>
     </Routes>
    </div>
  )
}

export default App
