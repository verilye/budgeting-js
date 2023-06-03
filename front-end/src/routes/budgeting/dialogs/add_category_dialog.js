import React ,{useContext, useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField } from '@mui/material';
import { AuthContext } from '../../../authentication/AuthContext';


export default function AddCategoryDialog({fetchData}) {

    // TODO
    // Add submit data to 'form'
    const {user} = useContext(AuthContext);

    const [open, setOpen] = React.useState(false);
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = async () => {

        try {

            const res = await fetch("http://localhost:4000/budgeting/create-category",{
                method: "POST",
                mode: 'cors',
                headers: {  
                    'Content-Type': 'application/json',
                    'x-access-token': user.token
                }, 
                body: JSON.stringify({
                    user_id: user.user_id,
                    category_id: categoryName
                }),
            });

            if (res.status === 200) { 

                // Confirm it was submitted

                // Update context to include new data
            }else{
                console.log(res);
            }

            fetchData();

        } catch (err) {
            console.log(err);
        }


        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button
                padding="10px"
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    height: "2.5rem",
                    padding: "1rem",
                    margin: "1.5rem",
                    fontWeight: "bold",
                    "&:hover": {
                        color: "black",
                        bgcolor: "#FFFFFF",
                        borderStyle: "solid",
                    }
                }}
                onClick={handleClickOpen}
                >
                add +
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Name of new category:
                    </DialogContentText>
                    <TextField
                        onInput={e=>setCategoryName(e.target.value)}
                        autoFocus
                        margin='dense'
                        id='category_id'
                        label='category_id'
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