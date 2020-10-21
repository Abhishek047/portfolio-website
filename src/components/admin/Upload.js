import React from 'react'
import Typography from '@material-ui/core/Typography'
import useFireBase from '../../hooks/useFireBase'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    success:{
        border:'2px solid #66bb6a',
        backgroundColor: 'rgba(102,187,106, 0.5)',
        padding:10,
        margin:20,
        borderRadius:'5px',
    }
}));

function Upload({newProject, img}) {

    const {url, progress } = useFireBase(newProject, img);
    const style = useStyles();
    return (
        <>
            <Grid container spacing={2}>
                { url &&
                    <Grid item xs={12}>
                        <motion.div     
                            initial={{scale:0.6, opacity:0}}
                            animate={{scale:1.1, opacity:1}}
                            >
                                <Typography variant='h6'
                                className={style.success}
                                >
                                    ALL DONE GOOD TO GO!
                                </Typography>
                            </motion.div> 
                    </Grid>
                }
                    {
                    !url && 
                        <Grid item xs={12}>
                            <motion.div
                            style={{
                                height:'5px',
                                backgroundColor:'tomato',
                                borderRadius:'10px',
                            }}
                            initial={{width:0}}
                            animate={{width:`${progress}%`}}
                            />                            
                        </Grid>
                    }
            </Grid>
        </>
    )
}

export default Upload
