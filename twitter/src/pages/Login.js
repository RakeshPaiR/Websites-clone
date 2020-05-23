import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Startpage from '../components/Startpage';
import Header from '../components/Header';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
            </div>
        );
    };
};

export default Main;