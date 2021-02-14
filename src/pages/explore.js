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
  const [query, setQuery] = useState("");

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

    db.collection("videos")
      .get()
      .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setLectures(data);
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

    db.collection("videos")
        .onSnapshot((querySnapshot) => {
          let data = [];
            querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setLectures(data);
            });
        });
  }, []);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  let merged = notes.concat(lectures)
  merged = shuffle(merged);

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

        <div className="">
          <div className="">
            {merged.map(item => {
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
          </div>
        </div>

        <div style={{height: '100px'}}/>

        </FadeIn></Container>
        </div>
    </Layout>
  );
}
