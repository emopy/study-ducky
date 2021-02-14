import React from 'react';

import { SearchInput, Button } from 'evergreen-ui'
import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import FileCard from '../components/file-card'

import FadeIn from 'react-fade-in';


export default function ExplorePage() {

  return (
    <Layout>
        <Container><FadeIn>

            
        <h2>Explore Notes <Emoji>✏️</Emoji></h2>
        <SearchInput placeholder="Search for notes..." 
            height={40} 
            marginBottom={40}
            width="100%"
        />
        <Button height={40} marginRight={16}>
          Default
        </Button>

        <div style={{height: '20px'}}></div>

        <div>

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        <FileCard 
            title="title here" 
            description="lorem ipsum"
        />

        </div>

        <div style={{height: '100px'}}></div>
        
        </FadeIn></Container>
    </Layout>
  );
}
