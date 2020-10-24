import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography'
import DesktopMenu from './navigation/DesktopMenu'
import MobileMenu from './navigation/MobileMenu'

const useStyles = makeStyles((theme) => ({
    nav:{
        background:'#333',
        color:'#fff',
    },
    title: {
        flexGrow: 1,
        fontWeight:600,
      },
      half:{
          position:'relative',
          zIndex:1,
          overflow:'hidden',
          '&::before':{
              position:'absolute',
              zIndex:-1,
              content:"''",
              width:'110%',
              height:'110%',
              top:'-1px',
              left:'-2px',
              opacity:0.9,
              background:'tomato'
          }
      }
}));


function Menu() {
    const style = useStyles();
    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
    return (
        <>
            <AppBar className={style.nav} position="static">
                <Toolbar>
                <Typography variant="h6" className={style.title}>
                    FullStack <span className={style.half} >WEBDEV</span> 
                </Typography>
                {
                    matches ? <DesktopMenu /> : <MobileMenu /> 
                }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Menu
