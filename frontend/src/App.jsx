import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Start from './pages/Start'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './CaptainRiding'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={
          <UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/user/logout' element={
          <UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captainRiding' element={<CaptainRiding />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captainLogin' element={<CaptainLogin />} />
        <Route path='/captainSignup' element={<CaptainSignUp />} />
        <Route path='/captainHome' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
