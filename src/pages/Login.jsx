import React from 'react'
import {useInput} from './OrgSettings/hooks'
// import {connect} from 'react-redux'
//import {} from '../store/..'

export const Login = ({history}) => {
  const {value: email, bind: bindEmail} = useInput('')
  const {value: password, bind: bindPassword} = useInput('')
  //   const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    history.push('/account')
  }

  return (
    <div>
      <h1 className="form-title">Enter your info to login!</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" value={email} {...bindEmail} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <textarea name="password" value={password} {...bindPassword} />
        </div>
        <button type="submit">LOG IN</button>
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

// export default connect(mapState, mapDispatch)(Login)
