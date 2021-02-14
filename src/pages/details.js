import React from 'react';

import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import Navbar from '../components/navbar'
import FileDetails from '../components/file-details'

import FadeIn from 'react-fade-in';
import bgImg from '../assets/bg-2.png'

import './styles/details.css'

class Details extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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

                <h1>Details <Emoji symbol="✏️"/></h1><br/>

                <FileDetails
                    title="title"
                    school="school"
                    description="description"
                    keywords="keywords"
                    url="url"
                />
                
                </FadeIn></Container>
                </div>
            </Layout>
        );
    }
}

export default Details;
