import React from 'react';
import styles from './Hero.module.css';
import Signupform from '../SIgnupform/Signupform';

var classNames = require('classnames');

function Hero() {
    return(
        <section className={classNames(styles['hero'])}>
            <div className={classNames(styles['container'])}>
                <div className={classNames(styles['col-md-7'], styles['text-block'])}>
                    <h1 className={classNames(styles['title'])}>Built for developers</h1>
                    <p className={classNames(styles['lead'])}>GitHub is a development platform inspired by the way you work. From <a href="">open source</a> to <a href="">business</a>, you can host and review code, manage projects, and build software alongside 50 million developers.</p>
                </div>
                <div className={classNames(styles['col-6'], styles['signupform'])}>
                    <Signupform />
                </div>
            </div>
        </section>
    );
};

export default Hero;