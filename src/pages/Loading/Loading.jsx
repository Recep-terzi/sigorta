import React from 'react'
import './Loading.Module.css'
import logo from '../../assets/Group 14086.svg'
const Loading = () => {
  return (
    <>
     <div className="loading">
      <img src={logo} alt="" />
      <p>Sigortacılar Dünyası</p>
     <div className="loading-bar">
          <div className="bar"></div>
      </div>
     </div>
    </>
  )
}

export default Loading