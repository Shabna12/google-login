import React, { useEffect, useState } from 'react'
import './displaystyle.css'
import { useNavigate } from 'react-router-dom'
import { useDisplay } from './useDisplay'
import { auth, provider } from '../GoogleAuth/Config'
import {signInWithPopup} from 'firebase/auth'


const Display = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useDisplay();

    const handleSignIn = (event) => {
        event.preventDefault()
        if (email && password) {
            navigate('/home')
        } else {
            alert('Please fill the Fields !!')
        }
    }

    const [value, setValue] = useState("")

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate('/home')
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [])


  return (
    <>
      <div className="container" id='container'>
         <div className="form-container sign-up">
             <form onSubmit={handleSignIn}>
                 <h1>Create Account</h1>
                 <div className="social-icons">
                     <a href="#" onClick={handleClick} className='icon'> <i className='fa-brands fa-google-plus-g'></i> </a>
                     <a href="#" className='icon'> <i className='fa-brands fa-facebook-f'></i> </a>
                     <a href="#" className='icon'> <i className='fa-brands fa-github'></i> </a>
                     <a href="#"  className='icon'> <i className='fa-brands fa-linkedin-in'></i> </a>
                 </div>
                 <span>or use your email for registration</span>
                 <input type="text" placeholder='Name' required/>
                 <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                 <button type='submit'>Sign Up</button>
             </form>
         </div>
         <div className="form-container sign-in">
             <form onSubmit={handleSignIn}>
                 <h1>Sign In</h1>
                 <div className="social-icons">
                     <a href="#" onClick={handleClick} className='icon'> <i className='fa-brands fa-google-plus-g'></i> </a>
                     <a href="#" className='icon'> <i className='fa-brands fa-facebook-f'></i> </a>
                     <a href="#" className='icon'> <i className='fa-brands fa-github'></i> </a>
                     <a href="#" className='icon'> <i className='fa-brands fa-linkedin-in'></i> </a>
                 </div>
                 <span>or use your email password</span>
                 <input type="email" placeholder='Email' value={email}
                 onChange={(e) => setEmail(e.target.value)} />
                 <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                 <a href="#">Forgot Your Password?</a>
                 <button type='submit'>Sign In</button>
             </form>
         </div>
         <div className="toggle-container">
             <div className="toggle">
                 <div className="toggle-panel toggle-left">
                     <h1>Welcome Back</h1>
                     <p>Enter your Personal Details to use all of site features</p>
                     <button className="hidden" id='login'>Sign In</button>
                 </div>
                 <div className="toggle-panel toggle-right">
                     <h1>Hello, Buddy</h1>
                     <p>Register with your Personal Details to use all of site features</p>
                     <button className="hidden" id='register'>Sign Up</button>
                 </div>
              </div>
          </div>
      </div>    
    </>
  )
}

export default Display