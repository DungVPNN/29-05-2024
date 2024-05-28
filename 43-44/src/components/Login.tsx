import React from 'react'
import './login.scss'
export default function Login() {
  return (
    <div className='all'>
      <img className='all-img' src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474116JUB/anh-ma-solo-leveling_105308179.jpg" alt="" />
      <div className='login'>
        <h3 className='login-text'>Login</h3>
        <div>E-mail</div>
        <input className='login-email' type="text" placeholder='Email'/>
        <div>Password</div>
        <input className='login-password' type="text" placeholder='Password'/>
        <div><a href="" className='login-forgot'>Forgot password?</a></div>
        <button className='login-login'>Login</button>
        <hr />
        <div className='login-or'>or</div>
        <button  className='login-register'>Register now</button>
      </div>
    </div>
  )
}