import React from 'react'
import Grid from '@material-ui/core/Grid'
import Photo from './Photo'
import {makeStyles } from '@material-ui/core/styles'
import Details from './Details'

const useStyles = makeStyles(theme => ({
    grid:{
        height:600,
        display:'flex',
        flexFlow:'colomn',
        [theme.breakpoints.down('sm')]:{
            flexFlow:'column-reverse',
            height:'fit-content',
        },
    },
    div:{
        background: '#444444',
        color:"#FFFFFF",
        [theme.breakpoints.down('sm')]:{
            height:450,
        },
    },
    tab:{ 
        [theme.breakpoints.down('sm')]:{
            height:'fit-content',
        },
    },
}));

function AboutSection() {
    const style = useStyles();
    return (
        <>
        <Grid container className={style.grid} >
            <Grid xs={12} md={6} item className={style.tab} container justify='center' >
                <Details />
            </Grid>
            <Grid className={style.div} item xs={12} md={6} >
                <Photo />
            </Grid>    
        </Grid>
        </>
    )
}

export default AboutSection
