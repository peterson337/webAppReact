import React, {useState} from 'react'
import { NavLink  } from "react-router-dom";

const Header = () => {

  return (


      <nav className='navbar px-5  bg-primary d-flex flex-row align-items-center '>

        {
     localStorage.getItem('@1app/displayname') === null ? 
          <>

        <NavLink  to={`/`} className=' '>
      <h1 className='text-light  link-underline-Light-hover fs-4 border p-1 fw-bolder'>
        {`</1App>`}
      </h1>
        </NavLink >


            <div className='d-flex flex-row gap-3'>
        <NavLink to={`/`} >
           <button className='btn btn-dark'>
            Home
           </button>
        </NavLink>

        <NavLink  to={`/login`}>
        <button className='btn btn-light'>
        Criar conta
        </button>
        </NavLink >
        
        <NavLink  to={`/logar`}>
        <button className='btn btn-light'>
        Login
        </button>
        </NavLink >
            </div>
          </>

          :
          <>

<NavLink  to={`/`} className=' '>
      <h1 className='text-light  link-underline-Light-hover fs-4 border p-1 fw-bolder'>
        {`</1App>`}
      </h1>
        </NavLink >


            <div className='d-flex flex-row gap-3'>
        <NavLink to={`/`} >
           <button className='btn btn-dark'>
            Users
           </button>
        </NavLink>

        <NavLink  to={`/logout`}>
        <button className='btn btn-light'>
        Logout
        </button>
        </NavLink >
            </div>

          </>

}
      </nav>
      
  )
}

export default Header
