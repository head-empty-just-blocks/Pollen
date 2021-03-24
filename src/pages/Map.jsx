import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, {useState, useRef, useCallback, useEffect} from 'react'
import MapGL from 'react-map-gl'
import {connect} from 'react-redux'
import Geocoder from 'react-map-gl-geocoder'
import {Pin} from './Pin.jsx'
import {fetchOrgs} from '../store/allOrgs'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiY2FtaXR0YSIsImEiOiJja21jZzJ0djYyYjJlMndxbHo3NDZxNWV0In0.WdWyCx5Wl-_RPrXjnnQ5Ww'

const Map = (props) => {
  useEffect(() => {
    props.fetchOrgs()
  }, [])

  const [viewport, setViewport] = useState({
    latitude: 40.7128,
    longitude: -74.006,
    zoom: 8,
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

  return (
    <div style={{height: '100vh'}}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />

        {props.orgs.length &&
          props.orgs.map((org) => <Pin org={org} key={org.id} />)}
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
