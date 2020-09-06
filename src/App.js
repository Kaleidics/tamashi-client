import React, { Component } from "react";

import { connect } from "react-redux";
import  { compose } from "redux"
import performVerifyToken from '../src/actions/authActions/performVerifyToken'

import NavBar from "../src/components/elements/NavBar";
import Home from "../src/components/pages/Home";
import Forms from "../src/components/pages/Forms";
import FormsRegister from "../src/components/pages/FormsRegister"
import Dashboard from "../src/components/pages/Dashboard";
import UniversalMessage from "../src/components/elements/UniversalMessage";

import RedirectAuthTrue from "./helpers/RedirectAuthTrue";
import RedirectPrivateRoute from "./helpers/RedirectPrivateRoute";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem('localtoken') && localStorage.getItem('authedUser')) {
            let token = localStorage.getItem('localtoken');
            this.props.dispatch(performVerifyToken(token));
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <UniversalMessage />
                    <Route path='/' component={NavBar} />
                    <Route exact path='/' component={Home} />
                    {/* <Route exact path="/signin" component={Forms} /> */}
                    {/* <Route path="/dashboard" component={Dashboard} /> */}
                    <RedirectAuthTrue authed={this.props.auth} path='/signin' component={Forms} />
                    <RedirectAuthTrue authed={this.props.auth} path='/register' component={FormsRegister} />
                    <RedirectPrivateRoute authed={this.props.auth} path='/dashboard' component={Dashboard} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.reduceAuthStatus.auth
});

export default connect(mapStateToProps)(App);
