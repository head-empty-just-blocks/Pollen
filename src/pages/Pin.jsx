//import Geocoder from 'react-map-gl-geocoder'
import React from 'react'
import {Marker} from 'react-map-gl'
import {Link} from 'react-router-dom'

export const Pin = (props) => {
  const {org} = props
  let latitude = Number(org.latitude)
  let longitude = Number(org.longitude)

  console.log(latitude, longitude)

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      captureClick={false}
      draggable={false}
    >
      <Link to={`/map/${org.id}`}>
        <div className="pin">
          <img src="/assets/flowerPin.png" alt="flower pin" />
        </div>
      </Link>
    </Marker>
  )
}
