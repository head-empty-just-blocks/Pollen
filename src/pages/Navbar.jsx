import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import PropTypes from 'prop-types'

const Navbar = ({handleClick, isLoggedIn, isFlower}) => {
  return (
    <nav className="nav-container">
      <div id="logo">
        <img className="sprite" src="/assets/Sprout.png" />
        <h1>
          <Link to="/">Pollen</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/map">The Garden</Link>
        </li>
        {isLoggedIn ? (
          <div id="nav-me">
            <li>
              {isFlower ? (
                <img className="sprite" src="/assets/Flower.png" />
              ) : (
                <img className="sprite" src="/assets/Bee.png" />
              )}
              <Link to="/account">Me</Link>
            </li>
            <li>
              <Link to="/" onClick={handleClick}>
                Log Out
              </Link>
            </li>
          </div>
        ) : (
          <div id="authnav">
            <li>
              <a href="/auth/google">Login</a>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    isFlower: state.user.isFlower,
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
  isFlower: PropTypes.bool.isRequired,
}
