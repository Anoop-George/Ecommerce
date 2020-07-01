import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import {  Link } from 'react-router-dom';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {useDispatch} from 'react-redux';
import loginAction from '../actions/loginAction';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({user}) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  
  const dispatch = useDispatch();
 
  const loggingout=()=>{
    try{
      localStorage.setItem('flowecartuser','')
    }catch{}
    dispatch(loginAction.logout())
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
      <ListItem button >
                 <ListItemIcon>
                    <InboxIcon />
                    <Link to='/' style={{textDecoration:'null',color:'black'}}> <Typography>Home</Typography> </Link>
                    
                </ListItemIcon>
      </ListItem>

      {Number(user['id'])>=1?(      <ListItem button >
        <ListItemIcon onClick={loggingout}>
       
          <HowToRegIcon/> <Typography>Log out</Typography>
          
       </ListItemIcon>
      </ListItem>
):(
        <React.Fragment>
        <ListItem button >
        <ListItemIcon>
       
          <HowToRegIcon/><Link to='/Signup' style={{textDecoration:'null',color:'black'}}> <Typography>Signup</Typography>
           </Link>
       </ListItemIcon>
</ListItem>
<ListItem button >
        <ListItemIcon>
       
          <HowToRegIcon/><Link to='/SignIn' style={{textDecoration:'null',color:'black'}}> <Typography>Log in </Typography>
           </Link>
       </ListItemIcon>
</ListItem>
        </React.Fragment>
      )}
      <ListItem button >
                 <ListItemIcon>
                    
                    <MailIcon/> <Typography>Contact us</Typography>
                </ListItemIcon>
      </ListItem>
    
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}></MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
