import React,{useEffect,useState} from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import cartAction from '../actions/cartAction';
import {useDispatch} from 'react-redux';



function Payment(props) {
    const [amount,setAmount] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(props.location.state){setAmount(props.location.state.amount)}
    },[]);
    const [open, setOpen] = useState(false);

    const successhandler = (details, data)=>{
        setOpen(true);
        dispatch(cartAction.removeall());
        localStorage.clear();
    };
    

    return (
        <Grid container direction="row" justify="center"alignItems="center" style={{marginTop:'30px'}}>
            <Grid item xs={11} sm={6}>
                {amount!=0?(
                    <PayPalButton
                    amount={amount}
                    currency='USD'
                    onSuccess={(details, data) => successhandler(details, data)}
                    shippingPreference='NO_SHIPPING'
                    options={{
                      clientId: 'need id here'
                    }}
                />
                ):(<Paper> 
                    <Typography align='center' variant="h6" gutterBottom style={{padding:'9px'}}>
                    Empty Cart
                    </Typography>
                  </Paper>)}

                  {open?(<Paper> 
                    <Typography variant="h6" align='center' gutterBottom style={{padding:'9px',color:'green'}}>
                    Payment is successfull , we will contact you for delivary
                    </Typography>
                  </Paper>):(null)}
            </Grid>
        
        </Grid>
    )
}

export default Payment
