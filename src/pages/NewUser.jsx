import React, {useState, useEffect} from 'react'
import ModalCreateUsers  from "../components/ModalCreateUsers";
import { useNavigate } from 'react-router-dom';

const NewUser = () => {

  const [ModalCreateUser, setModalCreateUser] = useState(true);

  const handleOpen = () => setModalCreateUser(true);

  const handleClose = () => setModalCreateUser(false);

  const navigate =  useNavigate();


  return (
    <div>

      <ModalCreateUsers 
      ModalCreateUser={ModalCreateUser}
      handleOpen={handleOpen}
      handleClose={() => navigate('/')}
      />
        </div>
    )
}

export default NewUser