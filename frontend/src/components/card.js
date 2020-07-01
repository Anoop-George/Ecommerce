import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useDispatch} from 'react-redux';
import cartAction from '../actions/cartAction';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 140,
  },
});

export default function MediaCard({products}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
  <React.Fragment>
  
     {products.map(item=>{
         return <Grid item xs={6} sm={3} key={item.id} align='center'>                 
             <Card className={classes.root}>
            
            <CardActionArea>
              <CardMedia
              
                className={classes.media}
                style={{height: 0, paddingTop: '60.25%'}}
                image={item.image}
                
              >
                 
              </CardMedia>
              <CardContent>
               
                <Typography  color="textSecondary" component="p">
               <strong> ${item.price}</strong> {item.name}  
                </Typography>
               
              </CardContent>
            
            </CardActionArea>

            <Button  onClick={()=>dispatch(cartAction.add(item))}  size="small" color="primary" variant='contained' style={{ margin:'5px'} } >
                + cart
              </Button>
          </Card>
          </Grid>
     })}

  </React.Fragment>
    
  );
}
