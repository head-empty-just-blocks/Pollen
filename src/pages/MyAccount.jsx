import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FlowerSettings from './FlowerSettings'
import BeeSettings from './BeeSettings'

const MyAccount = ({isLoggedIn, isFlower}) => {
  return (
    <div>
      <p>MY ACCOUNT</p>
      {isLoggedIn ? (
        <div>
          <div>{isFlower ? <FlowerSettings /> : <BeeSettings />}</div>
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
    orgId: state.user.organizationId,
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
