import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/PermMedia'
import { Planet } from 'react-planet'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=> ({
    btn:{ 
        backgroundColor:'#333333',
        '&:hover':{
            backgroundColor: '#555555',    
        }
    },
    childBtn:{ 
        color:'white',
      backgroundColor: '#9257ad',
    '&:hover':{
            backgroundColor: '#9257fd',    
        }
    }
}));


function Menu() {
    const style = useStyles();

    // TOGGLE MENU
    // function handleClick(){
    //         console.log(1);
    // }

    return (
        <div     
        style={{
            position:'fixed',
            bottom:'100px',
            zIndex:10,
            left:'min(50px,10vw)',
        }}>
            <Planet
                centerContent={
                    //HERE I CAN IMPLEMENT A MUI ICON BUTTON    
                    <IconButton color='secondary' 
                    className={style.btn}
                    >
                        <MenuIcon style={{fontSize: '1em' }}/>
                    </IconButton>
                }
                //AFTER GIVING THE CENTER CONTENT WE GIVE THE OTHER PROPS
                hideOrbit
                autoClose
                orbitRadius={100}
                bounceOnClose
                rotation={145}
                mass={1}  //JITNA ZYADA UTNA DUR TAK UDENGE
                tension={500}  //JITNA KAM UTINI ARAM SE NIKLENGE, ISKI VALUE ZYADA ACHCI HAI 500 normal
                friction={15}  //JITNA KAM UTNA KUDENGE 1 MEIN INFINITE,ISKI VALUE ZYADA ACHCI HAI
                bounceDirection='BOTTOM'
            >
                {/* HERE START GIVING THE CHILD ELEMENTS */}

           <Link to='/'>
                {/* <Tooltip title='Home' placement="top"> */}
                    <IconButton 
                        // onClick={() => handleClick()} can Be USED FOR CLOSING THE MENU
                        className={style.childBtn}
                        name='Home'>
                        <HomeIcon />
                    </IconButton>
                {/* </Tooltip> */}
            </Link>

            <Link to="/contact">
                {/* <Tooltip title='Contact'   placement="top" > */}
                    <IconButton color='secondary' 
                    // onClick={() => handleClick()} can be used to turn off menu
                    className={style.childBtn}
                    name='Contact'>
                        <EmailIcon />
                    </IconButton>
                {/* </Tooltip> */}
            </Link>
            
            <Link to='/projects' >
                {/* <Tooltip title='Projets'  placement="top"> */}
                    <IconButton color='secondary' 
                    // onClick={() => handleClick()} can be used to turn off menu
                    className={style.childBtn}
                    name='Projects'>
                        <InfoIcon />
                    </IconButton>
                {/* </Tooltip> */}
            </Link>

                <div />
                <div />
                <div />
                <div />

    		</Planet>
        </div>
    )
}

export default Menu
