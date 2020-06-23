import React from 'react';
import styles from './GHteam.module.css';

var classNames = require('classnames');
function GHteam() {
    return(
        <section className={classNames(styles['GHteam'])} >
            <div className={classNames(styles['extTeam'])}>
                <div className={classNames(styles['container'], styles['team-head'])}>
                    <h4 className={classNames(styles['sect-head'])}>GitHub for teams</h4>
                    <h1 className={classNames(styles['head'])}>A better way to work together</h1>
                    <p className={classNames(styles['lead'])}>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</p>
                    <button className={classNames(styles['btn'], styles['btn-outline-primary'])}>Sign up your team <span>&#8594;</span></button>
                </div>
                <div className={classNames(styles['responsive-div'])}>
                    <div className={classNames(styles['container'], styles['content-div'])}>
                        <div className={classNames(styles['col-10'], styles['col-sm-7'], styles['img-div'])}>
                            <img src="https://github.githubassets.com/images/modules/site/home/team.svg" alt="" className={classNames(styles['lead-img'])}/>
                        </div>
                        <div className={classNames(styles['col-12'], styles['col-lg-5'])}>
                            <a href="" className={classNames(styles['d-flex'], styles['summary-block'])}>
                                <div className={classNames(styles['summary-img-div'])}>
                                    <img src="https://github.githubassets.com/images/modules/site/home/team-code.svg" alt="" className={classNames(styles['summary-img'])}/>
                                </div>
                                <div className={classNames(styles['col-10'])}>
                                    <h3>Write better code</h3>
                                    <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build.&nbsp;
                                        <span className={classNames(styles['link'])}>Learn about code review.</span>
                                    </p>
                                </div>
                                <div className={classNames(styles['col-2'], styles['rt-tri'])}>
                                    <span>&#9658;</span>
                                </div>
                            </a>
                            <a href="" className={classNames(styles['d-flex'], styles['summary-block'])}>
                                <div className={classNames(styles['summary-img-div'])}>
                                    <img src="https://github.githubassets.com/images/modules/site/home/team-chaos.svg" alt="" className={classNames(styles['summary-img'])}/>
                                </div>
                                <div className={classNames(styles['summary-content'])}>
                                    <div className={classNames(styles['col-10'])}>
                                        <h3>Manage your chaos</h3>
                                        <p>Take a deep breath. On GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved.&nbsp; 
                                            <span className={classNames(styles['link'])}>Learn about project management.</span>
                                        </p>
                                    </div>
                                    <div className={classNames(styles['col-2'], styles['tri-div'])}>
                                        <span className={classNames(styles['rt-tri'])}>&#9658;</span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className={classNames(styles['d-flex'], styles['summary-block'])}>
                                <div className={classNames(styles['summary-img-div'])}>
                                    <img src="https://github.githubassets.com/images/modules/site/home/team-tools.svg" alt="" className={classNames(styles['summary-img'])}/>
                                </div>
                                <div className={classNames(styles['col-10'])}>
                                    <h3>Find the right tools</h3>
                                    <p>Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites—then start using them in minutes.&nbsp;
                                        <span className={classNames(styles['link'])}>Learn about integrations.</span>
                                    </p>
                                </div>
                                <div className={classNames(styles['col-2'], styles['rt-tri'])}>
                                    <span>&#9658;</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles['enterprise'])}>
                <div className={classNames(styles[''])}>
                    <p className={classNames(styles['lead'], styles['enterprise-header'])}>See how the world's leading companies use GitHub Enterprise.</p>
                    <div className={classNames(styles['tile-section'])}>
                        <article className={classNames(styles['tile-article'])}>
                            <div className={classNames(styles['tile'])}>
                                <a href="">
                                    <div className={classNames(styles['tile-img-btn-div'])}>
                                        <img src="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg" alt="" className={classNames(styles['tile-img'])}/>
                                        <button className={classNames(styles['cust-story'], styles['btn'], styles['btn-primary'])}>↗</button>
                                    </div>
                                    <div className={classNames(styles['tile-content-div'])}>
                                        <h3 className={classNames(styles['tile-head'])}>MGM Resorts International</h3>
                                        <p className={classNames(styles['tile-lead'])}>Hospitality</p>
                                        <div className={classNames(styles['link'], styles['read-more'])}>
                                            <p>Read more<span className={classNames(styles['push-rt'])}>&#8594;</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </article>
                        <article className={classNames(styles['tile-article'])}>
                            <div className={classNames(styles['tile'])}>
                                <div className={classNames(styles['tile-img-btn-div'])}>
                                    <img src="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg" alt="" className={classNames(styles['tile-img'])}/>
                                    <button className={classNames(styles['cust-story'], styles['btn'], styles['btn-primary'])}>↗</button>
                                </div>
                                <div className={classNames(styles['tile-content-div'])}>
                                    <h3 className={classNames(styles['tile-head'])}>Nationwide</h3>
                                    <p className={classNames(styles['tile-lead'])}>Insurance</p>
                                    <div className={classNames(styles['link'], styles['read-more'])}>
                                        <p>Read more<span className={classNames(styles['push-rt'])}>&#8594;</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className={classNames(styles['tile-article'])}>
                            <div className={classNames(styles['tile'])}>
                                <div className={classNames(styles['tile-img-btn-div'])}>
                                    <img src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg" alt="" className={classNames(styles['tile-img'])}/>
                                    <button className={classNames(styles['cust-story'], styles['btn'], styles['btn-primary'])}>↗</button>
                                </div>
                                <div className={classNames(styles['tile-content-div'])}>
                                    <h3 className={classNames(styles['tile-head'])}>SAP</h3>
                                    <p className={classNames(styles['tile-lead'])}>Business Software</p>
                                    <div className={classNames(styles['link'], styles['read-more'])}>
                                        <p>Read more<span className={classNames(styles['push-rt'])}>&#8594;</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className={classNames(styles['tile-article'])}>
                            <div className={classNames(styles['tile'])}>
                                <div className={classNames(styles['tile-img-btn-div'])}>
                                    <img src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg" className={classNames(styles['tile-img'])} alt=""/>
                                    <button className={classNames(styles['cust-story'], styles['btn'], styles['btn-primary'])}>↗</button>
                                </div>
                                <div className={classNames(styles['tile-content-div'])}>
                                    <h3 className={classNames(styles['tile-head'])}>Spotify</h3>
                                    <p className={classNames(styles['tile-lead'])}>Technology / Streaming</p>
                                    <div className={classNames(styles['link'], styles['read-more'])}>
                                        <p>Read more<span className={classNames(styles['push-rt'])}>&#8594;</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GHteam;