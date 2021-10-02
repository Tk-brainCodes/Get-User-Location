import React from 'react'
import MapIcon from './icon.svg'

const AnyReactComponent = () => {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        padding: '10px',
        color: 'white',
        display: 'flex',
        alignItemns: 'center',
        justifyContent: 'center'
      }}
    >
      <img src={MapIcon} alt='marker location icon' />
    </div>
  )
}
export default AnyReactComponent
