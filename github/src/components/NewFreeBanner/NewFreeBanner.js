import React from 'react';
import styles from './NewFreeBanner.module.css';

var classNames = require('classnames');

function NewFreeBanner() {
    return (
        <section>
            <div
                className={classNames(
                    styles['text-white'],
                    styles['banner'],
                    styles['bg-blue']
                )}
            >
                <span
                    className={classNames(
                        styles['label'],
                        styles['text-green']
                    )}
                >
                    New
                </span>
                <h2>GitHub is now free for teams</h2>
                <p>
                    GitHub Free gives teams private repositories with unlimited
                    collaborators at no cost. GitHub Team is now reduces to $4
                    per user/month.
                </p>
            </div>
        </section>
    );
}

export default NewFreeBanner;
