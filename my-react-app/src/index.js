
import React, { Component } from 'react'
import { render } from 'react-dom'
import TabBar from './components/TabBar/TabBar'
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'
// import './page/Home'

import history from './history'

import Home from './page/Home/Home.js'
import Kind from './page/Kind/Kind.js'
import Eat from './page/Eat/Eat.js'
import Mine from './page/Mine/Mine.js'
import BuyCart from './page/BuyCart/BuyCart.js'

import Disembark from './page/Disembark/Disembark'
import Login from './page/Login/Login'


import List from "./page/Kind/Kind-detail.js";
// import Login from "src/page/Login/Login.js";
// import Disembark from "src/page/Disembark/Disembark.js";

render(
    <Router history={history}>
        <Route
            render={({ location }) => (
                <React.Fragment>
                    <Switch>

                        <Route path="/home" component={Home} />
                        <Route path="/kind" component={Kind} />
                        <Route path="/eat" component={Eat} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/buycart" component={BuyCart} />
                        <Route path="/list" component={List} />
                        <Route path="/login" component={Login} />
                        <Route path="/disembark" component={Disembark} />
                        <Redirect to='/home' component={Home} />


                    </Switch>
                    <TabBar></TabBar>
                </React.Fragment>
            )} />
    </Router>
    , document.querySelector('#app'))

