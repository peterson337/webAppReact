import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

const FormUserDetail = (props) => {

  const navigate = useNavigate();

  return (
    
    <section className='d-flex justify-content-center'>

{   

      props.loading?

      <p>Carregando...</p>
      :
       props.userDetails === 0?

       <p>Nenhum usuário encontrado</p>

       :
      
      props.userDetails&&(
          <form className='row m-3 p-3  gap-3 rounded '
          style={{backgroundColor: '#cfeafc', width: '300px'}}
            key={props.id}

            
         >

          <Box 
          sx={{ '& > :not(style)': { m: 1 } }}
           onClick={() => props.deleteUser(props.id)}
           className=' text-end'
           >
            <Fab color="error" aria-label="add"  size="small">
            <IoMdCloseCircle size={26}/>
            

            </Fab>
          
          </Box>     

           <h2 className='border-bottom border-dark text-center w-100 text-break'>
            Detalhes {props.userDetails._id} 
            </h2>
      
           <label>Login</label>
           <input
            type="text"
            className="form-control"
            value={props.userDetails.userName}
            onChange={(e) => props.setUserDetails({ ...props.userDetails, userName: e.target.value })}
            />

        
           <label>Email</label>
           <input type="text"
            className="form-control"
            value={props.userDetails.email}
            onChange={(e) => props.setUserDetails({ ...props.userDetails, email: e.target.value })}

            />
           <label>Cargo</label>
           <input type="text"   
            className="form-control "
            value={props.userDetails.cargo}
            onChange={(e) => props.setUserDetails({ ...props.userDetails, cargo: e.target.value })}
            />

          <label>Senha</label>
           <input type="text"   
            className="form-control "
            value={props.userDetails.password}
            onChange={(e) => props.setUserDetails({ ...props.userDetails, password: e.target.value })}
            />
      
           <button 
           onClick={props.UpdateUser}
           className='btn btn-primary border-top mt-3 border-dark'>
            Salvar alterações
          </button>

           <button 
           onClick={() => navigate('/')}
           className='btn btn-danger border-top mt-3 border-dark'>
            Voltar
          </button>

           
           
         </form>
                
      )     
}
    </section>
)
}

export default FormUserDetail