import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
// import HomeIcon from '@material-ui/icons/Home';
// import EmailIcon from '@material-ui/icons/Email';
// import InfoIcon from '@material-ui/icons/PermMedia'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav:{
        background:'#444',
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


function DesktopMenu() {
    const style = useStyles();
    return (
        <>
            <AppBar className={style.nav} position="static">
                <Toolbar>
                <Typography variant="h6" className={style.title}>
                    FullStack <span className={style.half} >WEBDEV</span> 
                </Typography>
                    <Link to='/'>
                        <Button color='primary'>
                            Home
                        </Button>
                    </Link>
                    <Link to='/projects'>
                        <Button color='primary'>
                            Projects
                        </Button>
                    </Link>
                    <Link to='/contact'>
                        <Button color='primary'>
                            Contact Me
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default DesktopMenu
