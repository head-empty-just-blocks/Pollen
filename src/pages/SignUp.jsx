import React, {useState} from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {auth} from '../store/user'

export const SignUp = ({history}) => {
  const {value: firstName, bind: bindFirstName} = useInput('')
  const {value: lastName, bind: bindLastName} = useInput('')
  const {value: email, bind: bindEmail} = useInput('')
  const {value: password, bind: bindPassword} = useInput('')
  const {value: confirmPassword, bind: bindConfirmPassword} = useInput('')
  const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (password.length < 4 || password.length > 20) {
      setWarning('Passwords must be between 4-20 characters')
    } else if (password !== confirmPassword) {
      setWarning('Passwords must match!')
    } else {
      let method = 'signup'
      auth({firstName, lastName, email, password}, method)
      history.push('/account')
    }
  }

  return (
    <div>
      <h1 className="form-title">Join the Garden!</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>First Name</label>
          <input
            required
            name="first-name"
            value={firstName}
            {...bindFirstName}
          />
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input required name="last-name" value={lastName} {...bindLastName} />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" value={email} {...bindEmail} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <textarea name="password" value={password} {...bindPassword} />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            {...bindConfirmPassword}
          />
        </div>
        <div className="warning input-container">{warning}</div>
        <button type="submit">SIGN UP</button>
        <a href="/auth/google">
          <button>Sign Up With Google</button>
        </a>
      </form>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  auth: (user, method) => dispatch(auth(user, method)),
})

export default connect(null, mapDispatch)(SignUp)
