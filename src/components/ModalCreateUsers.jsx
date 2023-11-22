import React,{useReducer} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModalCreateUsers = (props) => {

    const navigate =  useNavigate();

    
    const  initialState = {username: '', email: '', password: '', cargo: ''};
    
    const reducer  = (state, action) => {
        switch (action.type ) {
        case 'User':
            return {...state, [action.field]: action.value};
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer ,initialState);

    const createUser = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:5000/createUser',
            JSON.stringify(state),

            {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            )
            navigate('/');

            window.location.reload();
      }

  return (
    <div>

        
{   
      props.ModalCreateUser?

        <Dialog
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-center'>
          {"Criar usuário"}
        </DialogTitle>
        <DialogContent
        className='d-flex flex-column gap-3'

        >
          <label>Nome</label>
            <input type="text" placeholder='User Name' value={state.username} className='form-control'
            onChange={(e) => dispatch({type: 'User', field: 'username', value: e.target.value})}
            />

          <label>Email</label>
            <input type="email" placeholder='Email' value={state.email} className='form-control'
            onChange={(e) => dispatch({type: 'User', field: 'email', value: e.target.value})}

            />

          <label>Cargo</label>
            <input type="text" placeholder='Cargo'  value={state.cargo} className='form-control'
            onChange={(e) => dispatch({type: 'User', field: 'cargo', value: e.target.value})}

            />

          <label>Senha</label>
            <input type="password" placeholder='Senha' value={state.password} className='form-control'
            onChange={(e) => dispatch({type: 'User', field: 'password', value: e.target.value})}
            />

        </DialogContent>
        <DialogActions>

           <Button onClick={createUser} variant="contained" autoFocus>
            Confirmar
          </Button>  

      <Button onClick={() => navigate('/')} color="error" variant="contained"
      >
        Cancelar
      </Button> 
        </DialogActions>
      </Dialog>

      :
      <button onClick={() => navigate('/')} color="error" variant="contained" className='btn btn-danger m-3'>
         Voltar para a página inicial
     </button>
      } 
    </div>
  )
}

export default ModalCreateUsers