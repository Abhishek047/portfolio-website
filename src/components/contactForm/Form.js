import React, { useState } from 'react'
import {motion, useCycle} from 'framer-motion'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { validateEmail } from '../../utils/format'
import emailjs from 'emailjs-com'

const useStyles = makeStyles(theme =>({
    container:{
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    },
    errorMsg:{
        padding:'10px 20px',
        borderRadius:'10px',
        background:'rgba(255,61,0, 0.2)',
        border:`2px solid ${theme.palette.secondary.main}`,
    },
    successMsg:{
        padding:'10px 20px',
        borderRadius:'10px',
        background:'rgba(18,248,40, 0.2)',
        border:'2px solid #16e32d',
    },
    loading:{
        width:10,
        margin:'10px auto',
        height:10,
        borderRadius:'50%',
        background:'tomato',
    }
}));

const loadVariant ={
    loading:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo: Infinity,
                duration:0.5
            },
            y:{
                yoyo: Infinity,
                duration:0.25,
                ease:'easeOut'
            }
        }
    },
    success:{
        scale:1.5,
        x:'-100vw',
        transition:{
            type:'spring',
            scale:{
                duration:0.5
            },
            x:{
                delay:0.5,
                duration:0.25,
            }
        }
    }
}

function Form() {

    const SERVICE_ID = 'service_65cd8dq';
    const TEMPLATE_ID = 'template_2j9p5v1';
    const USER_ID = 'user_7uveFlDJa4MyenX9JZTmb'
    const [animation, cycleAnimation] = useCycle('loading', 'success');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const style = useStyles();
    
    function checkForm(){

        setError('');
        // CALL SET TIME OUT TO RESET LOADING
        
        if(!name || !email || !msg){
            setError('Please Enter All Fields');
        }
        else{
            if(!validateEmail(email))
            {
                setError('Please Enter a Correct Email');
            }
            else{
                // DISPLAY LOAADING ANIMATION
                setLoading(true);
                //CREATE TEMPLATE HERE        
                let templateParams = {
                    name,
                    email,
                    msg
                };

                // SEND MESSAGE
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        cycleAnimation();
                        setTimeout(() => setLoading(false),1000);
                        setSuccess('AWESOME!! THE EMAIL HAS BEEN SENT');
                    }, function(error) {
                       console.log('FAILED...', error);
                    });
                    
                setName('');
                setEmail('');
                setMsg('');
            }
        }
        
         
    }

    return (
        <>
            <Grid item xs={9} className={style.container} container direction='column' spacing={5}>
                <Grid item >
                    <TextField 
                    variant='filled' 
                    label='Name'
                    // className={style.input}
                    color='primary' 
                    fullWidth
                    value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>

                <Grid item >
                    <TextField
                    fullWidth 
                    variant='filled' 
                    label='E-mail'
                    // className={style.input}
                    color='primary' 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>

                <Grid item>
                    <TextField 
                    fullWidth
                    variant='filled' 
                    label='Message'
                    multiline
                    rows={4}
                    // className={style.input}
                    color='primary' 
                    value={msg} onChange={(e) => setMsg(e.target.value)} />
                </Grid>

                {
                    error &&
                    (<Grid item>
                        <Typography className={style.errorMsg}>
                            {error}                            
                        </Typography>
                    </Grid>)
                }

                {
                    success &&
                    (<Grid item>
                        <Typography className={style.successMsg}>
                            {success}                            
                        </Typography>
                    </Grid>)
                }

                {
                    loading && 
                    (<Grid item>
                        <motion.div
                        className={style.loading}
                        variants={loadVariant}
                        animate={animation}
                        />
                    </Grid>)
                }



                <Grid item>
                    <Button variant='contained' color='primary' onClick={checkForm} >
                        SUBMIT
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Form
