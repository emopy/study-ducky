import React from 'react';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'

import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-2.png'

import './styles/upload.css'

import UploadNotesForm from "../components/UploadNotesForm";


export default function UploadPage() {

  return (
    <Layout>
        <div id="uploadPage" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0px',
        }}
        >
        <Navbar/>
        <Container><FadeIn>

        <h1>Upload Files <Emoji symbol="✏️"/></h1><br/>

        <p>hi</p>
        <UploadNotesForm/>
        </FadeIn></Container>
        </div>
    </Layout>
  );
}
