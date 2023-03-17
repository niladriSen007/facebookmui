import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const SideBar = ({mode,setMode}) => {

  return (
    <Box sx={{
        backgroundColor:`${mode==="dark"?"#111":"#fff"}`,
        color:`${mode==="light"?"#111":"#fff"}`,
        flex:1,
        padding:2,
        display:{
            xs : "none",
            sm :"block"
        }
    }}>
      <Box position={"fixed"}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href='#pages'>
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#group'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#market'>
              <ListItemIcon>
                <LocalGroceryStoreIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <Person2Icon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#settings'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={()=>setMode(mode === "dark"?"light":"dark")}/>
            </ListItemButton>
          </ListItem>


        </List>
        </Box>
    </Box>
  )
}

export default SideBar