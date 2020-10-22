import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Exit from '@material-ui/icons/ExitToApp';
import ProjectsIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    action:{
        color:'white',
    },
    actionMenu:{
        color:'white',
        margin:'10px 0'
    },
    drawer:{
        width:150,
        height:'100%',
        background:'#333',
        padding:'0 20px',
    },
    text:{
        color:'white',
    },
    listItem:{
        color:'#fff',
        marginBottom:20,
        position:'relative',
        zIndex:1,
        '&::after':{
            position:'absolute',
              zIndex:-1,
              content:"''",
              width:'5px',
              height:'100%',
              left:'-18px',
              bottom:0,
              borderRadius:5,
              transform: 'scale(1,0)',
              transition:'.2s all ease-out',
              background:'tomato'
        },
        '&:hover::after':{
            transform: 'scale(1,1)',
        }
    },
    active:{
        color:'#fff',
        position:'relative',
        zIndex:1,
        marginBottom:20,
        '&::after':{
            position:'absolute',
              zIndex:-1,
              content:"''",
              width:'5px',
              height:'100%',
              left:'-18px',
              bottom:0,
              borderRadius:5,
              transform: 'scale(1,1)',
              background:'tomato'
        },
      }

})

function MobileMenu() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();

    function handleToggle(){
        setOpen(!open);
    }

    const style = useStyles();
    const itemList = [
        {
            text: 'Home',
            icon: <HomeIcon color='primary' />,
            onClick : () => history.push('/'),
            path: '/'
        },
        {
            text: 'Projects',
            icon: <ProjectsIcon color='primary'/>,
            onClick : () => history.push('/projects'),
            path :'/projects'
        },
        {
            text: 'Contact',
            icon: <MailIcon color='primary'/>,
            onClick : () => history.push('/contact'),
            path: '/contact'
        },
    ];

    return (
        <>
        <IconButton className={style.action} onClick={handleToggle}>
            <MenuIcon />
        </IconButton>   
        <Drawer anchor='right' open={open} onClose={handleToggle} >
            <List className={style.drawer} >
                <IconButton className={style.actionMenu} onClick={handleToggle}>
                    <Exit />
                </IconButton>
                <Divider />
                {
                    itemList.map((item) => {
                        const { text, icon, onClick, path } = item;
                        return(
                                <ListItem className={location.pathname === path ? `${style.active}` : `${style.listItem}`} button key={text} onClick={onClick} >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText className={style.text} primary={text} />
                                </ListItem>
                        )
                    })
                }
            </List>
        </Drawer>
        </>
    )
}

export default MobileMenu
