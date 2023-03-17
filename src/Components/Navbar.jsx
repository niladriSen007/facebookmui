import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import Person2Icon from '@mui/icons-material/Person2';
import { Mail, NotificationAdd, Notifications } from '@mui/icons-material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const IconContainer = styled("div")(({ theme }) => ({
    // backgroundColor: "#fff",
    color: "#111",
    padding: 4,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    gap: "6px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))

const UserContainer = styled("div")(({ theme }) => ({
    // backgroundColor: "#fff",
    color: "#111",
    padding: 4,
    alignItems: "center",
    gap: "10px",
    flex: 1,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: 'inherit',
    color: "#111",
    padding: 4,
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    flex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClose = () => {
        setAnchorEl(false);
    };

    return (
        <AppBar>
            <StyledToolbar>
                <Typography variant='h6' sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    },
                    flex: 1
                }}>
                    FACEBOOK
                </Typography>
                <PetsIcon sx={{
                    display: {
                        xs: "block",
                        sm: "none"
                    },
                    flex: 1
                }} />
                <SearchBar><InputBase sx={{ width: { xs: "160px", sm: "500px" }, backgroundColor: "#fff", p: .4, borderRadius: "2px" }} placeholder='Search...' /></SearchBar>
                <IconContainer>
                    <Person2Icon sx={{ color: '#fff', fontSize: { xs: 22, sm: 24 } }} />
                    <Badge badgeContent={4} color="error">
                        <Mail sx={{ color: "#fff", fontSize: { xs: 22, sm: 24 } }} />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications sx={{ color: "#fff", fontSize: { xs: 22, sm: 24 } }} />
                    </Badge>
                    <PowerSettingsNewIcon sx={{ color: "#fff", fontSize: { xs: 22, sm: 24 } }} />
                    <Avatar onClick={e=>setAnchorEl(true)} alt="Cindy Baker" src="a.jpg" sx={{cursor:"pointer"}}/>
                </IconContainer>
                <UserContainer >
                    <Avatar onClick={e=>setAnchorEl(true)} alt="Cindy Baker" src="a.jpg" sx={{cursor:"pointer"}}/>
                </UserContainer>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar