import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import Dots from '../../../img/dots.svg'
import {Link} from 'react-router-dom'
// import { motion } from 'framer-motion';

const useStyles = makeStyles({
    container:{
        height:'100%',
        paddingLeft: '15%',
    },
    heading:{
        marginTop:'17vh',
        fontSize: 'min(3.5em, 13vw)',
        position:'relative',
        zIndex:1,
        textShadow: '2px 2px 3px #444444',
        fontWeight:600,
        width:'fit-content',
        '&::before':{
            content:"''",
            position:'absolute',
            height:'100%',
            width:'60%',
            backgroundColor:'tomato',
            bottom:0,
            zIndex:-1,
            right:'-3%',
        },
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
            top:'-40%',
            left:-25,
            // backgroundColor:'tomato',
        }
        
    },
    subHeading:{
        fontSize: 'min(2em, 8vw)',
    },
    pointer:{
        alignSelf: 'center',
    },
    subHeadContain:{
        margin:'15px 0 50px 0',
        position:'relative',
    },
    subBg:{
        WebkitTextStroke: '1.5px white',
        WebkitTextFillColor: 'transparent',
        fontSize:'min(3em, 11vw)',
        position:'absolute',
        bottom:'-80px',
        fontWeight:900,
        padding: '5px 20px',
        border: '3px solid white',
        borderRadius:'5px',
        right:'min(-10px, -10vw)',
        opacity:0.2,
    },
    body:{
        fontSize:'1.2em',
        width:'min(400px, 50vw)',
        lineHeight:'1.5em',
        margin:'40px 0',
    },
    btn:{
        width:'fit-content',
        // color:'white',
    }
});  

function Display() {
    const subBg = "({webDev)}";
    const style = useStyles();
    return (
        <>
            <Grid container direction='column' className={style.container} >
                {/* <h1 className='heading' >
                </h1> */}
                <Typography variant='h1' container='h1' className={style.heading} >
                    FULLSTACK
                </Typography>
                <div className={style.subHeadContain}>
                    <Typography  variant='h4' container='h2' className={style.subHeading} >Web Developer</Typography>
                    <Typography  className={style.subBg}>{subBg}</Typography>
                </div>
                <Typography variant='body1' container='p' className={style.body}>
                HI, I am Abhishek. I design and build Cool WebSites.
                </Typography>
                <Link to="/portfolio-website/contact">
                    <Button variant="contained" color="primary" className={style.btn} >
                        want to hier
                    </Button>
                </Link>
            </Grid>
        </>
    )
}

export default Display
