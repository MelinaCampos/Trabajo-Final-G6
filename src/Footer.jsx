import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material'

const Footer = () => {
  return (
    <footer>
          <Grid container spacing={3}  sx={{boxShadow:3, bgcolor: '#e6fcff', width: '1000px', margin:'auto'} } >
            <h6 style={{marginLeft: '12rem'}}><GitHubIcon/><a href='https://github.com/MelinaCampos' target='_blank'>Meli</a></h6>
            <h6 style={{marginLeft: '15rem'}}><GitHubIcon/><a href='https://github.com/g0blin1983' target='_blank'>Gabriel</a></h6>
            <h6 style={{marginLeft: '15rem'}}><GitHubIcon/><a href='https://github.com/LautaroScherer' target='_blank'>Sebastian</a></h6>
          </Grid>
    </footer>
  )
}

export default Footer;