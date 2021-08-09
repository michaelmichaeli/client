import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteModal({roomId, openDeleteModal, handleDeleteModalClose}) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={openDeleteModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteModalClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Are You Sure?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are your sure you want to remove this room permanently?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDeleteModalClose(true, roomId)}>Remove</Button>
          <Button onClick={handleDeleteModalClose}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}