import React from 'react'
import { useParams } from 'react-router-dom';
import FormUserDetail from "../components/FormUserDetail";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <main className='d-flex justify-content-center align-items-center'>

    
      <FormUserDetail id={id}/>

    </main>
  )
}

export default UserDetails