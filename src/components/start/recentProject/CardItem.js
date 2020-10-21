import React from 'react'
import { Card, CardMedia, Grid,CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import  Img from '../../../img/img.jpg'
import  Ghost from '../../../img/Ghost.svg'

const useStyles = makeStyles({
    card:{
        borderRadius:10,
        width:'100%',
        position:'relative',
        margin:'10px 0 50px',
        boxShadow:' 0 0 20px 3px rgba(0,0,0, 0.25)',
        overflow:'visible',
        '&::before':{
            top:'-20%',
            opacity:'0.35',
            position:'absolute',
            content:"''",
            width:'90%',
            height:'100%',
            zIndex:-1,
            background: `url(${Ghost}) `,
            backgroundPosition: 'center',
            backgroundSize:'contain',
            backgroundRepeat: 'no-repeat',
        }
    },
    left:{
        '&::before':{
            // left:'-20vw',
            left:'-90%',
            transform: 'rotate(20deg)',
        }
    },
    media:{
        height:190,
        margin:13,
        borderRadius:10,
        // background:`url(${Img}) `,
        // backgroundSize:'cover',
        // backgroundPosition:'center',
        
    },
    right:{
        '&::before':{
            right:'-90%',
            transform: 'rotate(-20deg)', 
        }
    },
    title:{
        textTransform:'capitalize',
        marginBottom:'20px',
        color:'#fff',
        width:'fit-content',
        
    },
    content:{
        cursor:'default',
    },
    text:{
        backgroundColor: '#565656',
        color:'#E5E5E5',
        borderRadius: '10px 10px 0 0',
    },
    footer:{
        backgroundColor: '#565656',
        color:'#E5E5E5',
        padding:'0 0 20px 20px',
        borderRadius: '0 0 10px 10px',    
    }
});




function CardItem( {val, project} ) {

    const style = useStyles();
    return (
        <>
        <Grid item xs={12} md={10} >
            <Card className={ val === 1 ? `${style.card} ${style.left}` : 
            `${style.card} ${style.right}`}>
                <CardActionArea className={style.content}>
                    <CardMedia
                    image={project.url}
                    title={Img}
                    className={style.media}
                    />
                    <CardContent className={style.text}>
                    <Typography variant='h5' container='div' className={style.title}>
                            {project.project.title}
                        </Typography>
                        <Typography variant='body1' container='p'>
                           {project.project.shortDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={style.footer} >
                    <Link to={`/portfolio-website/projects/${project.id}`}>
                        <Button variant="contained" color="primary">
                            View Project
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>

        </>
    )
}

export default CardItem
