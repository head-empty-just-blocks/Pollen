import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, {useState, useRef, useCallback, useEffect} from 'react'
import MapGL from 'react-map-gl'
import {connect} from 'react-redux'
import Geocoder from 'react-map-gl-geocoder'
import {Pin} from './Pin.jsx'
import {fetchOrgs} from '../store/allOrgs'
import '../../secrets'
import Loading from './Loading'
import CssBaseline from '@material-ui/core/CssBaseline'

const Map = (props) => {
  useEffect(() => {
    props.fetchOrgs()
  }, [])
  console.log(props)
  const [viewport, setViewport] = useState({
    latitude: 40.71236,
    longitude: -73.967989,
    zoom: 12,
  })
  const mapRef = useRef()
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  )

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = {transitionDuration: 1000}

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      })
    },
    [handleViewportChange]
  )

  const [currentPin, setCurrentPin] = useState(null)

  const clickPin = (id) => {
    setCurrentPin(id)
  }
  if (!props.orgs) {
    return <Loading />
  }
  return (
    <div style={{height: '100vh', paddingTop: '6em'}}>
      <CssBaseline />
      <MapGL
        getCursor={() => 'url("assets/cursor.cur"), auto'}
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      >
        <Geocoder
          className="nex-input"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
          position="top-left"
        />

        {!!props.orgs &&
          props.orgs.map((org) => (
            <Pin
              org={org}
              key={org.id}
              clickPin={clickPin}
              setCurrentPin={setCurrentPin}
              currentPin={currentPin}
            />
          ))}
      </MapGL>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orgs: state.allOrgs,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrgs: () => dispatch(fetchOrgs()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
