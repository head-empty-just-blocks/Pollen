import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const MyAccount = ({isLoggedIn, isFlower}) => {
  return (
    <div>
      <p>MY ACCOUNT</p>
      {isLoggedIn ? (
        <div>
          <div>
            {isFlower ? (
              <img className="sprite" src="/assets/flower.png" />
            ) : (
              <img className="sprite" src="/assets/Bee.png" />
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>Why didn't you log in :[</p>
        </div>
      )}
    </div>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    isFlower: state.user.isFlower,
  }
}

/**
 * PROP TYPES
 */

MyAccount.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isFlower: PropTypes.bool.isRequired,
}

export default connect(mapState)(MyAccount)
