import React from 'react'
import { Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import  Img from '../../img/img.jpg'
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
    card:{
        borderRadius:10,
        width:'100%',
        position:'relative',
        margin:'20px 0 50px',
        boxShadow:' 0 0 10px 2px rgba(0,0,0, 0.4)',
    },
    media:{
        height:190,
        margin:13,
        borderRadius:10,
        background:`url(${Img}) `,
        backgroundSize:'cover',
        backgroundPosition:'center',
        
    },
    content:{
        cursor:'default',
    },
    title:{
        textTransform:'capitalize',
        marginBottom:'20px',
        overflow:'visible',
        color:'#fff',
        position:'relative',
        width:'fit-content',
        zIndex:1,
        '&::after':{
            content:"''",
            position:'absolute',
            width:'60%',
            height:'5px',
            zIndex:-1,
            opacity:0.7,
            backgroundColor:'tomato',
            borderRadius:'10px',
            bottom:'-10%',
            right:'-20%',
        }
    },
    text:{
        height:'100px',
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

function ProjectCard({projectItem}) {
    
    const style = useStyles();
    
    return (
        <>
            <Card className={style.card } >
                <CardActionArea className={style.content}>
                    <CardMedia
                    image={projectItem.url}
                    title={projectItem.url}
                    className={style.media}
                    />
                    <CardContent className={style.text}>
                        <Typography variant='h5' container='div' className={style.title}>
                            {projectItem.project.title}
                        </Typography>
                        <Typography variant='body1' container='p'>
                           {projectItem.project.shortDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={style.footer} >
                    <Link to={`/projects/${projectItem.id}`}>
                        <Button variant="contained" color="primary">
                            View Project
                        </Button>
                    </Link>
                </CardActions>
            </Card>
  
        </>
    )
}

export default ProjectCard
