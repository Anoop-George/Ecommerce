import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import cartAction from '../actions/cartAction';
import Button from '@material-ui/core/Button';
import {  Link } from 'react-router-dom';




function CartDetails() {

let items = useSelector(state=>state.cart.items);
const dispatch = useDispatch();
const [amount,setAmount]=useState(0);


useEffect(()=>{
    
    if(items.length==0){
        try{
            const serializedState = localStorage.getItem('itemsofflowercart');
            const datas = JSON.parse(serializedState);
            if (datas.length>0) {
               datas.map(item=>{dispatch(cartAction.add(item))});
            }
        }catch{console.log('err')}
    };
     
    },[]);

    
useEffect(()=>{
    let sum = items.map(item=>{return Number(item['price'])*Number(item['quantity'])})
   
       if(sum.length>=1){
        let total = sum.reduce((a,b)=>{return a+b})
        setAmount(total)
        
    }
    else{
        setAmount(0)
    }
    if(items.length>=0){  
        localStorage.clear();
        localStorage.setItem('itemsofflowercart', JSON.stringify(items));
      }
      
   
},[items]);




    return (
        <Grid container style={{marginTop:'10px'}} direction="row" justify="center"  alignItems="center">
          
            <Grid item xs={12} sm={5}>
                <Typography variant="h5" gutterBottom style={{padding:'3px'}}>Shopping Cart </Typography>
                {items.map(product=>{
                    return <Paper key={product.id}> 
                        <Grid container  direction="row" justify="center"  alignItems="center">
                        
                        <Grid item xs={3} sm={3}>
                            <img src={product.image} style={{maxWidth:'90px',maxHeight:'90px',padding:'3px',marginTop:'4px'}}  />
                        </Grid>
                        <Grid item xs={8} sm={9}>
                            
                            <Typography variant="overline" display="block" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography color='primary' variant="h6" gutterBottom style={{marginLeft:'9px',float:'left'}}> ${product.price} </Typography>
                           
                            <Button color='secondary' onClick={()=>{dispatch(cartAction.increment(product))}} style={{padding:'3px',float:'right'}}> + </Button>
                            <Typography  variant="subtitle1" gutterBottom style={{padding:'3px',float:'right'}}>{product.quantity} </Typography> 
                            {product.quantity >=1 ?(
                             <Button color='secondary' onClick={()=>{dispatch(cartAction.decrement(product))}}  style={{padding:'3px',float:'right'}}> - </Button>

                            ):(null)}     
                            
                        </Grid>
                        <Typography variant="caption" display="block" gutterBottom >Sold by: FlowerCarts</Typography>
                        <Button color='primary' onClick={()=>{dispatch(cartAction.remove(product))}} style={{float:'right',marginLeft:'18%'}}> delete </Button>
                           
                    </Grid>
                    

                    
                    </Paper>
                })}

            </Grid>
            <Grid item xs={12} sm={3} align="center" >
                {items.length>0?(
                    <React.Fragment>
                    <Paper>
                    <Typography style={{padding:'6px'}} variant="h6" display="block" gutterBottom> Total </Typography>
                    <Typography style={{padding:'10px'}} variant="h5" display="block" gutterBottom> {amount} </Typography>       
                    </Paper>
                
                    <Link style={{ textDecoration: 'none' }} to={{pathname:"/Payment",state: {
                             amount: amount }}}>
                                                
                        <Button variant="contained" style={{backgroundColor:'#5dd916',color:'white'}} >proceed to checkout </Button>
                    </Link>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                    <Paper>
                    <Typography style={{padding:'6px'}} variant="h6" display="block" gutterBottom> Your Cart is empty </Typography>
                    </Paper>
                
                    </React.Fragment>

                )}
                
            </Grid>
            
         </Grid>
    )
}

export default CartDetails
