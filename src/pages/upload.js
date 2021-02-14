import React from 'react';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'

import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-2.png'

import './styles/upload.css'

import UploadNotesForm from "../components/UploadNotesForm";
import UploadLecturesForm from "../components/UploadLecturesForm";


class UploadPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tabClicked: 1};
      }
    
      clickButton1() {
        this.setState({
         tabClicked: 1
        });
      }
    
      clickButton2() {
        this.setState({
         tabClicked: 2
        });
      }

      render() {
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

                <p><a onClick = {() => { this.clickButton1(); }}> Upload Notes </a></p>
                <p><a onClick = {() => { this.clickButton2(); }}> Upload Lecture </a></p>

                <div>
                {(this.state.tabClicked == 1) && (
                    <UploadNotesForm/>
                )}

                {(this.state.tabClicked == 2) && (
                    <UploadLecturesForm/>
                )}

                </div>

                
                
                </FadeIn></Container>
                </div>
            </Layout>
        );
    }
}

export default UploadPage;