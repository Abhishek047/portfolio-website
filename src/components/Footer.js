import React from 'react'
import Grid from '@material-ui/core/Grid'
import {Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import GitIcon from '../img/Git.svg'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '../img/Facebook.svg'
import LinkedInIcon from '../img/LinkedIn.svg'
import WhatsAppIcon from '../img/WhatsApp.svg'


const useStyles = makeStyles({
    container:{
        padding:'20px 0',
        color:'white',
        backgroundColor:'#444444',
    },
    list:{
        display:'flex',
        flexFlow:'row',
    },
    listItem:{
        padding:'10px',
        color:'white',
        width:'fit-content',
        height:'fit-content',    
    },
    listIcon:{
        width:35,
        borderRadius:'50%',
        height:35,
    }
});


function Footer() {
    const style = useStyles();
    return (
        <>
         <Grid container className={style.container} >
            <Grid item xs={12} sm={6} container justify='center' alignItems='center' >
                <ul className={style.list} >
                    <motion.li 
                    whileHover={{scale: 1.2,}}
                    whileTap={{scale:0.9}}
                    className={style.listItem} >
                        <a href='https://www.google.com'>
                        <motion.img
                        whileHover={{boxShadow:'0 0 10px rgba(0,0,0,0.25)'}} 
                        src={GitIcon} alt='Github Icon' className={style.listIcon} /></a>
                    </motion.li>

                    <motion.li 
                    whileTap={{scale:0.9,}}
                    whileHover={{scale: 1.2}}
                    className={style.listItem} >
                        <a href='https://www.google.com'>
                             <motion.img src={WhatsAppIcon} 
                             whileHover={{boxShadow:'0 0 10px rgba(0,0,0,0.25)'}}
                             alt='WhatsApp Icon' className={style.listIcon} /></a>
                    </motion.li>

                    <motion.li 
                    whileTap={{scale:0.9}}
                    whileHover={{scale: 1.2}}
                    className={style.listItem} >
                        <a href='https://www.google.com'> 
                        <motion.img src={FacebookIcon}
                        whileHover={{boxShadow:'0 0 10px rgba(0,0,0,0.25)'}}
                        alt='facebook Icon' className={style.listIcon}/></a>
                    </motion.li>
                    
                    <motion.li 
                    whileTap={{scale:0.9}}
                    whileHover={{scale: 1.2,}}
                    className={style.listItem} >
                        <a href='https://www.google.com'> 
                        <motion.img src={LinkedInIcon} 
                        whileHover={{boxShadow:'0 0 10px rgba(0,0,0,0.25)'}}
                        className={style.listIcon} alt='LinkedIn Icon'/>
                        </a>
                    </motion.li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} container justify='center' alignItems='center' >
            <ul className={style.list}  style={{display:'flex', flexFlow:'column' }} >
                <li className={style.listItem} style={{display:'flex', flexFlow:'row', justifyContent:'center', alignItems:'center' }} >
                    <MailIcon color='primary' style={{marginRight:10}}/>
                    <Typography>
                        abhi.shukla0047@gmail.com 
                    </Typography>
                </li>
                <li className={style.listItem} style={{display:'flex', flexFlow:'row', justifyContent:'center', alignItems:'center' }} >
                    <PhoneIcon color='primary' style={{marginRight:10}}/>
                    <Typography>
                        +91-7905602405
                    </Typography>
                </li>
                <li className={style.listItem}>
                <Link to='/contact'>
                    <Button variant='contained' color='primary'>
                        Contact Me
                    </Button>
                </Link>
                </li>
            </ul>
            </Grid>
         </Grid>
        </>
    )
}

export default Footer
