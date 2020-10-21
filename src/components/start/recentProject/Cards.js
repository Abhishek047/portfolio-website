import React, {useEffect} from 'react'
import Card from './CardItem'
import Grid from '@material-ui/core/Grid'
import useFireStore from '../../../hooks/useFireStore'
function Cards() {

    // const dis = [1,2];
    //FIRESTORE USES COLLECTION NAME ID AND NO. OF RESULTS
    const { docs } = useFireStore('projects', '', 2);
    useEffect(()=>{
        console.log(docs);
    },[docs]);
    let i=0;
    return (
        <>        
        {
            docs && docs.map((project) => {
                i++;
                return(
                    <Grid key={project.id} item xs={12} sm={6} container justify='center' alignItems='center'  >
                        <Card  val={i} project={project} />
                    </Grid>
                )
            })
        }





            {/* <Grid item xs={4}>
                <Card />
            </Grid>
            <Grid item xs={4}>
                <Card />
            </Grid> */}
        </>
    )
}

export default Cards
