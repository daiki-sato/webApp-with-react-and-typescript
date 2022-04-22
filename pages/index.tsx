import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import * as React from 'react'

import LearningTimeWrapper from '../src/components/molecules/LearningTimeWrapper'

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
              POSSE
            </Typography>
            <Typography variant="body2" component="div" sx={{ mr: 'auto' }}>
              4th week
            </Typography>
          </Toolbar>
        </AppBar>
        <LearningTimeWrapper />
      </Box>
    </>
  )
}

export default Home
