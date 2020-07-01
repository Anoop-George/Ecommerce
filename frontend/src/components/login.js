import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import logiAction from '../actions/loginAction';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
    const [email,setEmail] = useState('')
    const [pass,setPass]=useState('');
    const[message,setMessage] = useState(null);
    const dispatch = useDispatch();
    
    const handlesubmit=()=>{

        axios.post('account/token/login/',
        {'email':email,'password':pass})
        .then((res)=>{
          
         axios.get('account/users/me',{headers: {'Authorization': `Token ${res.data.auth_token}`} })
         .then(res=>{dispatch(logiAction.userdata(res.data));
          try{
            localStorage.setItem('flowecartuser',JSON.stringify(res.data))
          }catch{}
          
        })
         .catch()
        
         setMessage('You are loggedin')})
        .catch(()=>setMessage('Error try again '))
   }
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
            label="Email Address"
            value={email}
            autoComplete="email"
            autoFocus
          />
          <TextField
           onChange={(e)=>setPass(e.target.value)}
            value={pass}
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            label="Password"
            type="password"
           
            autoComplete="current-password"
          />
          
          <Button
            onClick={handlesubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
  {message?(<Typography color='secondary'>{message}</Typography>):(null)}
              
            </Grid>
            <Grid item>
              <Link to='/Signup'>
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}