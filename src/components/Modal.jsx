import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export const Modal = (props) => {
  return (
    <div>
        {
  props.handleOpenModalLogout?
       <Dialog
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Você tem certeza que deseja delogar?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Clivando no botão confirmar você deloga, caso clique em cancelar o modal fechará.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="error" variant="contained">Cancelar</Button>
          <Button onClick={props.handleOpen} variant="contained" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      :

    <Button onClick={props.handleOpen}>Open modal</Button>

}
    </div>
  )
}
