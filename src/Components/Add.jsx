import { Avatar, Box, Button, Fab, Fade, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SupportIcon from '@mui/icons-material/Support';
import { PhotoCamera } from '@mui/icons-material';
const Add = ({ mode }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: 24,
        backdropFilter: blur("5px"),
        p: 4,
        backgroundColor: `${mode === "dark" ? "#111" : "#fff"}`,
        color: `${mode === "light" ? "#111" : "#fff"}`,
    };

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
    })

    const iconStyle = { color: "green", fontSize: 20, cursor: "pointer" }

    return (
        <>
            <Tooltip title="Delete" sx={{
                position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: 20 }
            }} onClick={handleOpen} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}

            >
                <Fade in={open} >
                    <Box sx={style}>
                        <Typography variant='h6' fontWeight={500} alignItems='center' mb={2}>
                            Create Post
                        </Typography>
                        <UserBox>
                            <Avatar alt="Cindy Baker" src="a.jpg" sx={{ cursor: "pointer", mr: 2 }} />
                            <Typography variant='h6' fontWeight={500} fontSize={16} color="gray">
                                Cindy Baker
                            </Typography>
                        </UserBox>
                        <TextField id="outlined-basic" placeholder='What is on your mind...' variant="outlined" sx={{ mt: 2, width: "100%" }} />
                        <Stack direction={"row"} gap={.5} mt={2} sx={{ border: "2px solid gray", borderRadius: 8, p: 1, width: "100px", my: 2 }}>
                            <FavoriteIcon sx={{ ...iconStyle, color: "red" }} />
                            <ThumbUpIcon sx={{ ...iconStyle, color: "blue" }} />
                            <SentimentVeryDissatisfiedIcon sx={{ ...iconStyle, color: "yellow" }} />
                            <SupportIcon sx={{ ...iconStyle }} />
                        </Stack>
                        <Button variant="contained" component="label">
                            Post
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default Add