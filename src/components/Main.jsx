import React from 'react'
import { Outlet } from 'react-router-dom';
 
const Main = () => {
  return (
    <div
    style={{border: '1px solid black'}}>
      <Outlet ></Outlet> 
    </div>
  )
}

export default Main