import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#98bf64',
    height: '10vh',
    width: '100vw',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5em',
    alignItems: 'flex-end',
  },
  link: {
    fontFamily: '\'Press Start 2P\', cursive',
    paddingLeft: '.5em',
  },
  logo: {
    fontFamily: '\'Press Start 2P\', cursive',
    fontSize: '1em',
  },
  navText: {
    display: 'flex',
    paddingLeft: '1em',
    justifyContent: 'space-between',
    width: '100vw',
  },
}))

const Navbar = ({handleClick, isLoggedIn, isFlower}) => {
  const classes = useStyles()
  return (
    <Container className={classes.navContainer} maxWidth={false}>
      <div className={classes.navText} style={{alignItems: 'center'}}>
        <div style={{alignItems: 'baseline', display: 'flex'}}>
          <img className="sprite" src="/assets/Sprout.png" />
          <h1 color="textSecondary" style={{marginLeft: '1em'}}>
            <Link to="/">
              <Typography color="textSecondary" className={classes.logo}>
                {'Pollen'}
              </Typography>
            </Link>
          </h1>
        </div>
        <div>
          <div className={classes.linkContainer}>
            {isLoggedIn ? (
              <div>
                {isFlower ? (
                  <img className="sprite" src="/assets/Flower.png" />
                ) : (
                  <img className="sprite" src="/assets/Bee.png" />
                )}

                <Link to="/account" className={classes.link}>
                  <Typography color="textSecondary" className={classes.link}>
                    {'Me'}
                  </Typography>
                </Link>

                <Link to="/" className={classes.link} onClick={handleClick}>
                  <Typography color="textSecondary" className={classes.link}>
                    {'Log Out'}
                  </Typography>
                </Link>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link
                  to="/login"
                  className={classes.link}
                  color="textSecondary"
                >
                  <Typography color="textSecondary" className={classes.link}>
                    {'Log In'}
                  </Typography>
                </Link>

                <Link
                  to="/signup"
                  className={classes.link}
                  color="textSecondary"
                >
                  <Typography color="textSecondary" className={classes.link}>
                    Sign Up
                  </Typography>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
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
