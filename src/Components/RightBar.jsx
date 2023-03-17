import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const RightBar = ({mode}) => {
    return (
        <Box sx={{
            backgroundColor:`${mode==="dark"?"#111":"#fff"}`,
        color:`${mode==="light"?"#111":"#fff"}`,
            flex: 2,
            padding: 2,
            display: {
                xs: "none",
                sm: "block"
            }
        }}>
            <Box position={"fixed"} sx={{display:"flex",flexDirection:"column",gap:2,width:420}}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={6} >
                    <Avatar alt="Remy Sharp" src="1.jpg" />
                    <Avatar alt="Travis Howard" src="2.jpg" />
                    <Avatar alt="Cindy Baker" src="3.jpg" />
                    <Avatar alt="Agnes Walker" src="4.jpg" />
                    <Avatar alt="Trevor Henderson" src="5.jpg" />
                    <Avatar alt="Travis Howard" src="2.jpg" />
                    <Avatar alt="Cindy Baker" src="3.jpg" />
                    <Avatar alt="Agnes Walker" src="4.jpg" />
                    <Avatar alt="Travis Howard" src="2.jpg" />
                    <Avatar alt="Cindy Baker" src="3.jpg" />
                    <Avatar alt="Agnes Walker" src="4.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100}>Latest Photos</Typography>
                <ImageList sx={{ width: 400, height: 260 }} cols={3} rowHeight={60}>
                    <ImageListItem>
                        <img src="11.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="12.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="13.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="14.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="15.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="16.avif?w=132&h=132&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    
                </ImageList>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
    )
}

export default RightBar