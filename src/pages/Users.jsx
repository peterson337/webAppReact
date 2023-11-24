import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from "../components/Card";
import { FaPlus } from "react-icons/fa";
import { NavLink  } from "react-router-dom";


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
       axios.get('http://localhost:5000/users').then((res) => {
        setUsers(res.data.post);
        setloading(res.data.loading);
        try{
          setloading(false);
        }catch{
          
        }
       })

        
    }, [])
    

  return (
    <main className='d-flex flex-column'>

    <section className='d-flex flex-wrap flex-row m-3 gap-3'>
      {

      loading?
      <div className="d-flex  justify-content-center  w-100">
        <span className="d-flex align-items-center gap-3">

      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"/>
        </span>
    </div>
      :
      
      users.length === 0 ?
        <p>Nenhum usuário encontrado</p>
        :

        users.map((user) => {
          return (
            <Card user={user} key={user._id} />
          )
        })
      }
    </section>

    <section className='d-flex justify-content-end align-items-end fixed-bottom p-3'>
      <NavLink
      to={'/newuser'}
        style={{marginBottom: '50px' }}
      >
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
      <FaPlus />

      </Fab>
     
    </Box>     
   </NavLink>
    </section>

  </main>
  )
}

export default Users