import { Box, createTheme, Divider, Stack } from '@mui/material'
import React, { useState } from 'react'
import Add from './Components/Add'
import Feed from './Components/Feed'
import Navbar from './Components/Navbar'
import RightBar from './Components/RightBar'
import SideBar from './Components/SideBar'
import { ThemeProvider } from '@emotion/react'

const App = () => {

  const [mode,setMode] = useState("light")

 const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

{/* <Box bgcolor={"background.default"} color={"text.primary"}> */}
    <Box sx={{backgroundColor:`${mode === "dark"?"#111":"#fff"}`,color:`${mode === "dark"?"#888":"#111"}`}} >
      <Navbar />
      <Stack direction="row" spacing={2}  justifyContent={"space-between"} mt={8}>
      <SideBar mode={mode} setMode={setMode}/>
      <Feed mode={mode}/>
      <RightBar mode={mode}/>
    </Stack>
    <Add mode={mode}/>
    </Box >
    </ThemeProvider>
  )
}

export default App