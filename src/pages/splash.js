import React from 'react';
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
            backgroundSize: 'cover'
        }}>
        <FadeIn>
            <img src={duckImg} style={{height: '200px'}}/>
            <h1>Study Ducky</h1>
            <h2>Note sharing made easy.</h2>
            <a href="/explore" style={{textDecoration:'none'}}>
                <Button height={40} marginTop={20}>
                    Get Started
                </Button>
            </a>

           
        </FadeIn>
        </div>
    </Layout>
  );
}
