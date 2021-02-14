import React, { useState, useEffect } from 'react';

import { SearchInput, Button } from 'evergreen-ui'
import Container from '../components/container'
import Layout from '../templates/layout'
import Emoji from '../components/emoji'
import FileCard from '../components/file-card'
import Navbar from '../components/navbar'

import FadeIn from 'react-fade-in';
import { db } from '../firebase';

import bgImg from '../assets/bg-2.png'

import './styles/explore.css'

export default function ExplorePage() {
  const [notes, setNotes] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [query, setQuery] = useState([]);
  const [text, setText] = useState("");

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

    let notesUnsubscribe = db.collection("notes")
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

    let lecturesUnsubscribe = db.collection("videos")
        .onSnapshot((querySnapshot) => {
          let data = [];
            querySnapshot.forEach((doc) => {
              let temp = doc.data();
              temp['docId'] = doc.id;
              data.push(temp);
              setLectures(data);
            });
        });
    return () => {
      notesUnsubscribe();
      lecturesUnsubscribe();
    }
  }, []);

//   useEffect(() => {
//     let data = [];
//     db.collection("notes").where("keywords", "array-contains", text)
//       .get()
//       .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//               let temp = doc.data();
//               temp['docId'] = doc.id;
//               data.push(temp);
//           });
//       })
//     db.collection("videos").where("keywords", "array-contains", text)
//       .get()
//       .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//               let temp = doc.data();
//               temp['docId'] = doc.id;
//               data.push(temp);
//           });
//       })
//     setQuery(data);
//     console.log("runs");
//   }, [text])

  useEffect(() => {

  }, [text])

  useEffect(() => {

  }, [query])

  let onSearchClick = async (event) => {
    let data = [];
    await db.collection("notes").where("keywords", "array-contains", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    await db.collection("notes").where("name", "==", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    await db.collection("notes").where("school", "==", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    await db.collection("videos").where("keywords", "array-contains", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    await db.collection("videos").where("school", "==", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    await db.collection("videos").where("name", "==", text)
     .get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             let temp = doc.data();
             temp['docId'] = doc.id;
             data.push(temp);
         });
     })
    setQuery(data);
  }

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

  let merged = [];
  if(query.length === 0) {
    merged = notes.concat(lectures)
  } else {
    merged = query;
  }
  return (
    <Layout>
        <div id="explorePage" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0px'
        }}
        >
        <Navbar/>
        <Container><FadeIn>

        <h1><Emoji symbol="🗺️"/> Explore Notes</h1><br/>
        <div style={{width:'100%', height: '60px'}}>
            <div style={{
                float: 'left',
                marginBottom: '40px',
                marginRight: '1vw',
                width: '80%'
            }}>
                <SearchInput placeholder="Search for notes..."
                  height={40}
                  width='100%'
                  fontFamily={'Avenir'}
                  onChange={e => setText(e.target.value)}
                />
            </div>

            <Button
                height={40}
                float={'left'}
                marginLeft={0}
                fontFamily={'Avenir'}
                onClick={e => onSearchClick(e)}
            >
                Search
            </Button>
        </div>

        <div style={{marginBottom:'100px'}}>

            {merged.map(item => {
              let pdfurl = null;
              if(item.isVideo) {
                pdfurl = item.pdfurl;
              } else if(item.isNote) {
                pdfurl = item.url;
              }
              return (
                <FileCard
                  title={item.name}
                  docId={item.docId}
                  isVideo={item.isVideo}
                  isNote={item.isNote}
                  isProblem={item.isProblem}
                  relevance={item.relevance}
                  description={item.description}
                  school={item.school}
                  keywords={item.keywords}
                  pdfurl={pdfurl}
                />
              )
            })}

        </div>

        </FadeIn></Container>
        </div>
    </Layout>
  );
}
