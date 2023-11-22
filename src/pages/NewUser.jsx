import React, {useState, useEffect} from 'react'
import ModalCreateUsers  from "../components/ModalCreateUsers";

const NewUser = () => {

  const [ModalCreateUser, setModalCreateUser] = useState(true);

  const handleOpen = () => setModalCreateUser(true);

  const handleClose = () => setModalCreateUser(false);

  return (
    <div>

      <ModalCreateUsers 
      ModalCreateUser={ModalCreateUser}
      handleOpen={handleOpen}
      handleClose={handleClose}
      />
        </div>
    )
}

export default NewUser