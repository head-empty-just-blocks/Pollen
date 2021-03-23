import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, {useState, useRef, useCallback} from 'react'
import {render} from 'react-dom'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiY2FtaXR0YSIsImEiOiJja21jZzJ0djYyYjJlMndxbHo3NDZxNWV0In0.WdWyCx5Wl-_RPrXjnnQ5Ww'

const Map = () => {
	const [viewport, setViewport] = useState({
		latitude: 37.7577,
		longitude: -122.4376,
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
			</MapGL>
		</div>
	)
}

render(<Map />, document.getElementById('root'))

export default Map
