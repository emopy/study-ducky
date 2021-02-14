import React, { useState, useEffect } from 'react';

import { SearchInput, Button } from 'evergreen-ui'
import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import FileCard from '../components/file-card'

import FadeIn from 'react-fade-in';
import { db } from '../firebase';

import bgImg from '../assets/bg-2.png'

import './styles/explore.css'

export default function ExplorePage() {
  const [notes, setNotes] = useState([]);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setNotes(data);
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

    db.collection("notes")
        .onSnapshot((querySnapshot) => {
          let data = [];
            querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setNotes(data);

              console.log(doc.id, " => ", doc.data());
            });
        });

    db.collection("lectures")
      .get()
      .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setNotes(data);
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

    db.collection("lectures")
        .onSnapshot((querySnapshot) => {
          let data = [];
            querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setNotes(data);

              console.log(doc.id, " => ", doc.data());
            });
        });
  }, []);

  console.log(notes);

  return (
    <Layout>
        <div id="explorePage" style={{ 
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >  
        <Container><FadeIn>

        <h1>Explore Notes <Emoji symbol="✏️"/></h1><br/>
        <div>
            <div style={{
                float: 'left',
                marginBottom: '40px',
                marginRight: '1vh',
                width: '80%'
            }}>
                <SearchInput placeholder="Search for notes..."
                    height={40}
                    width='100%'
                    fontFamily={'Avenir'}
                />
            </div>
            
            <Button 
                height={40} 
                float={'left'} 
                marginLeft={0}
                fontFamily={'Avenir'}
            >
                Search
            </Button>
        </div>
        

        <div style={{height: '20px'}}/>

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

        <div style={{height: '100px'}}/>

        </FadeIn></Container>
        </div>
    </Layout>
  );
}
