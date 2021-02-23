import React, { Component } from 'react'
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom'
import Logo from '../../../src/assets/images/logo.png'; 
import './Nav.css'

import Home from './../../pages/home/Home'
import About from './../../pages/about/About'
import Product from './../../pages/product/Product'
import Contact from './../../pages/contact/Contact'

class Nav extends Component {
    render() {
        return (
            <Route>
                <div id="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="index.html" className="logo navbar-brand"><img src={Logo} alt="logo" /></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/product">Product</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Route>
        )
    }
}
export default Nav