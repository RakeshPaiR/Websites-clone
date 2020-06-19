import React, { Component } from 'react';
import './Signupform.css';

class Signupform extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" className="form-input" />
                </form>
            </div>
        );
    };
};

export default Signupform;