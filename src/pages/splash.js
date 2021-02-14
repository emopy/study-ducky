import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../templates/layout'

import FadeIn from 'react-fade-in';
import { Button } from 'evergreen-ui'

import './styles/splash.css'

import bgImg from '../assets/splash-bg.png'
import duckImg from '../assets/duck.png'

export default function SplashPage() {

  return (
    <Layout>
        <div id="splash-page" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        <FadeIn>
            <img id='duck-float' src={duckImg} style={{height: '200px'}}/>
            <h1>Study Ducky</h1>
            <h2 style={{ color: '#5c7370'}}>Note sharing made easy.</h2>
            <Link to="/explore" style={{textDecoration:'none'}}>
                <Button
                    height={60}
                    marginTop={20}
                    fontSize={18}
                    fontFamily={'Avenir'}
                >
                    Get Started &rarr;
                </Button>
            </Link>
        </FadeIn>
        </div>
    </Layout>
  );
}
