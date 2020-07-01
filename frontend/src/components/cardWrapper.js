import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MediaCard from './card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function CardWrapper() {
  
  const [products,setProducts] = useState([]);
  const [pagenumber,setPagenumber] = useState(1);
  
  useEffect(()=>{
    axios.get(`products/?page=${pagenumber}`).then(result=>{
    setProducts(result.data.results)
    
    })
    .catch()
  },[pagenumber])
  
    return (
        <React.Fragment>
           

          <Grid container   spacing={3}  justify="center" alignItems="center" direction="row">
          <Grid container   spacing={0}  justify="center" alignItems="center" direction="row">

          <Grid item xs={12} sm={12} style={{backgroundImage:"linear-gradient(to right, lightblue , yellow)" }} >
          <img src='/media/images/be.png' float="left" style={{maxHeight:'150px',width:'auto',float:'left' }}></img>
          <Typography align='center' style={{fontFamily:'Averia Sans Libre',marginTop:'16px',fontSize:'32px',color:'blue'}}>FRESH FLOWERS</Typography>
          <Typography align='center' style={{fontFamily:'Averia Sans Libre',marginTop:'16px',fontSize:'14px',color:'blue'}}>make good days</Typography>

          </Grid>
           
            </Grid>
           <MediaCard products={products} />

          <Grid item lg={6} sm={11} align='center'>
         
            {pagenumber > 1?( <Button size="small"  style={{margin:'3px'}} onClick={()=>setPagenumber(prev=>prev-1)} variant="contained" color="secondary">
            previous
            </Button> ):(null)} 
            <Button size="small" style={{margin:'3px',backgroundColor:'#e32e0e',color:'white'}} onClick={()=>setPagenumber(prev=>prev+1)} variant="contained" >
            next
            </Button>
          </Grid>

            </Grid> 
              
        </React.Fragment>
    )
}

export default CardWrapper
