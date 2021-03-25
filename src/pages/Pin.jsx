//import Geocoder from 'react-map-gl-geocoder'
import React from 'react'
import {Marker} from 'react-map-gl'

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
      <div className="pin">
        <img src="/assets/flower.png" alt="flower pin" />
      </div>
    </Marker>
  )
}
