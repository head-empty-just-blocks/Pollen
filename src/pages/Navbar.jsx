import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Navbar = ({handleClick, isLoggedIn, isFlower}) => {
  return (
    <nav className="nav-container">
      <div id="logo">
        <img className="sprite" src="/assets/Sprout.png" />
        <h1 className="logo-font">
          <Link to="/">Pollen</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Typography>
            <Link to="/map">The Garden</Link>
          </Typography>
        </li>
        {isLoggedIn ? (
          <div className="nav-me">
            <li>
              {isFlower ? (
                <img className="sprite" src="/assets/Flower.png" />
              ) : (
                <img className="sprite" src="/assets/Bee.png" />
              )}
              <Typography>
                <Link to="/account">Me</Link>
              </Typography>
            </li>
            <li>
              <Typography>
                <Link to="/" onClick={handleClick}>
                  Log Out
                </Link>
              </Typography>
            </li>
          </div>
        ) : (
          <div className="nav-me">
            <li>
              <Typography>
                <Link to="/login">Log In</Link>
              </Typography>
            </li>
            <li>
              <Typography>
                <Link to="/signup">Sign Up</Link>
              </Typography>
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
}
