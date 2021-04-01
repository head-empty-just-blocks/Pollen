import React from 'react'
import {Link} from 'react-router-dom'

const FlowerSettings = () => {
  return (
    <div>
      <img className="sprite" src="/assets/flower.png" />
      <Link to={'/projects/create'}>
        <button>CREATE NEW PROJECT</button>
      </Link>
    </div>
  )
}

export default FlowerSettings
