import React, { Component } from 'react'
import styles from './Navbar.module.css'

var classNames = require('classnames');

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuBarToggle: false,
        }
    }
    toggleMenuBar = () => {
        this.setState(
            { menuBarToggle: !this.state.menuBarToggle }
        );
    }
    render() {
        let { menuBarToggle } = this.state;
        return (
            <div className={classNames(styles['navbar'], styles['text-white'], styles['center'])}>
                <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Why Github? <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></a>
                    <div className={classNames(styles['dropdown'], styles['box-shadow'])}>
                        <a href="#" className={classNames(styles['bold'])}>Features</a>
                        <a href="#">Code review</a>
                        <a href="#">Project management</a>
                        <a href="#">Integrations</a>
                        <a href="#">Actions</a>
                        <a href="#">Packages</a>
                        <a href="#">Security</a>
                        <a href="#">Team management</a>
                        <a href="#">Hosting</a>
                        <hr></hr>
                        <a href="#" className={classNames(styles['bold'])}>Customer stories</a>
                        <a href="#" className={classNames(styles['bold'])}>Security</a>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Team</a>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Enterprise</a>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Explore <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></a>
                    <div className={classNames(styles['dropdown'], styles['box-shadow'])}>
                        <a href="#" className={classNames(styles['bold'])}>Features</a>
                        <a href="#">Explore Github</a>
                        <hr></hr>
                        <a href="#">Topics</a>
                        <a href="#">Collections</a>
                        <a href="#">Trending</a>
                        <a href="#">Learning Lab</a>
                        <a href="#">Open source guides</a>
                        <hr></hr>
                        <a href="#">Connect with others</a>
                        <a href="#">Events</a>
                        <a href="#">Community Forum</a>
                        <a href="#">Github Education</a>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Marketplace</a>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Pricing <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></a>
                    <div className={classNames(styles['dropdown'], styles['box-shadow'])}>
                        <a href="#" className={classNames(styles['bold'])}>Plans</a>
                        <a href="#">Compare plans</a>
                        <a href="#">Contact sales</a>
                        <hr></hr>
                        <a href="#" className={classNames(styles['bold'])}>Nonprofit</a>
                        <a href="#" className={classNames(styles['bold'])}>Education</a>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <input type="text" placeholder="Search Github"></input>
                    <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash"></img>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <a href="#">Sign in</a>
                </div>
                <div className={classNames(styles['navbar-mobile'])}>
                    <div className={classNames(styles['navbar-signup'], styles['navbar-item'], styles['white-border'])}>
                        <span>Sign up</span>
                    </div>
                    <div className={classNames(styles['navbar-item'], styles['hamberger'])} onClick={this.toggleMenuBar}>
                        <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
                    </div>
                </div>
                {menuBarToggle &&
                    <div className={classNames(styles['sidebar'], styles['box-shadow'])}>
                        <div className={classNames(styles['close'])} onClick={this.toggleMenuBar}>
                            <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 24 24" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>
                        </div>
                        <hr></hr>
                        <a href="#" >Why Github?</a>
                        <hr></hr>
                        <a href="#" >Team</a>
                        <hr></hr>
                        <a href="#" >Enterprise</a>
                        <hr></hr>
                        <a href="#" >Explore</a>
                        <hr></hr>
                        <a href="#" >Marketplace</a>
                        <hr></hr>
                        <a href="#" >Pricing</a>
                        <hr></hr>
                    </div>
                }
            </div >
        )
    }
}

export default Navbar;