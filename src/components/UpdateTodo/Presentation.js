import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function Presentation(props) {
  const { handleUpdate, data, updateTodo } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <CreateIcon onClick={handleClickOpen}  className="updateicon" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="updated todo"
            label="Enter Todo"
            type="text"
            value={data.updatetodo}
            onChange={handleUpdate}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => { handleClose(); updateTodo();}} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}

export default Presentation;
