import React, { Component } from 'react'
import { render } from 'react-dom'

import TabBar from 'src/components/TabBar/TabBar'
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import history from './history'

import Home from 'src/page/Home/Home.js'
import Kind from 'src/page/Kind/Kind.js'
import Eat from 'src/page/Eat/Eat.js'
import Mine from 'src/page/Mine/Mine.js'
import BuyCart from 'src/page/BuyCart/BuyCart.js'
import List from "./page/Kind/Kind-detail";

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

                        <Redirect to='/home' component={Home} />
                    </Switch>
                    <TabBar></TabBar>
                </React.Fragment>
            )} />
    </Router>
    , document.querySelector('#app'))