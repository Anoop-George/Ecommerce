import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './card';
import CardWrapper from './cardWrapper'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  images:{
   
  },
  booktext:{
    fontFamily:'Sofia',
    fontSize:'30px'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={{marginTop:'2px'}} spacing={3} direction="row" justify="center" alignItems="flex-start">
        
        <Grid item >
          <CardWrapper/>
        </Grid>

        <Grid item xs={12} sm={12}>
          @copyright
        </Grid>
      </Grid>
    </div>
  );
}
