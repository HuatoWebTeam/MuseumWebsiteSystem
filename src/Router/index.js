import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Plan from '../pages/PlanIntroduce/Plan';
import ClassicCase from '../pages/ClassicCase/ClassicCase';
import About from '../pages/About/About';
import BusinessScope from '../pages/Home/BusinessScope/Details';
import RichText from '../pages/RichText/RichText';
import Product from '../pages/productCenter/product';

/***
 * 开发人员注意：
 * 
 * 添加路由之后，要在根目录scripts/routes.js 里边把路由添加进去
 */

class Routes extends Component {
    
    render() {
        
           return <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Plan" component={Plan} />
              <Route exact path="/Case" component={ClassicCase} />
              <Route exact path="/About" component={About} />
              <Route exact path="/BusinessDetail/:id" component={BusinessScope} />
              <Route exact path='/Product' component={Product} />
              <Route exact path="/RichText" component={RichText} />
              <Redirect to="/Home" />
            </Switch>;
    }
}

export default Routes;