import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';




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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [adress,setAdress]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage] = useState(null)
    const [err,setErr] = useState([]);
    
const handlesubmit = () =>{
 
     axios.post('account/users/',
     {'email':email,'username':name,'adress':adress,'phone':phone,'name':name,'password':password})
     .then(()=>{
      setName('');setEmail(''); 
      setMessage('Account has been created,you are now able to login')})
     .catch(err=>{
       setMessage('above errors occured');
  
      let errarray = []
    const entries = Object.entries( err.response.data)
    entries.map(data=>(data.map(item=>{
     if(Array.isArray(item)){
      item.map(it=>errarray.push(it))
     }else{
      errarray.push(item)
     } 
    } )   ))
    setErr(errarray)
    
    })
};
  
return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(e)=>setName(e.target.value)}
                label="User Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='number'
                label="Phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
               
                label="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                fullWidth
                
                label="Delivary Address"
                value={adress}
                onChange={(e)=>setAdress(e.target.value)}
                autoComplete="adress"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
               
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
          
                           
                  
                {message?(<div style={{padding:'3px',backgroundColor:'#f7fcfb'}}>
                  { err.length>0?(err.map(item=>{return<p>{item}</p>})):(null)}
                <Typography color='secondary' variant="body2" gutterBottom> {message} </Typography>
                <Typography color='secondary' variant='caption' gutterBottom> 
                
                </Typography>

                <Button variant='outlined' color='primary' onClick={()=>{setMessage(null);setErr([])}}>dismiss</Button>
                </div>):(null)}
          </Grid>
          </Grid>
          <Button
            onClick={handlesubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/SignIn' >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}