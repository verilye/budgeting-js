import React, { useContext, useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField } from '@mui/material';
import { AuthContext } from '../../../authentication/AuthContext';


export default function EditGoalDialog({ category_id,goal_id, fetchData }) {

    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const [progressAmount, setProgressAmount] = useState('');
    const [goalAmount, setGoalAmount] = useState('');


    const handleSubmit = async () => {

        try {

            // Need to pass in new category id if you wish for names to be changed
            const res = await fetch("http://localhost:4000/budgeting/edit-goal", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.user_id, 
                    category_id:category_id,
                    goal_id: goal_id,
                    progress_amount:progressAmount,
                    target_amount:goalAmount,
                }),
            });

            if (res.status === 200) {
            } else {
                console.log(res);
            }

            fetchData();

        } catch (err) {
            console.log(err);
        }


        handleClose();
    }

    const handleDelete =()=>{

    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div>
            <Button

                sx={{
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                    height: "1rem",
                    padding: "1rem",
                    margin: "1.5rem",
                    marginTop: "2rem",
                    "&:hover": {
                        color: "black",
                        bgcolor: "#FFFFFF",
                        borderStyle: "solid",
                    }
                }}
                onClick={handleClickOpen}
            >
                edit
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Edit Goal:
                    </DialogContentText>
                    <TextField
                        onInput={e => setProgressAmount(e.target.value)}
                        autoFocus
                        margin='dense'
                        id='Progress amount'
                        label='Progress amount -'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        onInput={e => setGoalAmount(e.target.value)}
                        autoFocus
                        margin='dense'
                        id='Goal Amount'
                        label='Goal Amount -'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
                <DialogActions>
                    <Button 
                    
                    sx={{
                        color:'red',
                    }}
                    onClick={handleDelete}>Delete goal</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

