import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Startpage from './StartpageComponent';

class Main extends Component {
    render() {
        return (
            <Startpage />
        );
    };
};

export default Main;