import axios from 'axios';
import React, {useReducer} from 'react';
import { useNavigate, NavLink } from "react-router-dom";


const Login = () => {
  
  const initialState = {username: '', email: '', password: '',};
  
  const reducer = (state, action) => {
    switch (action.type ) {
    case 'User':
      return {...state, [action.field]: action.value};

      default:
        return state;
    }
    
  }

  const [state, dispatch] = useReducer(reducer,initialState);
  

  const navigate = useNavigate();

  
  
  const handleLogin =  (e) => {
    e.preventDefault(); 
   

   try{
     
      axios.post(
      'http://localhost:5000/login',
      JSON.stringify(state),
      
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      )
      
      localStorage.setItem('@1app/displayname', state.username);

      navigate('/');

      window.location.reload();
    
    }catch(error){
      console.log(error);
    }
    
    
  }
  
  return (
    <main className='d-flex justify-content-center '
    >
      <section className="d-flex flex-column m-3 bg-dark text-white p-3 gap-3 rounded "
      style={{width: '600px'}}
      >

        <h2 className='border-bottom pb-2 border-white'>{`</>Criar conta`}</h2>
        <label for="text">Login</label>

        <input type="text" className='form-control ' 
        value={state.username}
        onChange={(e) => dispatch({type: 'User', field: 'username', value: e.target.value})} 
        required
        />

        <label for="email">email</label>
        <input type="email" className='form-control '
         value={state.email} 
        onChange={(e) => dispatch({type: 'User', field: 'email', value: e.target.value})} 
        required
         />

        <label>Senha</label>
        <input type="password" className='form-control ' 
        value={state.password}
        onChange={(e) => dispatch({type: 'User', field: 'password', value: e.target.value})} 
        required
         />

        <div className='d-flex flex-row justify-content-end gap-3 border-top pt-3 border-white'>

        <button className='btn btn-success' onClick={(e) => handleLogin(e)}>Confirmar</button>
        <button className='btn btn-danger'>Cancelar</button>

        </div>

      </section>


    </main>
  )
}

export default Login