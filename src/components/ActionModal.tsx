import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActionModal({open, setOpen, handleCancel} : {
    open: boolean, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleCancel: () => void
}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Deseja realmente sair?"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight: 300}}>
            Após confirmar todos os dados do seu simulado serão perdidos. Essa ação não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={ButtonSecondary} onClick={handleClose}>Cancelar</Button>
          <Button style={ButtonPrimay} onClick={handleCancel}>Sair</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const ButtonSecondary = {
    fontFamily: "var(--font-secondary)",
    textTransform: "capitalize" as const,
    fontSize: "16px",
    fontWeight: 400,
    backgroundColor: "transparent",
    marginTop: "10px",
    width: "120px",
    height: 36
}

const ButtonPrimay = {
        fontFamily: "var(--font-secondary)",
        textTransform: "capitalize" as const,
        fontSize: "16px",
        fontWeight: 400,
        backgroundColor: "#F2F2F0",
        marginTop: "10px",
        width: "120px",
        color: "#1B1D1F",
        height: 36
}