import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './GoogleAuth/Home'
import Display from './setup/Display'



function App() {  
  return (
    <>
     <Routes>
        <Route path='/' element={<Display/>} />
        <Route path='/home' element={<Home/>}  />
        <Route path='/*' element={<Navigate/>} />
     </Routes>
    </>
  )
}

export default App
