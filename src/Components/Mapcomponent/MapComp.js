import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'

const MapComp = () => {
  const [center] = useState({
    lat: 9.072264,
    lng: 7.491302
  })
  const [zoom] = useState(10)

  const [newlocation, setNewLocation] = useState(center)

  const getLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = position.coords
        setNewLocation({
          lat: coords.latitude,
          lng: coords.longitude
        })
      })
    }
  }

  const renderMaker = (map, maps) => {
    let marker = new maps.Marker({
      position: newlocation,
      map,
      title: 'Current Location'
    })
    return marker
  }

  return (
    <div>
      {/*Use bootstrap for styling*/}
      <div style={{ width: '100%', height: '100vh' }}>
        <button onClick={getLocation}>FIND</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDkPntFeeCSS9vwYnRN0G3_lWVLXsNOU2s' }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            renderMaker(map, maps)
          }}
        ></GoogleMapReact>
      </div>
    </div>
  )
}
export default MapComp
