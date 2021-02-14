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
            });
        });
  }, []);

  return (
    <Layout>
        <div id="explorePage" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
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

        <div style={{height: '20px'}}/>

        <div>
          {notes.map(item => {
            let pdfurl = null;
            if(item.isVideo) {
              pdfurl = item.pdfurl;
            } else if(item.isNote) {
              pdfurl = item.url;
            }
            console.log(item);
            return (
              <FileCard
                title={item.name}
                description={item.description}
                school={item.school}
                pdfurl={pdfurl}
              />
            )
          })}

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
