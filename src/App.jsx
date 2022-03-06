import React, { useState } from 'react'
import './App.scss';
import img from './Assets/img/success.png'
function App() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [successMsg, setSuccessMsg] = useState('');

  const handleEmailChange = (e) => {
    setSuccessMsg('')
    setEmailError('')
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setSuccessMsg('')
    setPasswordError('')
    setPassword(e.target.value)
  }

  const hanldeFormSubmit = (e) => {
    e.preventDefault();

    // checking if email empty
    if (email !== '') {
      // check some other condition
    }
    else {
      setEmailError('Email required')
    }

    // chacking if password is empty
    if (password !== '') {
      // do something here
      const emailRegax = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailRegax.test(email)) {
        setEmailError('');
        if (email === 'admin@demo.com') {

          if (password === 'demo') {
            setSuccessMsg(true);
            console.log(successMsg);
          }
          else {
            setPasswordError('Password does not match with our database');
          }
        }
        else {
          setEmailError('Email does not match with our database');
        }
      }
      else {
        setEmailError('Invalid Email')
      }
    }
    else {
      setPasswordError('Password Required');
    }
  }

  if (successMsg) {
    return (
      <div className="App">
        <img src={img} className="succss-msg" />

      </div>
    )
  }

  return (
    <div className="App">

      {/* {successMsg&&<div className='success-msg'>{successMsg}</div>} */}

      <form className='form' onSubmit={hanldeFormSubmit}>

        <h3 className='form__title'>React Login Form Validation</h3>



        <label>Email:</label>
        <input className='form__email' onChange={handleEmailChange} value={email} type="text" placeholder='Enter your email address...' />
        {emailError && <div className='error-msg'>{emailError}</div>}

        <label>Passsword:</label>
        <input className='form__password' onChange={handlePasswordChange} value={password} type="password" placeholder='Enter your password...' />
        {passwordError && <div className='error-msg'>{passwordError}</div>}

        <button className='form__submit' type="submit">LOGIN</button>
      </form>

    </div>
  );

}

export default App;