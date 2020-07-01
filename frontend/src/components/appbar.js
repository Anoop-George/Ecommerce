import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Cart from './cart';
import TemporaryDrawer from './appbarDrawer'
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux';
import loginAction from '../actions/loginAction';

const useStyles = makeStyles((theme) => ({
  root: {
   width:'100%',
   marginBottom:'55px'
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:'sofia',
    fontSize:'18px'
  },
}));

export default function AppBars() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(state=>state.userReducer.user);

  useEffect(()=>{
      
    try{
     let userlocal =  localStorage.getItem('flowecartuser')
    if(userlocal !== null){
      dispatch(loginAction.userdata(JSON.parse(userlocal)))
    }
    
    }catch{
      
    }
  },[]);
  
  return (
    <div className={classes.root}>
      
      <Grid container  >
        <Grid item xs={12} sm={12}>
      <AppBar position='fixed'  >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
                <TemporaryDrawer user={user} />
            
          </IconButton>
          
          <Typography variant='body1' className={classes.title}>
           FLOWER SHOP
          </Typography>
         
          {Number(user['id'])>=1?(<Typography variant='caption'>
          Hi {user['name']}
          </Typography>):( <Typography  variant='caption' >
           Hi Guest
          </Typography>)}
          
         
          <Grid item align='right'>
          <Cart />
          </Grid>
        </Toolbar>
      </AppBar>
      </Grid>
      </Grid>
    </div>
  );
}
