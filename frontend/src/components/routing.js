import React from 'react';
import FullWidthGrid from './Outline';
import {Route,Switch} from 'react-router-dom'
import AppBars from './appbar'
import CartDetails from './cartDetails';
import Payment from './payment';
import SignUp from './signup';
import SignIn from './login'
function Routing() {
    return (
        <React.Fragment>
             <AppBars/>
            <Switch>
            <Route exact path="/" component={FullWidthGrid}/>
            <Route exact path="/CartDetails" component={CartDetails}/>
            <Route exact path="/Payment" component={Payment}/>
            <Route exact path="/Signup" component={SignUp}/>
            <Route exact path="/SignIn" component={SignIn}/>

            </Switch>
        </React.Fragment>
    )
}

export default Routing
