import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Jumbotron, Button, ResponsiveEmbed } from 'react-bootstrap';
import ScrollUpButton from 'react-scroll-up-button';
import YouTube from 'react-youtube';

import banner from 'images/piterpy4.jpg';

class Home extends Component {
    playerOnReady( event ) {
        event.target.mute();
    }
    render() {
        const playerOpts = {
            playerVars: {
                autoplay: 1
            }
        }
        return ( <div>
            <Grid className="ppy-section">
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1>Piter Py #4 <small>June 9-10, Saint-Petersburg, Russia</small></h1>
                            <p>For the third year in a row IT-Sobytie holds Python-conference - «Piter Py», which will take place on 22 and 23 April in St. Petersburg.</p>
                            <p>The aim of the conference to bring together people who care about Python to communicate and share experiences.</p>
                            <p><Button bsStyle="primary">Register now</Button></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
            <ResponsiveEmbed a16by9>
                <YouTube videoId={'dr7x_POCzsI'} opts={playerOpts} onReady={this.playerOnReady} />
            </ResponsiveEmbed>
            <Grid>
                <Row>
                    <Col md={12}>
                        <h2>We are happy to welcome everyone!</h2>
                        <Row>
                            <Col md={8} mdPush={4}>
                                <ResponsiveEmbed a16by9>
                                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL2lK53ydln6740IbnfOe51BZ5hFk4S9oo" allowFullScreen></iframe>
                                </ResponsiveEmbed>
                            </Col>
                            <Col md={4} mdPull={8}>
                                <big>These invitations are brought to you from organizers of Piter&nbsp;Py and our friends.</big>
                            </Col>
                        </Row>
                        <h2>Stay in touch</h2>
                        <Row>
                            <Col md={8}>
                                <a className="twitter-timeline" data-height="700" data-dnt="true" data-theme="light" href="https://twitter.com/PiterPy">Tweets by PiterPy</a>
                            </Col>
                            <Col md={4}>
                                <big>We are excited to here from you.</big>
                                <a href="https://twitter.com/intent/tweet?screen_name=piterpy" className="twitter-mention-button" data-size="large" data-related="" data-dnt="true" data-show-count="false">Tweet to @piterpy</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            <ScrollUpButton />
        </div> );
    }
}

export default Home;
