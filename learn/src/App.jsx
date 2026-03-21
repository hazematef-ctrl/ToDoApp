import React from 'react'
import { LoginPage } from './components/pages/LoginPage'
import { HomePage } from './components/pages/HomePage'
import { RegisterPage } from './components/pages/RegisterPage'
import { ForgetPage } from './components/pages/ForgetPage'
import { Route , Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen w-full font-sans bg-radial-[at_20%_12%] from-white to-zinc-900 to-75%">
        {/* <LoginPage/> */}
        <Routes>
          <Route path='/' element={<LoginPage></LoginPage>}/>
          <Route path='/home' element={<HomePage></HomePage>}/>
          <Route path='/register' element={<RegisterPage></RegisterPage>}/>
          <Route path='/forget' element={<ForgetPage></ForgetPage>}/>


        </Routes>
    </div>
  )
}

export default App
