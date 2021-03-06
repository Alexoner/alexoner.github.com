import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://github.com/alexoner"
                 target="_blank">
                <i className="fa fa-github"/> View on Github
              </a>
            </p>
            {
              /*
               *
            <GithubButton user="alexoner"
                          repo="react-redux-universal-hot-example"
                          type="star"
                          width={160}
                          height={30}
                          count large/>
            <GithubButton user="alexoner"
                          repo="react-redux-universal-hot-example"
                          type="fork"
                          width={160}
                          height={30}
                          count large/>
               *
               */
            }

            <p className={styles.humility}>
              Created and maintained by <a href="alexoner.github.io" target="_blank">@alexoner</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>

          <h3>Interested Fields</h3>

          <dl>
            <dt>Artificial Intelligence</dt>
            <dd>
              <code>Mathematical derivation</code> of <code>Machine Learning</code> algorithms:<a href="http://alexoner.github.io/AI-cheat-sheet/">AI-cheat-sheet</a>
            </dd>
            <dd>
              <code>Implementation</code> of some algorithms:<a href="https://github.com/Alexoner/mooc/tree/cs231n/cs231n">CS231n</a>, <a href="">Pattern Recognition and Machine Learning</a>
            </dd>
            <dt>MOOC</dt>
            <dd>
              Course <code>solutions</code> to Massive Open Online Courses from Coursera, EdX, Standford and so on. Projects:
                <a href="https://github.com/Alexoner/mooc.git">mooc</a>
            </dd>
            <dt>Web crawling</dt>
            <dd>
              web-crawlers collection:<a href="https://github.com/Alexoner/web-crawlers">web-crawlers</a>
            </dd>
            <dd>Vertical searching</dd>
            <dt>Front-end technology</dt>
            <dd>
              The <Link to="/widgets">react components</Link> demonstrates how to fetch data asynchronously from
              some source that is needed to complete the server-side rendering. <code>Widgets.js</code>'s
              <code>asyncConnect()</code> function is called before the widgets page is loaded, on either the server
              or the client, allowing all the widget data to be loaded and ready for the page to render.
            </dd>
            <dt>*NIX scripting skills and snippets</dt>
            <dd>
              The <a href="https://github.com/Alexoner/linux-snippet">linux-snippets</a> also demonstrates how to
              utilize linux <code>API</code> and <code>shell</code> to deal with depolying problems and other stuff.
            </dd>
            <dt>iOS Development</dt>
            <dd>
              On the <Link to="/login">iOS demo</Link> you can submit a username which will be sent to the server
              and stored in the session. Subsequent refreshes will show that you are still logged in.
            </dd>
            <dt>WebSockets / socket.io</dt>
            <dd>
              The <Link to="/chat">Chat</Link> uses the socket.io technology for real-time
              communication between clients. You need to <Link to="/login">login</Link> first.
            </dd>
          </dl>

          <h3>From the author</h3>

          <p>
            I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015,
            all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as
            quickly as they have come into it, but I personally believe that this stack is the future of web development
            and will survive for several years. I'm building my new projects like this, and I recommend that you do,
            too.
          </p>

          <p>Thanks for taking the time to check this out.</p>

          <p>– onerhao</p>
        </div>
      </div>
    );
  }
}
