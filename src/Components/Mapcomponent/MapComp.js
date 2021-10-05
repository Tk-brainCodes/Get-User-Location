import React, { useEffect, useState, Fragment } from 'react'
import GoogleMapReact from 'google-map-react'
import { Card, ListGroup } from 'react-bootstrap'
import Marker from '../Marker/Marker'
import 'bootstrap/dist/css/bootstrap.min.css'

const MapComp = () => {
  const [zoom] = useState(10)
  const [zoomin, setZoomIn] = useState(11)
  const [location, setLocation] = useState({})
  const [position, setPosition] = useState({})
  const [positionDetails, setPositionDetails] = useState({})

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setPositionDetails(position.coords)
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
  }, [location, positionDetails])

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
    setZoomIn(18)
  }

  return (
    <Fragment>
      <div style={{ width: '100vw', height: '100vh' }}>
        <nav className='navbar' fixed='top'>
          <div className='container-fluid'>
            <span className='navbar-brand mb-0 h1 d-flex align-items-center'>
              <b>
                <h1>
                  <b>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      fill='currentColor'
                      class='bi bi-geo-alt'
                      viewBox='0 0 16 16'
                    >
                      <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
                      <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                    </svg>{' '}
                    Get your location
                  </b>
                </h1>
                <button
                  type='button'
                  className='btn btn-success justify-content-end'
                  onClick={getUserPosition}
                >
                  <b>Find me</b>
                </button>
              </b>
            </span>
          </div>
        </nav>{' '}
        <br />
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoom}
          center={location}
          zoom={zoomin}
        >
          <Marker lat={position.lat} lng={position.lng} />
          <br />
          {/*when clicked show the details*/}
          <Card style={{ width: '18rem' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <b>Location Details</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Latitude {positionDetails.latitude}
              </ListGroup.Item>
              <ListGroup.Item>
                Longitude {positionDetails.longitude}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </GoogleMapReact>
      </div>
    </Fragment>
  )
}
export default MapComp
