import React from 'react'
import {useInput} from './OrgSettings/hooks'
// import {connect} from 'react-redux'
//import {} from '../store/..'

export const SignUp = ({history}) => {
  const {value: name, bind: bindName} = useInput('')
  const {value: email, bind: bindEmail} = useInput('')
  const {value: password, bind: bindPassword} = useInput('')
  const {value: confirmPassword, bind: bindConfirmPassword} = useInput('')
  //   const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // postNewOrg({name, email, password})
    history.push('/account')
  }

  return (
    <div>
      <h1 className="form-title">Join the Garden!</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Name</label>
          <input required name="name" value={name} {...bindName} />
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
        {/* <div className="warning input-container">{warning}</div> */}
        <button type="submit">SIGN UP</button>
        <a href="/auth/google">
          <button>Sign Up With Google</button>
        </a>
      </form>
    </div>
  )
}

// const mapState = (state) => ({
//   user: state.user,
// })

// const mapDispatch = (dispatch) => ({
//   postNewOrg: (org) => dispatch(postNewOrg(org)),
// })

// export default connect(mapState, mapDispatch)(SignUp)
