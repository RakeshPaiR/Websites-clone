import React, { Component } from 'react'
import Landing from './pages/Landing/Landing'
import Navbar from './components/Navbar/Navbar'

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
            </div>
        )
    }
}

export default Main;