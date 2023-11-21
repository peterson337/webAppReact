import React, {useState} from 'react'

import { Modal } from "../components/Modal";

import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [handleOpenModalLogout, sethandleOpenModalLogout] = useState(true);
  const navigate = useNavigate();


  const handleOpen = () => {
    !handleOpenModalLogout? 

    sethandleOpenModalLogout(false) 
    :
    localStorage.clear(); 
    navigate('/');
    window.location.reload();

   }

  const handleClose = () => {
    navigate('/');

  }

  return (
    <section>

    <Modal handleOpenModalLogout={handleOpenModalLogout} handleOpen={handleOpen}
    handleClose={handleClose}/>


    </section>
  )
}

export default Logout