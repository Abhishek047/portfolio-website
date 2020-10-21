import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import RightArrow from '@material-ui/icons/ArrowRight'

const useStyles = makeStyles(theme=>  ({
    heading:{
        margin:'11vh 0',
        fontSize: 'min(1.5em, 6vw)',
        position:'relative',
    },
    container:{
        marginTop:60,
        padding: '0 30px 30px 30px',
        height:'fit-content',
        position:'relative',
        zIndex:1,
        boxShadow: '0 0 20px 2px rgba(0,0,0,0.25)',
        [theme.breakpoints.down('sm')]:{
            margin:20,
        },
        '&::before':{
            content:"''",
            position:'absolute',
            width:'70%',
            top:'5%',
            left:'12%',
            height:'110%',
            border: '5px solid black',
            opacity:'0.2',
            transform: 'rotate(20deg)',
            zIndex:-1,
            [theme.breakpoints.down('sm')]:{
              height:'70%',
              width:'80%',
              transform: 'rotate(15deg)',
            },
        },
        '&::after':{
            content:"''",
            position:'absolute',
            width:'70%',
            top:'5%',
            left:'12%',
            height:'110%',
            zIndex:-1,
            border: '5px solid black',
            opacity:'0.2',
            transform: 'rotate(40deg)',
            [theme.breakpoints.down('sm')]:{
                height:'70%',
                width:'80%',
                transform: 'rotate(5deg)',
              },
        }
    },
    btn:{
        marginRight:20,
    }
}));

function Details() {

    const style =useStyles();

    return (
        <>
        <Grid item container xs={10} className={style.container} justify='center' >
            <Grid item  >
                <Typography variant='body1' container='p' className={style.heading} >
                    Hi, My name is Abhishek, I am from Delhi, India. I like to build website, mostly i use React for the frontend.
                    I like to use <strong>MERN Stack</strong>. I won't drag this long, and I know experience speaks more so here you can see my works and my resume too.   
                </Typography>          
            </Grid>
            <Grid item container direction='row' spacing={3}>
                <Grid item>
                    <Link to='/portfolio-website/projects' >
                        <Button
                        variant='contained'
                        endIcon={<RightArrow />}
                        color='primary'
                        className={style.btn}
                        >
                            Projects
                        </Button>
                    </Link>
                </Grid>
                <Grid item >
                    <Button
                    color='primary'
                    variant='contained'
                    endIcon={<RightArrow />}
                    className={style.btn}
                    >
                        Resume
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Details
