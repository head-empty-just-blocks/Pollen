import React from 'react'
import {connect} from 'react-redux'
import {login} from '../store'
import Button from '@material-ui/core/Button'
import google from '../../public/assets/google.png'

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const Login = (props) => {
  const {name} = props
  console.log('props', props)
  if (name === 'login') {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className="googleButton">
          <Button href="/auth/google" style={{padding: '0'}}>
            <img src={google} alt="google" style={{maxHeight: '40px'}} />
          </Button>
        </div>
      </Container>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login(email, password))
    },
  }
}

export default connect(mapLogin, mapDispatch)(Login)
