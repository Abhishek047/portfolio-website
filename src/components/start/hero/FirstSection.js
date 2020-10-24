import React from 'react';
import Display from './Display';
import Animation from './Animation';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
 


const useStyles = makeStyles({
    grid:{
        height:600,
    },
    div:{
        background: '#333',
        color:"#FFFFFF",
    },
});


function FirstSection() {

    const style = useStyles();

    return (
        <div>
            <Grid container  className={style.grid} >
                <Grid className={style.div} item xs={12} md={6} >
                    <Display />
                </Grid>
                <Grid item md={6} >
                    <Animation />
                </Grid>    
            </Grid>
            </div>
    )
}

export default FirstSection
