import React from 'react'
import Button from '@material-ui/core/Button';
import {Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
        color:'#fff',
        marginLeft:10,
        position:'relative',
        zIndex:1,
        '&::after':{
            position:'absolute',
              zIndex:-1,
              content:"''",
              width:'100%',
              height:'5px',
              bottom:'-14px',
              left:0,
              borderRadius:5,
              transform: 'scale(0,1)',
              transition:'.2s all ease-out',
              background:'tomato'
        },
        '&:hover::after':{
            transform: 'scale(1,1)',
        }
      },
      active:{
        color:'#fff',
        marginLeft:10,
        position:'relative',
        zIndex:1,
        '&::after':{
            position:'absolute',
              zIndex:-1,
              content:"''",
              width:'100%',
              height:'5px',
              bottom:'-14px',
              left:0,
              borderRadius:5,
              transform: 'scale(1,1)',
              background:'tomato'
        },
      }
}));

function DesktopMenu() {
    const style = useStyles();
    const location = useLocation();
    return (
        <>
          <Link to='/'>
            <Button className={ location.pathname === '/' ? `${style.active}` : `${style.btn}`}>
                Home
            </Button>
          </Link>
          <Link to='/projects'>
            <Button className={location.pathname === '/projects' ? `${style.active}` : `${style.btn}`}>
                Projects
            </Button>
          </Link>
            <Link to='/contact'>
            <Button className={location.pathname === '/contact' ? `${style.active}` : `${style.btn}`}>
                Contact Me
            </Button>
          </Link>  
        </>
    )
}

export default DesktopMenu
