import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '\'Press Start 2P\', cursive',
    flexDirection: 'row',
    backgroundColor: '#98bf64',
    width: '100%',
    display: 'flex',
  },
  navContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  link: {
    paddingLeft: '1.25em',
    fontFamily: '\'Press Start 2P\', cursive',
    '&:hover': {
      color: theme.palette.secondary.contrastText,
      textDecoration: 'none',
    },
  },
  pollen: {
    fontSize: '1.66em',
    lineHeight: '1em',
    fontFamily: '\'Press Start 2P\', cursive',
    '&:hover': {
      color: theme.palette.secondary.contrastText,
      textDecoration: 'none',
    },
  },
}))

const Navbar = ({handleClick, isLoggedIn, isFlower}) => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth={false}>
      <div className={classes.navContent}>
        <div className={classes.left}>
          <img className="sprite" src="/assets/Sprout.png" />
          <Link to="/" className={classes.link}>
            <Typography color="textSecondary" className={classes.pollen}>
              {'Pollen'}
            </Typography>
          </Link>
        </div>

        <div className={classes.right}>
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
              <Link to="/login" className={classes.link} color="textSecondary">
                <Typography color="textSecondary" className={classes.link}>
                  {'Log In'}
                </Typography>
              </Link>

              <Link to="/signup" className={classes.link} color="textSecondary">
                <Typography color="textSecondary" className={classes.link}>
                  Sign Up
                </Typography>
              </Link>
            </div>
          )}
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
