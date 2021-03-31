//import Geocoder from 'react-map-gl-geocoder'
import React from 'react'
import {Marker, Popup} from 'react-map-gl'
import {Link} from 'react-router-dom'

export const Pin = (props) => {
  const {org, currentPin, clickPin, setCurrentPin} = props
  let latitude = Number(org.latitude)
  let longitude = Number(org.longitude)

  const closePopUp = () => {
    setCurrentPin(null)
  }

  return (
    <div>
      <Marker
        latitude={latitude}
        longitude={longitude}
        captureClick={false}
        draggable={false}
      >
        <div className="pin">
          <img
            src="/assets/flowerPin.png"
            alt="flower pin"
            onClick={() => clickPin(org.id)}
          />
        </div>
      </Marker>

      {currentPin === org.id && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          onClose={() => closePopUp()}
          closeButton={true}
          closeOnClick={false}
          offsetTop={-30}
        >
          <p>Hello, do you want to see more about {org.name}?</p>
          <Link to={`/map/${org.id}`}>
            <button>CLICK TO EXPLORE</button>
          </Link>
        </Popup>
      )}
    </div>
  )
}
