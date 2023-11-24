import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from "react-router-dom";
const Logar = () => {

  const [login, setLogin] = useState([
    {
      username: '',
      password: '',
    }
  ]);

  const navigate = useNavigate();

    
    
    const handleLogin = () => {
      axios.post(
        'http://localhost:5000/login', 
        JSON.stringify(login),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then((res) => {
        const displayname = res.data.success;
        
        if(displayname){
          alert('Login feito com seucesso!');
          
           localStorage.setItem('@1app/displayname', JSON.stringify(displayname));
           navigate('/');
           window.location.reload();
          
        }
        
        else{  
          alert('Login ou senha inválidos');
        }

        
      })

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
        value={login.username}
        placeholder='Login'
        onChange={(e) => setLogin({...login, username: e.target.value})}
        />

        <label>Senha</label>
        <input type="password" className='form-control ' 
        value={login.password}
        placeholder='Senha'
        onChange={(e) => setLogin({...login, password: e.target.value})}

         />

        <div className='d-flex flex-row justify-content-end gap-3 border-top pt-3 border-white'>

        <button className='btn btn-success' onClick={(e) => handleLogin(e)}>Confirmar</button>
        <button className='btn btn-danger'>Cancelar</button>

        </div>

          <p>
          Caso Não tenha tenha uma conta <NavLink to={`/login`}> clique aqui </NavLink> 
          para criar uma conta.
          </p>

      </section>


    </main>
  )
}

export default Logar