import React, { Component } from 'react';
import styles from './Signupform.module.css';

var classNames = require('classnames');

class Signupform extends Component {
    render() {
        return (
            <div className={classNames(styles['w-50'], styles['px-4'], styles['py-4'], styles['form-div'])}>
                <form>
                    <div className={classNames(styles['form-group'])}>
                        <label htmlFor="username" className={classNames(styles['form-label'], styles['mb-6'], styles['f-14'])}>Username</label>
                        <input type="text" name="username" id="username" className={classNames(styles['form-input'])} />
                    </div>
                    <div className={classNames(styles['form-group'])}>
                        <label htmlFor="email" className={classNames(styles['form-label'], styles['mb-6'], styles['f-14'])}>Email</label>
                        <input type="email" name="email" id="email" className={classNames(styles['form-input'])} />
                    </div>
                    <div className={classNames(styles['form-group'])}>
                        <label htmlFor="password" className={classNames(styles['form-label'], styles['mb-6'], styles['f-14'])}>Password</label>
                        <input type="password" name="password" id="password" className={classNames(styles['form-input'])} />
                    </div>
                    <div className={classNames()}>
                        <p className={classNames(styles['f-12'])}>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. <a href="#" className={classNames(styles['tooltip'])}>Learn more<span className={classNames(styles['tooltiptext'])}>Learn more about strong passwords</span></a>.</p>
                    </div>
                    <div className={classNames()}>
                        <button type="submit" className={classNames(styles['btn'], styles['btn-success'], styles['f-16'], styles['btn-lg'])}>Sign up for GitHub</button>
                    </div>
                    <div className={classNames()}>
                        <p className={classNames(styles['f-12'])}>By clicking “Sign up for GitHub”, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Statement</a>. We’ll occasionally send you account related emails.</p>
                    </div>
                </form>
            </div>
        );
    };
};

export default Signupform;