import { Button } from "@mui/material";
import React, { useState, useEffect }  from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from "@mui/material/TextField/TextField";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions";





export default function AddCustomer({addCustomer}) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname:"",
        lastname:"",
        postcode: "",
        city:"",
        email:"",
        phone:"",
    });

    const handleClickOpen = () => {
        console.log("PAINETTIIN LISAA ASIAKAS");
        setOpen(true);
    }

    const handleClose = () => {
        console.log("HANDLE CLOSE KUTSUTTU");
        addCustomer(customer);
        setOpen(false);
    }

    const handleCancel = () => {
        console.log("painettiin cancel")
        setOpen(false)
    }
    const inputChanged = (event) => {
        console.log("yritetään tallentaa attr arvoa");
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const saveCustomer = () => {
        addCustomer(customer);
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
                        name="firstname"
                        value={customer.firstname}
                        autoFocus
                        margin="dense"
                        label="Firstname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="lastname"
                        value={customer.lastname}
                        margin="dense"
                        label="Lastname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="postcode"
                        value={customer.postcode}
                        autoFocus
                        margin="dense"
                        label="Postcode"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="city"
                        value={customer.city}
                        autoFocus
                        margin="dense"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <TextField
                        name="email"
                        value={customer.email}
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
                        value={customer.phone}
                        autoFocus
                        margin="dense"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}            
                    />
                    <DialogActions>
                        <Button onClick={saveCustomer}>Save</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

        </div>

    );

}