import React from 'react'
import LoginFormInner from './LoginFormInner'

function LoginForm() {
  return (
    <div className='Container'>
        <h3 className='text-center'>Welcome</h3>
        <p className='text-center'>Sign in to your account</p>
        <LoginFormInner/>
        </div>
  )
}

export default LoginForm