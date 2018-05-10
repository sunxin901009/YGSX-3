
import React, { Component } from 'react'
import { render } from 'react-dom'


import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import TabBar from './components/TabBar/TabBar'
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import history from './history'
<<<<<<< HEAD
import Home from 'src/page/Home/Home.js'
import Kind from 'src/page/Kind/Kind.js'
import Eat from 'src/page/Eat/Eat.js'
import Mine from 'src/page/Mine/Mine.js'
import BuyCart from 'src/page/BuyCart/BuyCart.js'
import Disembark from 'src/page/Disembark/Disembark.js'
import Login from 'src/page/Login/Login.js'
<<<<<<< HEAD
=======
import Fruits from 'src/page/Lists/Fruits.js'

=======
import Home from './page/Home/Home.js'
import Kind from './page/Kind/Kind.js'
import Eat from './page/Eat/Eat.js'
import Mine from './page/Mine/Mine.js'
import BuyCart from './page/BuyCart/BuyCart.js'
import Disembark from './page/Disembark/Disembark.js'
import Login from './page/Login/Login.js'
>>>>>>> 453ae0dcda8bfb8564d82cb3193ad403cde8a78e
>>>>>>> 96953a86fd16ff93535135335b13981722493a0a
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
<<<<<<< HEAD
                        <Route path="/fruits" component={Fruits}/>
=======
                        <Route path="/login" component={Login} />
                        <Route path="/disembark" component={Disembark} />
>>>>>>> 453ae0dcda8bfb8564d82cb3193ad403cde8a78e
                        <Redirect to='/home' component={Home} />
                    </Switch>
                    <TabBar></TabBar>
                </React.Fragment>
            )} />
    </Router>
    , document.querySelector('#app'));

