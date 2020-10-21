import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import Dots from '../../../img/dots.svg'
import Profile from '../../../img/Profile.jpg'
// import { motion } from 'framer-motion';

const useStyles = makeStyles({
    container:{
        height:'100%',
        paddingLeft: '15%',
    },
    heading:{
        margin:'11vh 0',
        fontSize: 'min(3em, 10vw)',
        position:'relative',
        zIndex:0,
        textShadow: '2px 2px 3px #444444',
        fontWeight:600,
        width:'fit-content',
        '&::after':{
            content: "''",
            position:'absolute',
            width:50,
            height:50,
            zIndex:-1,
            opacity:0.30,
            background:`url(${Dots})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            bottom:'-40%',
            right:-25,
        }  
    },
    halfHead:{
        backgroundColor:'tomato',
        padding: '0 5px 0 15px',
    },
    pic:{
        height:'50%',
        width:'min(370px, 67vw)',
        background:`url(${Profile}) `,
        backgroundPosition:'center',
        backgroundSize:'cover',
        position: 'relative',
        zIndex:1,
        boxShadow:'5px 5px 40px #222',
        '&::before':{
            content: "''",
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:-1,
            border:' 5px solid white',
            opacity:0.30,
            bottom:-25,
            right:-25,
        }
    }
});  

function Photo() {

    const style = useStyles();
    return (
        <>
            <Grid container direction='column'  alignItems='flex-start' className={style.container} >
                <Grid item >
                <Typography variant='h1' container='h1' className={style.heading} >
                    <span className={style.halfHead} >ABOUT</span> ME
                </Typography>
                </Grid>
                <Grid item className={style.pic}/>
            </Grid>
        </>
    )
}

export default Photo
