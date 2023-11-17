import React from 'react'

const Login = () => {
  return (
    <main className='d-flex justify-content-center '
        >
      <section className="d-flex flex-column m-3 bg-dark text-white p-3 gap-3 rounded "
      style={{width: '600px'}}
      >

        <h2 className='border-bottom pb-2 border-white'>{`</>Login`}</h2>
        <label>Login</label>
        <input type="text" className='form-control '/>
        <label>Senha</label>
        <input type="password" className='form-control ' />

        <div className='d-flex flex-row justify-content-end gap-3 border-top pt-3 border-white'>

        <button className='btn btn-success'>Confirmar</button>
        <button className='btn btn-danger'>Cancelar</button>
        </div>

      </section>

    </main>
  )
}

export default Login