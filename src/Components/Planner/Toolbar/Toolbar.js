import React from 'react'
import { ButtonGroup, Button, Grid, Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Toolbar(props) {

  const [enabled, setEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false);

  const disable = (time) => {
    setEnabled(false)
    setTimeout(() => {
      setEnabled(true)
    }, time)
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (

    <React.Fragment>
      <Grid container justify='flex-start'>
        <Grid item>
          {props.selectedId &&
            (<ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{marginRight:30}}>
              <Button color='secondary' startIcon={<DeleteIcon />} style={{marginRight:30}} onClick={() => props.onDelete(props.selectedId)}>Delete</Button>
              <Button onClick={() => props.toFront(props.selectedId)}>Bring to Front</Button>
              <Button onClick={() => props.toBack(props.selectedId)}>Send to Back</Button>
            </ButtonGroup>)}
            {props.drawing && (<ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" style={{marginRight:30}}>
              <Button onClick={props.completeDraw}>Complete</Button>
              <Button color='secondary' onClick={props.cancelDraw}>Discard</Button>
            </ButtonGroup>)}
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
            <Button
              disabled={!enabled}
              startIcon={<CloudUploadIcon/>}
              onClick={() => {
                props.onPublish()
                handleClick()
                disable(5000)
              }}>publish</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
        <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message='Image Published to Profile!'
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
      </React.Fragment>
  )
  
}
