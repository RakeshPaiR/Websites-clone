import React, { Component } from 'react'
import styles from './Navbar.module.css'

var classNames = require('classnames');

class Navbar extends Component {
    render() {
        return (
            <div className={classNames(styles['navbar'], styles['text-white'], styles['center'])}>
                <div className={classNames(styles['navbar-item'])}>
                    <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Why Github? <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></p>
                    <div className={classNames(styles['dropdown'])}>
                        <p className={classNames(styles['bold'])}>Features</p>
                        <p>Code review</p>
                        <p>Project management</p>
                        <p>Integrations</p>
                        <p>Actions</p>
                        <p>Packages</p>
                        <p>Security</p>
                        <p>Team management</p>
                        <p>Hosting</p>
                        <hr></hr>
                        <p className={classNames(styles['bold'])}>Customer stories</p>
                        <p className={classNames(styles['bold'])}>Security</p>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Team</p>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Enterprise</p>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Explore <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></p>
                    <div className={classNames(styles['dropdown'])}>
                        <p className={classNames(styles['bold'])}>Features</p>
                        <p>Explore Github</p>
                        <hr></hr>
                        <p>Topics</p>
                        <p>Collections</p>
                        <p>Trending</p>
                        <p>Learning Lab</p>
                        <p>Open source guides</p>
                        <hr></hr>
                        <p>Connect with others</p>
                        <p>Events</p>
                        <p>Community Forum</p>
                        <p>Github Education</p>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Marketplace</p>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Pricing <svg x="0px" y="0px" viewBox="0 0 14 8"><path d="M1,1l6.2,6L13,1"></path></svg></p>
                    <div className={classNames(styles['dropdown'])}>
                        <p className={classNames(styles['bold'])}>Plans</p>
                        <p>Compare plans</p>
                        <p>Contact sales</p>
                        <hr></hr>
                        <p className={classNames(styles['bold'])}>Nonprofit</p>
                        <p className={classNames(styles['bold'])}>Education</p>
                    </div>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <input type="text" placeholder="Search Github"></input>
                    <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash"></img>
                </div>
                <div className={classNames(styles['navbar-item'])}>
                    <p>Sign in</p>
                </div>
                <div className={classNames(styles['navbar-item'], styles['white-border'])}>
                    <span>Sign up</span>
                </div>
            </div >
        )
    }
}

export default Navbar;