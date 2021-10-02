import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'

const MapComp = () => {
  const [zoom] = useState(10)
  const [zoomin, setZoomIn] = useState(11)
  const [location, setLocation] = useState({})
  const [position, setPosition] = useState({})

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setLocation({
          lat: location.lat,
          lng: location.lng
        })
      })
    }
  })

  const getUserPosition = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        const coords = position.coords
        setPosition({
          lat: coords.latitude,
          lng: coords.longitude
        })
      })
    } else {
      console.log('something went wrong')
    }
    setZoomIn(20)
  }

  return (
    <div>
      {/*Use bootstrap for styling*/}
      <button onClick={getUserPosition}>Find me</button>
      <div style={{ width: '100%', height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoom}
          center={location}
          zoom={zoomin}
        >
          {/*Card to display location information*/}
          <Marker lat={position.lat} lng={position.lng} text="marker" />
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default MapComp
