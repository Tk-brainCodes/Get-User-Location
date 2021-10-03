import React, { lazy, Suspense } from 'react'
import './App.css'
import Spinner from 'react-bootstrap/Spinner'
require('dotenv').config()
const MapComp = lazy(() => import('./Components/Mapcomponent/MapComp'))

function App () {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        }
      >
        <MapComp />
      </Suspense>
    </div>
  )
}

export default App
