import React, { useContext, useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField } from '@mui/material';
import { AuthContext } from '../../../authentication/AuthContext';


export default function AddGoalDialog(){

    const {user} = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const [goalName, setGoalName] = useState('');

    const handleSubmit = async () => {

        try {

            const res = await fetch("http://localhost:4000/budgeting/create-goal",{
                method: "POST",
                mode: 'cors',
                headers: {  
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    user_id: user.user_id,
                    category_id: "Blueberries",
                    goal_id: goalName
                }),
            });

            if (res.status === 200) { 
            }else{
                console.log(res);
            }

        } catch (err) {
            console.log(err);
        }


        handleClose();
    };

    const handleClickOpen =()=>{
        setOpen(true);
    }

    const handleClose =()=>{
        setOpen(false);
    }


    return(
        <div>
            <Button
                    padding="10px"
                    sx={{
                        fontSize: "10px",
                        backgroundColor: "black",
                        color: "white",
                        height: "1rem",
                        padding: "1rem",
                        margin: "1.5rem",
                        "&:hover": {
                            color: "black",
                            bgcolor: "#FFFFFF",
                            borderStyle: "solid",
                        }
                    }} 
                    onClick={handleClickOpen}
                    >
                    new goal+
                </Button>

            <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                    <DialogContentText>
                        Name of new category:
                    </DialogContentText>
                    <TextField
                        onInput={e=>setGoalName(e.target.value)}
                        autoFocus
                        margin='dense'
                        id='goal_id'
                        label='goal_id'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
