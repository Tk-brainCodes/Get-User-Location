import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'

const MapComp = () => {
  const [center] = useState({
    lat: 6.5243793,
    lng: 3.3792057
  })
  const [zoom] = useState(11)
  const [location, setLocation] = useState(center)
  const [position, setPosition] = useState(center)

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setLocation((prevState, props) => {
          let newState = { ...prevState }
          newState.center = location
          newState.location = location
          return newState
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
      console.log('there is a problem')
    }
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
        >
          <Marker lat={position.lat} lng={position.lng} text='Point' />
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default MapComp
