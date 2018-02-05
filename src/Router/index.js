import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// 异步组件 。。 按需加载
import asyncComponent from '../pages/Components/asyncComponent';


const Home = asyncComponent(() => import('../pages/Home/Home'));
const Plan = asyncComponent(() => import('../pages/PlanIntroduce/Plan'));
const ClassicCase = asyncComponent(() => import('../pages/ClassicCase/ClassicCase'));
const About = asyncComponent(() => import('../pages/About/About'));
const BusinessScope = asyncComponent(() => import('../pages/Home/BusinessScope/Details'));
const RichText = asyncComponent(() => import('../pages/RichText/RichText'));
const Product = asyncComponent(() => import("../pages/productCenter/product"));

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