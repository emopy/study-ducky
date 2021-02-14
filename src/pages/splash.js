import React from 'react';
import Layout from '../templates/layout'

import FadeIn from 'react-fade-in';
import { Button } from 'evergreen-ui'

import './styles/splash.css'



export default function SplashPage() {

  return (
    <Layout>
        <div id="splash-page">
        <FadeIn>
            <h1>Study Ducky</h1>
            <h2>Note sharing made easy.</h2>
            <a href="/explore">
                <Button height={40} marginTop={20}>
                    Get Started
                </Button>
            </a>

        </FadeIn>
        </div>
    </Layout>
  );
}
