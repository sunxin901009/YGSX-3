<<<<<<< HEAD
=======
import React, { Component } from 'react'
import { render } from 'react-dom'
>>>>>>> 5fdde48b3130c0baa58526f444389fb96b2acf80

import TabBar from 'src/components/TabBar/TabBar'
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'

<<<<<<< HEAD

import './page/Home'
=======
import history from './history'

import Home from 'src/page/Home/Home.js'
import Kind from 'src/page/Kind/Kind.js'
import Eat from 'src/page/Eat/Eat.js'
import Mine from 'src/page/Mine/Mine.js'
import BuyCart from 'src/page/BuyCart/BuyCart.js'
<<<<<<< HEAD
import Disembark from 'src/page/Disembark/Disembark.js'
import Login from 'src/page/Login/Login.js'

=======
import List from "./page/Kind/Kind-detail";
>>>>>>> 5fdde48b3130c0baa58526f444389fb96b2acf80
>>>>>>> 83d12652aeda87baa64748a8274cba54be223550

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
                        <Route path="/disembark" component={Disembark} />
                        <Route path="/login" component={Login} />
                        <Route path="/buycart" component={BuyCart} />
                        <Route path="/list" component={List} />

<<<<<<< HEAD
=======
                        <Redirect to='/home' component={Home} />
                    </Switch>
                    <TabBar></TabBar>
                </React.Fragment>
            )} />
    </Router>
    , document.querySelector('#app'))
>>>>>>> 5fdde48b3130c0baa58526f444389fb96b2acf80
