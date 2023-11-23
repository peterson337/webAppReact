import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import FormUserDetail from "../components/FormUserDetail";


const UserDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
        axios.get(`http://localhost:5000/usersDetails/${id}`).then((res) => {
          setLoading(res.data.loading);
          setUserDetails({
            userName: res.data.postRes.username || '',
            email: res.data.postRes.email,
            cargo: res.data.postRes.cargo,
            password: res.data.postRes.password,
          
          })
        })
  }, [])
  
  
  const [userDetails, setUserDetails] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
  
  const deleteUser = () => {
    axios.delete(`http://localhost:5000/deleteUser/${id}`).then((res) => {
      console.log(res.data);

      res.data? alert('Usuário excluido com sucesso') : alert('Erro ao excluir o usuário');

    })

    navigate('/');
  } 

  const UpdateUser = () => {
     axios.put(
      `http://localhost:5000/updateUser/${id}`,
      JSON.stringify(userDetails),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
     ).then((res) => {

       res.data? alert('Usuário editado com sucesso') : alert('Erro ao editar o usuário');

     })

    navigate('/');
  } 


  return (
    <main className='d-flex justify-content-center align-items-center'>


      <FormUserDetail 
       id={id}
       userDetails={userDetails}
       setUserDetails={setUserDetails}
       loading={loading}
       deleteUser={deleteUser}
      UpdateUser={UpdateUser}
      />

    </main>
  )
}

export default UserDetails