import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../templates/layout'

import FadeIn from 'react-fade-in';
import { Button, ArrowRightIcon } from 'evergreen-ui'
import { Row, Col } from 'react-bootstrap'

import './styles/splash.css'

import bgImg from '../assets/splash-bg.png'
import duckImg from '../assets/logo-icon.png'

export default function SplashPage() {

  return (
    <div>
        <div id="splash-page" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <Row style={{marginTop:'50px', width:'75%'}}>
                <Col xs={12} md={5}>
                    <img id='duck-float' src={duckImg} style={{
                        height: '360px', marginBottom: '-20px'
                    }}/>
                </Col>

                <Col xc={12} md={7}>
                    <div style={{textAlign: 'left', marginTop: '80px'}}>
                        <FadeIn>
                            <h1 style={{color: 'black', fontSize: '5rem'}}>StudyDucky</h1>
                            <h2 style={{ color: '#4a4a4a' }}>Sharing notes made easy.</h2>
                            <Link to="/explore" style={{textDecoration:'none'}}>
                                <Button
                                    height={60}
                                    marginTop={20}
                                    fontSize={20}
                                    fontFamily={'Avenir'}
                                    iconAfter={ArrowRightIcon} >
                                    Get Started
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </Col>
            </Row>

        </div>
    </div>
  );
}
