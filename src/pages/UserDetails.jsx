import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import FormUserDetail from "../components/FormUserDetail";


const UserDetails = () => {

  const { id } = useParams();

  useEffect(() => {
        axios.get(`http://localhost:5000/usersDetails/${id}`).then((res) => {
          console.log(res.data.postRes);
          setLoading(res.data.loading);
          setUserDetails(res.data.postRes)
        })
  }, [])
  

  const [userDetails, setUserDetails] = useState([]);

  const [loading, setLoading] = useState(false);


  return (
    <main className='d-flex justify-content-center align-items-center'>


      <FormUserDetail id={id} userDetails={userDetails} loading={loading}/>

    </main>
  )
}

export default UserDetails