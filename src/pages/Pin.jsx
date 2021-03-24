//import Geocoder from 'react-map-gl-geocoder'
import React from 'react'
import {Marker} from 'react-map-gl'

export const Pin = (props) => {
  //const {org} = props
  console.log(props)
  //take address of org, convert to lat/long
  let latitude = 40.7128
  let longitude = -74.006

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
