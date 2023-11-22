import React from 'react'
import { useNavigate } from 'react-router-dom';


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
            key={props.userDetails._id}
         >
           <h2 className='border-bottom border-dark text-center w-100 text-break'>
            Detalhes {props.userDetails._id} 
            </h2>
      
           <label>Login</label>
           <input type="text"
            disabled 
            className="form-control"
            value={props.userDetails.username}
            />
        
           <label>Email</label>
           <input type="text"
            disabled 
            className="form-control"
            value={props.userDetails.email}
            />
           <label>Data de criação</label>
           <input type="text"
            disabled 
            className="form-control "
            />
      
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