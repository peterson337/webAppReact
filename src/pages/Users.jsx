import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from "../components/Card";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:5000/users').then((res) => {
        setUsers(res.data.post);
       })

        
    }, [])
    

  return (
    <main>

      <section className='d-flex flex-wrap flex-row m-3 gap-3'>

      {
          users.length === 0?
          <p>Nenhum usuário encontrado</p>

          :

         users.map((user) => {
          return(
              <Card user={user}/>
          )
         })
      }
      </section>


    </main>
  )
}

export default Users