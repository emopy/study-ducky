import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'
import PDFViewer from '../components/pdfviewer'
import { db } from '../firebase'

import { Button } from 'evergreen-ui'


import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-2.png'

import './styles/details.css'

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.state = {
          data: {}
        }
        this.unsubRef = null;
    }

    componentDidMount() {
      let state = this.props.location.state;
      if(state) {
        let temp = state.data;
        if(temp.isNote) {
          this.unsubRef = db.collection("notes").doc(temp.docId)
              .onSnapshot((doc) => {
                this.setState({ data: doc.data() })
              });

        }

        if(temp.isVideo) {
          this.unsubRef = db.collection("videos").doc(temp.docId)
              .onSnapshot((doc) => {
                this.setState({ data: doc.data() })
              });
        }

      }
    }

    componentWillUnmount() {
      if(this.unsubRef) {
        this.unsubRef();
      }
    }

    handleUpvote = async (event, isNote, isVideo, docId) => {
      if(isNote) {
        let noteRef = await db.collection('notes').doc(docId);
        await noteRef.get()
          .then((doc) => {
            if (doc.exists) {
                let data = doc.data()
                noteRef.set({
                  relevance: data.relevance + 1
                }, { merge: true })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
      }
      if(isVideo) {
        let videoRef = await db.collection('videos').doc(docId);
        await videoRef.get()
          .then((doc) => {
            if (doc.exists) {
                let data = doc.data()
                videoRef.set({
                  relevance: data.relevance + 1
                }, { merge: true })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
      }
    }

    handleDownvote = async (event, isNote, isVideo, docId) => {
      if(isNote) {
        let noteRef = await db.collection('notes').doc(docId);
        await noteRef.get()
          .then((doc) => {
            if (doc.exists) {
                let data = doc.data()
                noteRef.set({
                  relevance: data.relevance - 1
                }, { merge: true })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
      }
      if(isVideo) {
        let videoRef = await db.collection('videos').doc(docId);
        await videoRef.get()
          .then((doc) => {
            if (doc.exists) {
                let data = doc.data()
                videoRef.set({
                  relevance: data.relevance - 1
                }, { merge: true })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
      }
    }

    render() {
        let state = this.props.location.state;
        if(!state) {
          return <Redirect to="/explore" />
        }

        let data = state.data;
        if(!data) {
          return <Redirect to="/explore" />
        }
        return (
            <Layout>
                <div id="detailsPage" style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: '0px',
                }}
                >
                <Navbar/>
                <Container><FadeIn>

                <h1><Emoji symbol="✏️"/> {data.title}</h1><br/>

                <h3>{this.state.data.school}</h3>
                <p>{this.state.data.description}</p>
                {this.state.data.keywords}
                {this.state.data.pdfurl}
                {this.state.data.relevance}
                
                <div style={{height:'auto', overflow:'hidden'}}>
                  <a style={{margin: "auto"}}
                        to={data.pdfurl}
                        className="pdf-anchor d-flex justify-content-center pdf-preview"
                  >
                    <PDFViewer
                      pdfURL={data.pdfurl}
                    />
                  </a>
                </div>

                <div>
                    <Button
                        height={40}
                        fontFamily={'Avenir'}
                        float={'center'}
                        marginRight={20}
                        onClick={e => this.handleUpvote(e, data.isNote, data.isVideo, data.docId)} >
                        Upvote
                    </Button>

                    <Button
                        height={40}
                        fontFamily={'Avenir'}
                        float={'center'}
                        onClick={e => this.handleDownvote(e, data.isNote, data.isVideo, data.docId)} >
                        Downvote
                    </Button>
                </div>

                </FadeIn></Container>
                </div>
            </Layout>
        );
    }
}

export default Details;
