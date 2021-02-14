import React from 'react';

import { FilePicker, Button } from 'evergreen-ui'
import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'

export default function AddPage() {

  return (
    <Layout>
        <Container>
        <h2>Upload New File <Emoji>✏️</Emoji></h2>
        
        <div style={{textAlign: 'center', alignItems: 'center', width: '100%'}}>
            <FilePicker multiple width={420} height={40} marginBottom={32} />
        </div>

        <div style={{height: '80px'}}></div>
        
    </Container>
    </Layout>
  );
}
