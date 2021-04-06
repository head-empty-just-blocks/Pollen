import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const BeeSettings = ({user}) => {
  return (
    <div className="settings">
      <img className="sprite" src="/assets/Bee.png" />
      <div>Bee Account</div>
      <Link to={'/orgs/create'}>
        <button>ADD FLOWER TO GARDEN</button>
      </Link>
      <div>Hello, {user.firstName}</div>
      <div>You have ${user.pollen} to donate</div>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user,
})

export default connect(mapState)(BeeSettings)
