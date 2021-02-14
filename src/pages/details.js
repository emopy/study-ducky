import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'
import PDFViewer from '../components/pdfviewer'
import { db } from '../firebase'

import { Button as ClearButton, ArrowLeftIcon } from 'evergreen-ui'
import { Badge } from 'evergreen-ui'

import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-3.png'

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

                <Row style={{marginBottom: '30px'}}>
                    <Link to='/explore'>
                    <ClearButton 
                        iconBefore={ArrowLeftIcon} 
                        height={40}
                        fontSize={16}
                        appearance={'minimal'}>
                        <span>Back to Explore</span>
                    </ClearButton>
                    </Link>   
                </Row>

                <Row style={{marginBottom: '20px'}}>
                    <h1 style={{float: 'left'}}><Emoji symbol="✏️"/> {data.title}</h1>
                </Row>

                <Row>
                    <Col xs={12} md={4}>
                        <div style={{height:'auto', overflow:'hidden' }}>
                            <a style={{margin: "auto"}}
                                    to={data.pdfurl}
                                    className="pdf-anchor d-flex justify-content-center pdf-preview">
                                <PDFViewer
                                pdfURL={data.pdfurl}
                                />
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} md={8}>

                        <p><b>School</b>: {this.state.data.school}</p>
                        <p><b>Description</b>: {this.state.data.description}</p>
                        <p><b>Popularity</b>: {this.state.data.relevance} <Emoji symbol="🌟"/></p>
                        <div>
                            <Button
                                variant="success"
                                size="sm"
                                onClick={e => this.handleUpvote(e, data.isNote, data.isVideo, data.docId)}
                                style={{
                                    marginRight: '1vw'
                                }} >
                                Upvote
                            </Button>

                            <Button
                                variant="danger"
                                size="sm"
                                onClick={e => this.handleDownvote(e, data.isNote, data.isVideo, data.docId)} >
                                Downvote
                            </Button>
                        </div>

                        <br/>

                        <a href={ this.state.data.isVideo ? this.state.data.pdfurl : this.state.data.url } target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="info"
                                size="lg" >
                                View Notes &rarr;
                            </Button>
                        </a>
                        
                    </Col>
                </Row>


                
                <Row style={{marginTop: '40px'}}>
                    <div>
                        <h3>Tags</h3>
                        <div style={{
                            maxHeight: '200px',
                            overflow: 'scroll'
                        }}>
                        {this.state.data.keywords && this.state.data.keywords.map(keyword => {
                            return <Badge color="teal" marginRight={8}>{keyword}</Badge>
                        })}
                        </div>
                    </div>
                </Row>

                </FadeIn></Container>
                </div>
            </Layout>
        );
    }
}

export default Details;
