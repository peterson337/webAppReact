import React from 'react'

const FormUserDetail = (props) => {
  return (
    <form className='row m-3 p-3 w-25 gap-3 rounded'
    style={{backgroundColor: '#cfeafc'}}

   >
     <h2 className='border-bottom border-dark text-center'>Detalhes {props.id} </h2>

     <label>Login</label>
     <input type="text"
      disabled 
      className="form-control"
      />
     <label>Nome</label>
     <input type="text"
      disabled 
      className="form-control"
      />
     <label>Email</label>
     <input type="text"
      disabled 
      className="form-control"
      />
     <label>Data de criação</label>
     <input type="text"
      disabled 
      className="form-control "
      />

     <button className='btn btn-danger border-top mt-3 border-dark'>Voltar</button>
     
   </form>
)
}

export default FormUserDetail