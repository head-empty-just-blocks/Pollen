import React, {useState} from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {auth} from '../store/user'

export const Login = ({auth}) => {
  const {value: email, bind: bindEmail} = useInput('')
  const {value: password, bind: bindPassword} = useInput('')
  const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.length || !password.length) {
      setWarning('This is a required field!')
    } else {
      let method = 'login'
      auth({email, password}, method)
    }
  }

  return (
    <div className="auth-container">
      <h1 className="form-title">Enter your info to login!</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" value={email} {...bindEmail} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            {...bindPassword}
          />
        </div>
        <div className="warning input-container">{warning}</div>
        <button type="submit">LOG IN</button>
      </form>
      <a className="oauth" href="/auth/google">
        <button>Login with Google</button>
      </a>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  auth: (user, method) => dispatch(auth(user, method)),
})

export default connect(null, mapDispatch)(Login)
