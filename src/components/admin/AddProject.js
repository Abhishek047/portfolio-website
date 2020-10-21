import React, { useState } from 'react'
import Project from '../project/Project'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import UploadIcon from '@material-ui/icons/PhotoCamera'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
import TextFiled from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton' 
import Upload from './Upload'


const useStyles = makeStyles(theme =>({
    container:{
        margin:20,
    },
    icon:{
        padding:'10px 15px',
        fontWeight:700,
        fontSize:'1.4em',
        cursor:'pointer',
        borderRadius:'50%',
        backgroundColor:theme.palette.primary.main,
    },
    name:{
        width:80,
        height:'fit-content',
    },
    error:{
        borderRadius:'5px',
        padding:'10px 20px',
        backgroundColor:'rgba(244,67,54,0.3)',
        border:'1px solid #f50057'
    }
}));

function AddProject() {
    //Allowed IMAGE TYPES
    const TYPES =[ 'image/jgp', 'image/jpeg', 'image/png', 'image/bmp'];
    const style = useStyles();
    
    //DEFINE ALL STATES
    const [title, setTitle] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [gitLink, setGitLink] = useState('');
    const [webLink, setWebLink] = useState('');
    const [preview, setPreview] = useState(false);
    const [skill, setSkill] = useState('');
    const [allSkill, setAllSkills] = useState([]);
    const [error, setError] = useState('');
    const [img, setImg] = useState('');
    const [upload, setUpload] = useState('');
    const [previewProject, setpreviewProject] = useState();

    //ADD SKILL FUNCTION
    function handleAdd()
    {
        if(skill !== '')
        {
            setAllSkills([...allSkill, skill]);
            setSkill('');
        }
    }

    //DELETE SKILL FUNCTION
    function handleDelete(item){
        setAllSkills(allSkill.filter((skill) => skill !== item) )
    }


    //HANDLE IMAGE InPUT
    function imgInput(e){
        let selectedFile= e.target.files[0];
        if(selectedFile && TYPES.includes(selectedFile.type)){
            // setPreview(URL.createObjectURL(selectedFile));
            setImg(selectedFile);
            setError('');
        }
        else{
            setImg(null);
            // setPreview('');
            setError('Please Select a format of \'jpg, jpeg, png, bmp\'');
        }
    }

    function displayPreview(){
        if(!img){
            setError('Please Select Image First');
        }
        else{
            if(!preview){
                const newProject = {
                    project:{
                        title,
                        longDesc,
                        allSkill,
                        webLink,
                        gitLink,
                    },
                    url:URL.createObjectURL(img),
                }
                setpreviewProject(newProject);
            }
            setError('');
            setPreview(!preview)
        }
    }


    //HANDLE SUBMIT OF THE FORM
    function handleSubmit(){
        if(title === '' || shortDesc === '' || longDesc === '' || !img || gitLink === '' || webLink === '')
            {
                setError('Please Enter All Fields');
                if(!img){
                    setError('Please Enter All Fields and Upload Image');    
                }
            }
        else{
            setError('');
            const newProject={
                title,
                shortDesc,
                longDesc,
                allSkill,
                gitLink,
                webLink,
            };
            setUpload(<Upload newProject={newProject} img={img}/>)
        }
    }


    return (
        <>

            {/* MAIN CONTAINER */}
            <Grid container direction='column' justify='center'>
                
                {/* CHILDREN */}
                {/* SECOND CONTAINER */}

                <Grid item xs={11} sm={9} 
                className={style.container}
                direction='column' container spacing={2}  >
                
                    {/* CHILDREN */}
                    {/* ITEMS */}

                    {/* HEAdING */}
                    <Grid item>
                        <Typography variant='h5' >
                            Enter Details for the Project
                        </Typography>    
                    </Grid>                      
                    <Divider />


                    {/* DYNAMIC ELEMENTS */}
                    {/* ERROR */}
                    {
                        error !== '' &&
                        <Grid item>
                            <Typography
                            className={style.error}
                            variant='body1' >
                                {error}
                            </Typography>    
                        </Grid>                      
                    }


                    {/* TITLE */}
                    <Grid item>
                        <TextFiled variant='outlined' label='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
                    </Grid>

                    {/* SHORT DESCRIPTION */}
                    <Grid item>
                        <TextFiled variant='outlined' label='Short Descrption' value={shortDesc} 
                        multiline rows={3}
                        onChange={(e)=> setShortDesc(e.target.value)} />
                    </Grid>
               
                    {/* LONG DESCRIPTION */}
                    <Grid item>
                        <TextFiled variant='outlined' label='Long Descrption' value={longDesc} 
                        multiline rows={3} fullWidth
                        onChange={(e)=> setLongDesc(e.target.value)} />
                    </Grid>

                    {/* ADDED SKILLS */}
                    {(allSkill.length !== 0) && 
                    <Grid item container direction='column' >
                        <Grid item>
                            <Typography variant='h6' >
                                Added Skills
                            </Typography>
                        </Grid>
                        {
                            // EACH SKILL
                            allSkill.map((item) => 
                            (
                                <Grid 
                                key={item}
                                container 
                                alignItems='center'
                                spacing={2} direction='row'>
                                    <Grid item>
                                        <Typography className={style.name}>
                                            {item} 
                                        </Typography>
                                        <Divider />
                                    </Grid>
                                    <Grid item>
                                        <IconButton color='secondary' onClick={()=> handleDelete(item)}>
                                            <DeleteIcon />
                                        </IconButton>              
                                    </Grid>
                                </Grid>
                            ) )
                        }
                    </Grid> 
                    }


                    {/* ADD SKILL BUTTON */}
                    <Grid item container direction='row' spacing={3} 
                    alignItems='center'>
                        <Grid item>
                            <TextFiled variant='outlined' 
                            label='Technique' value={skill} 
                            onChange={(e)=> setSkill(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <motion.div
                            whileHover={{scale:1.2, boxShadow:'0 0 10px rgba(0,0,0,0.3)'}} 
                            className={style.icon}
                            onClick={()=> handleAdd()}
                            >+</motion.div>
                        </Grid>
                    </Grid>

                    {/* WEBSITE Link  AND  Git Link */}
                    <Grid item>
                        <TextFiled variant='outlined' label='Website Link' value={webLink} onChange={(e)=> setWebLink(e.target.value)} />  
                    </Grid>

                    <Grid item>
                        <TextFiled variant='outlined' label='GitHub Link' value={gitLink} onChange={(e)=> setGitLink(e.target.value)} />  
                    </Grid>


                    {/* UPLOAD IMAGE */}
                    <Grid item >
                        <Button component='label' variant='contained' color='primary' endIcon={<UploadIcon />}>
                            <input type='file' style={{display:'none'}} onChange={imgInput}/>
                            Upload
                        </Button>
                    </Grid>
                    
                    {/* SEE PREVIEW */}
                    <Grid item >
                        <Button component='label' variant='contained' color='primary' onClick={displayPreview} >
                            Preview
                        </Button>
                    </Grid>

                    
                    {/* SUBMIT BUTTON */}
                    <Grid item>
                        <Button className={style.btn} variant='contained' 
                        onClick={() => handleSubmit()}
                        color='secondary'>
                            Submit
                        </Button>
                    </Grid>

                    {/* SHOW ON UPLOAD */}
                    <Grid item xs={12}>
                    { upload && upload  }
                    </Grid>
                </Grid>                  
                {
                    preview && 
                    <>
                    <Divider style={{marginBottom:20}}/>
                    <Typography variant='h4' container='div' style={{marginLeft:50}}>
                        PREVIEW
                    </Typography>
                    <Divider style={{marginBottom:20}}/>
                    <Project project={previewProject} />
                    </>
                }
            </Grid>
        </>
    )
}

export default AddProject
