import React from 'react'
import {Link} from 'react-router-dom'

const BeeSettings = () => {
  return (
    <div className="settings">
      <img className="sprite" src="/assets/Bee.png" />
      <div>Bee Account</div>
      <Link to={'/orgs/create'}>
        <button>ADD FLOWER TO GARDEN</button>
      </Link>
    </div>
  )
}

export default BeeSettings
