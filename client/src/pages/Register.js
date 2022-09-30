import React from 'react'

const Register = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
  return (
    <div>
      <div className='btns'>
        <div className='header'>
          <a href='' className='link'>
            Login as Student
          </a>
          <a href='' className='link'>
            Login as Teacher
          </a>
        </div>
        <button type='button' className='btn' onClick={google}>
          <span>{/* <FcGoogle /> */}</span>
          Register using google
        </button>
      </div>
    </div>
  )
}

export default Register
