import React from 'react'

const AnyReactComponent = ({ text }) => {
  return (
    <div
      style={{
        width: '50px',
        height: 'auto !important',
        background: 'red',
        padding: '10px',
        color: 'white',
        display: 'flex',
        alignItemns : 'center',
        justifyContent: 'center'
      }}
    >
      {text}
    </div>
  )
}
export default AnyReactComponent
