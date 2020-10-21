import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import useFireStore from '../../hooks/useFireStore'
import Project from './Project'

const loadingVariant={
    animation:{
        x:[-50,20],
        y:[0,-60],
        transition:{
            x:{
                yoyo: Infinity,
                duration:0.7
            },
            y:{
                yoyo: Infinity,
                duration:0.35,
                ease:'easeOut'
            }
        }
    }
}


function GetProject({match}) {
        //HERE WE PASS match.params.id
        const {docs} = useFireStore('projects', match.params.id);
        const [project, setProject] = useState();
        useEffect(()=>{
            setProject(docs[0]);
        },[docs]);

    return (
        <>
            {
                project 
                ?   <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    > 
                         <Project project={ project }/> 
                    </motion.div>
                : <div className='backdrop'><motion.div variants={loadingVariant} animate='animation' className='loading' /></div>  
            }
        </>
    )
}

export default GetProject
