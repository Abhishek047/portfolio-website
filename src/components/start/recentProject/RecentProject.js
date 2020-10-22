import React from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Cards from './Cards'

const useStyles = makeStyles({
    section:{
        marginTop:80,
    },
    heading:{
        fontSize:'min(3em, 8vw)',
        fontWeight:600,
        overflow: 'hidden',
        color:'#444444',
        padding:'min(5px, 0.7vw) min(30px, 3vw)',
        border:'6px solid #444444'
    },
    halfHead:{
        //I THINK WE CAN ALSO USE OVERFLOW HIDDEN
        color: 'white',
        position:'relative',
        '&::before':{
            top:'-14%',
            left:'-5%',
            position:'absolute',
            content:"''",
            width:'120%',
            height:'130%',
            zIndex:-1,
            background:'#444444',
            },
    },
})

function RecentProject() {

    const style= useStyles();
    
    return (
        <div>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item xs={11} className={style.section} >
                    <Typography variant='h3' container='div' className={style.heading} >
                        RECENT <span className={style.halfHead} > PROJECT</span>    
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={11} md={9} lg={7} spacing={10} className={style.section} container justify='center' alignItems='center' >
                    <Cards />
                </Grid>
            </Grid>
        </div>
    )
}

export default RecentProject
