import { Button } from "@mui/material";
import React, { useState, useEffect }  from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from "@mui/material/TextField/TextField";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions";





export default function AddTraining({addTraining}) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date:"",
        duration:"",
        activity: "",
        customer:"",        
    });

    const handleClickOpen = () => {
        console.log("PAINETTIIN LISAA ASIAKAS");
        setOpen(true);
    }

    const handleClose = () => {
        console.log("HANDLE CLOSE KUTSUTTU");
        addTraining(training);
        setOpen(false);
    }

    const handleCancel = () => {
        console.log("painettiin cancel")
        setOpen(false)
    }
    const inputChanged = (event) => {
        console.log("yritetään tallentaa attr arvoa");
        setTraining({...training, [event.target.name]: event.target.value})
    }

    const saveTraining = () => {
        addTraining(training);
        setOpen(false);
        console.log("painettiin kerran save nappulaa")
    }
    
    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add customer</Button>

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New customer</DialogTitle>
                <DialogContent>                        
                    <TextField
                        name="date"
                        value={training.date}
                        autoFocus
                        margin="dense"
                        label="Date"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="duration"
                        value={training.duration}
                        margin="dense"
                        label="Duration"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="activity"
                        value={training.activity}
                        autoFocus
                        margin="dense"
                        label="Activity"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="customer"
                        value={training.customer}
                        autoFocus
                        margin="dense"
                        label="Customer"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="email"
                        value={training.email}
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="phone"
                        value={training.phone}
                        autoFocus
                        margin="dense"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <DialogActions>
                        <Button onClick={saveTraining}>Save</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

        </div>

    );

}