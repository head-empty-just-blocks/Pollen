import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import PropTypes from 'prop-types'
import Login from './Login'

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <div className="nav-container">
      <h1>
        <Link to="/">Pollen</Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/map">The Garden</Link>
        </li>
        {isLoggedIn ? (
          <div>
            <li>
              <Link to="/account">Me</Link>
            </li>
            <li>
              <Link to="#" onClick={handleClick}>
                Log Out
              </Link>
            </li>
          </div>
        ) : (
          <li>
            <Login />
          </li>
        )}
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
