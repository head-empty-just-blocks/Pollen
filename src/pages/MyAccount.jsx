import React from 'react'
import {connect} from 'react-redux'
//import {postNewOrg} from '../store/singleOrg'

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

// MyAccount.propTypes = {
// handleClick: PropTypes.func.isRequired,
// isLoggedIn: PropTypes.bool.isRequired,
// }

export default connect(mapState)(MyAccount)
