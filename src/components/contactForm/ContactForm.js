import React from 'react';
import {motion} from 'framer-motion'
import Grid from '@material-ui/core/Grid';
import Form from './Form'
import RightArrow from '../../img/RightArrow.svg'
import Dots from '../../img/dots.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    grid:{
        height:600,
        [theme.breakpoints.down('xs')]:{
            height:'800px',
        },
    },
    div:{
        height:'100%',
        [theme.breakpoints.down('xs')]:{
            height:'30%',
        },
        background: '#444444',
        color:"#FFFFFF",
    },
    form:{
        
        [theme.breakpoints.down('xs')]:{
            height:'70%',
        },
    },
    text:{
        fontWeight:theme.typography.fontWeightMedium,
        fontFamily:theme.typography.fontFamily,
        lineHeight:'1.5em',
        fontSize:'min(2.5em, 9vw)',
    },
    bg:{
        width:'fit-content',
        zIndex:1,
        position:'relative',
        '&::after':{
            content: "''",
            position:'absolute',
            width:50,
            height:50,
            zIndex:-2,
            opacity:0.30,
            background:`url(${Dots})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            top:'-40%',
            left:-25,
        },
        '&::before':{
            content:"''",
            zIndex:-1,
            position:'absolute',
            top:0,
            left:'-7%',
            width:'120%',
            height:'100%',
            backgroundColor:'tomato',
        }
    },
    icon:{
        width:60,
        height:50,
        marginLeft:20,
        background:`url(${RightArrow})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('xs')]:{
            transform:'rotate(90deg)' ,
            marginLeft:20,
        },
    }
}));


function ContactForm() {

    const style = useStyles();



    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5}}
        >
            <Grid container  className={style.grid} justify='center' alignItems='center' >
                <Grid className={style.div} item xs={12} sm={6} 
                container justify='center' alignItems='center' >
                    {/* <Typography variant='body1' container='div' >
                        Let's Get 
                    </Typography> */}
                    <Grid item xs={8}  >
                    <div className={`${style.text} ${style.bg}`} >Let's Get</div>
                    <div style={{display:'flex', flexFlow:'row', alignItems:'center' }} > 
                        <span className={style.text} >
                        In Touch
                        </span>
                        <div className={style.icon} >
                        </div>
                    </div>
                    {/* <Typography variant='body1' container='div' >
                        In Touch <img src={RightArrow} alt='icon' className={style.icon} />
                    </Typography> */}
                    </Grid>
                </Grid>    
                <Grid item xs={12} sm={6} container className={style.form} justify='center' alignItems='center' >
                        <Form />
                </Grid>
            </Grid>
            </motion.div>
    )
}

export default ContactForm
