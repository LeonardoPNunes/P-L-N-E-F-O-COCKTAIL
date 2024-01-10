import React from 'react'

const Loading = () => {
  return (
    <>
      <div style={{ background: 'rgba(255, 255, 255, 0.4)', position: 'fixed', shapeRendering: 'auto', zIndex: '99', height: '100%', width: '100vw' }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: '50%', left: 'calc(50%)', transform: 'translate(-50%, -50%)' }} width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="27" stroke-width="5" stroke="#66cc33" stroke-dasharray="42.411500823462205 42.411500823462205" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.0309278350515465s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
          </circle>
        </svg>
      </div>
    </>
  )
}

export default Loading