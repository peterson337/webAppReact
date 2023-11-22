import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from "../components/Card";
import { FaPlus } from "react-icons/fa";
import { NavLink  } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:5000/users').then((res) => {
        setUsers(res.data.post);
       })

        
    }, [])
    

  return (
    <main className='d-flex flex-column'>

    <section className='d-flex flex-wrap flex-row m-3 gap-3'>
      {users.length === 0 ?
        <p>Nenhum usuário encontrado</p>
        :
        users.map((user) => {
          return (
            <Card user={user} key={user.id} />
          )
        })
      }
    </section>

    <section className='d-flex justify-content-end align-items-end fixed-bottom p-3'>
      <NavLink
      to={'/newuser'}
        className='btn btn-circle btn-primary '
        style={{ borderRadius: '50%', padding: '15px', marginBottom: '50px' }}
      >
        <FaPlus />
      </NavLink>
    </section>

  </main>
  )
}

export default Users