import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import BulletIcon from '@material-ui/icons/AssignmentTurnedIn';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ProjectBg from '../../img/ProjectBg.svg'

const useStyles = makeStyles(theme=> ({
    container:{
        margin:'20px 0',
        boxShadow:'0px 0px 15px rgba(0,0,0,0.25)',
        borderRadius:5,
        // border:'2px solid rgba(0,0,0,0.25)',
        // borderRight:'none',
        // borderBottom:'none',
    },
    imgContainer:{
        backgroundBlendMode:'multiply',
        backgroundImage:`url(${ProjectBg})`,
        background: 'linear-gradient(137deg, rgba(3,169,244,1) 0%, rgba(255,255,255,1) 100%)',
        padding:'20px 0'
    },
    img:{
        width:'60vw',
        // height:'min(60vh, 80vw)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        borderRadius:20,
        [theme.breakpoints.down('sm')]:{
            width:'90vw',
        },
    },
    body:{
        fontSize:'min(1em, 5vw)',
        marginBottom:'10px',
    },
    heading:{
        textTransform:'capitalize',
        margin:'20px 0'
    },
    action:{
        margin:'20px 0',
    },
    skill:{
        marginLeft:'10px',
    },
}));

function Project({ project }) {


    const style =useStyles();
    return (
        <>
            <Grid container justify='center' alignItems='center' >
                <Grid item xs={12} className={style.imgContainer} container justify='center' alignItems='center' >
                    <img className={style.img} src={project.url} alt ='projet img' />
                </Grid>
                <Grid item xs={11} container justify='center' alignItems='center' className={style.container}>
                    <Grid item xs={11} >
                        <Typography variant='h3' container='h3' className={style.heading} >
                            {project.project.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={7}>
                        <Typography variant='body2' container='p' className={style.body} >
                            {project.project.longDesc}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} lg={7}>
                        <List>
                            {
                                project.project.allSkill.map((skill) =>
                                    (<ListItem key={skill} disableGutters dense >
                                        <ListItemIcon>
                                            <BulletIcon color='secondary' />
                                        </ListItemIcon>
                                        <ListItemText primary={skill} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={11} container spacing={2} className={style.action} >  
                        <Grid item >
                            {
                                project.project.gitLink !== '' &&
                                <a href={project.project.gitLink}>
                                    <Button variant='contained' color='primary'>
                                        View Code
                                    </Button>
                                </a>
                            }
                        </Grid>
                        
                        <Grid item >
                            {
                                project.project.webLink !== '' &&
                                <a href={project.project.webLink}>
                                    <Button variant='contained' color='primary'>
                                        Show Website
                                    </Button>
                                </a>
                            }
                        </Grid>
                    </Grid>
                        
                </Grid>
            </Grid>
        </>
    )
}

export default Project
