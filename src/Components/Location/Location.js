import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../utils/API';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#005254",
    },
    primary: {
      light: '#806673',
      main: '#614051',
      dark: '#432c38',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c88f76',
      main: '#bb7354',
      dark: '#82503a',
      contrastText: '#fff',
    },
    action: {
      disabled: {
        light: '#c88f76',
        main: '#bb7354',
        dark: '#82503a',
        contrastText: '#fff',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    
  }
}));

export default function Location(props) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  function refreshPage() {
    window.location.reload(false);
  }
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleUpdate = (event) => {
    let {value} = event.target
    setLocation({value})
 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose()
    API.updateUserLocation(props.id, location)
    .then(result => {
    })
    handleClose();
    refreshPage();
  };

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Button size="small"
      className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}>
        Edit Region
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add or update your location here:
          </DialogContentText>
          <TextField
            name= "location"
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            onChange = {handleUpdate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </MuiThemeProvider>
  );
}

