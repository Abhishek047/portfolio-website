import React from 'react'
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid'
import {motion} from 'framer-motion'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useFireStore from '../../hooks/useFireStore'


const useStyles = makeStyles({
    heading:{
        margin:'8vh 0',
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
            left:'-3%',
            position:'absolute',
            content:"''",
            width:'119%',
            height:'130%',
            zIndex:-1,
            background:'#444444',
            },
    },
});


const parentContainer={
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.5,
            type:'spring',
            when:"beforeChildren",
            staggerChildren:0.2,
        }
    }
}

//CAN BE REMOVED I THINK
const cardParentVariant={
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            type:'spring',
            delay:0.2
        }
    }
};


function AllProjects() {
   
    const style = useStyles();

    //FETCH DATA


    const {docs} = useFireStore('projects');

    //USED FOR ANIMATING DELAY
    let i=0;


    return (
        <motion.div
        variants={parentContainer}
        initial='hidden'
        animate='visible'
        >
            <motion.div>
                <Grid container justify='center' direction='column' alignItems='center'>
                    <Grid item xs={11}>
                        <Typography variant='h3' container='div' className={style.heading} >
                            MY <span className={style.halfHead} > PROJECTS</span>    
                        </Typography>
                    </Grid>
                </Grid> 
            </motion.div>
                <motion.div
                variants={cardParentVariant}
                >
                    <Grid container justify='center' direction='column' alignItems='center' >
                        <Grid item xs={11} lg={9} container direction='row' spacing={4} justify='space-evenly' >
                            {
                                docs && docs.map((item) => {
                                        i=i+0.7;
                                    return(
                                            <Grid key={item.id} item xs ={12} sm={6} md={4} >
                                            <motion.div
                                            initial={{    
                                                opacity:0,
                                                scale:1.3,}}
                                            animate={{        
                                                opacity:1,
                                                scale:1,
                                                y:0,
                                                duration:0.5
                                            }}
                                            transition={{delay:0+i}} 
                                                >
                                                    <ProjectCard projectItem={item} />
                                                </motion.div>
                                            </Grid>                                                                
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </motion.div>                    
                        {/* ONLY ONE NEEDED */}
                        {/* TEMPLETE HOW A SINGLLE ITEM LOOKs */}
                        {/* <Grid item xs ={12} sm={6} md={4} >
                            <motion.div
                            variants={cardChildVariants}
                            >
                                <ProjectCard />
                            </motion.div>
                        </Grid>*/}
                    
        </motion.div>
    )
}

export default AllProjects
