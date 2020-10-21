import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion';
// import BgIcon from '../../img/Frame.png'
import RIcon from '../../../img/r_icon.png'
import NIcon from '../../../img/node_icon.png'
import EIcon from '../../../img/exp_icon.png'
import MIcon from '../../../img/mongo_icon.png'



const useStyles= makeStyles({
    row:{
        maxWidth:'100%',
    },
    boxReact:{
        background: `url(${RIcon})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height: '100%',    
        margnRight:2,
        boxShadow: '0 0 10px rgba(1,1,1,0.5)'
    },
    boxNode:{
        background: `url(${NIcon})`,
        backgroundColor:'#80bd01',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        height: '100%',    
        margnRight:2,
        boxShadow: '0 0 10px rgba(1,1,1,0.5)'
    },
    boxExp:{
        background: `url(${EIcon})`,
        backgroundColor:'white',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        height: '100%',    
        margnRight:2,
        boxShadow: '0 0 10px rgba(1,1,1,0.5)'
    },
    boxMongo:{
        background: `url(${MIcon})`,
        backgroundSize:'cover',
        backgroundColor:'#333333',
        backgroundPosition:'center',
        height: '100%',    
        margnRight:2,
        boxShadow: '0 0 10px rgba(1,1,1,0.5)'
    }
});

function Animation() {
    const style = useStyles();

    return (
        <>
            <Grid container   className="contain" direction='column' >
                <Grid item sm={4} container justify='flex-end' alignItems='stretch' className={style.row} > 
                    <Grid item sm={4}>

                        {/* TOP */}
                        
                        <motion.div
                        whileHover={{originZ:1, borderRadius: '10%',
                         scale:1.2, rotate:-10, x:-50,y:50 }}
                        className={style.boxMongo}
                        >
                        </motion.div>    
                    </Grid>
                </Grid>
                <Grid item sm={4} container justify='flex-end' alignItems='stretch' className={style.row} > 
                    {/* MID */}
                    
                    <Grid item sm={4}>
                        <motion.div
                        whileHover={{originZ:1, borderRadius: '10%',
                        scale:1.1, rotateZ:-20,rotateX:10 }}
                        className={style.boxExp}
                        >
                        </motion.div>    
                         </Grid>
                    <Grid item sm={4}></Grid>
                </Grid>
                <Grid item sm={4} container justify='flex-end' alignItems='stretch' className={style.row}> 
                    
                    {/* BOTOOM */}

                    <Grid item sm={4}>
                        <motion.div 
                        whileHover={{originZ:1, borderRadius: '10%',
                         scale:1.1, rotate:20, }}
                        className={style.boxReact}> 
                        </motion.div>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    <Grid item sm={4}>
                    <motion.div
                        whileHover={{originZ:1, borderRadius: '10%',
                         scale:1.2, rotate:-5, x:-50,y:-50 }}
                        className={style.boxNode}
                        >
                    </motion.div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default   Animation
