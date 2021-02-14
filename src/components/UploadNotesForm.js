import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { storage } from "../firebase";

const FLASK_ENDPOINT = 'http://127.0.0.1:5000/api/uploadfile';

const UploadNotesForm = (props) => {
  const [filename, setFilename] = useState("");
  const [title, setTitle] = useState("");
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async event => {
    const data = new FormData();

    const dataTitle = event.target[0].value;
    const dataSchool = event.target[1].value;
    const dataCourse = event.target[2].value;
    const dataDescription = event.target[3].value;
    const dataFile = event.target[4].files[0];

    data.append('title', dataTitle)
    data.append('school', dataSchool)
    data.append('course', dataCourse)
    data.append('description', dataDescription)
    data.append('file', dataFile)

    const requestOptions = {
      method : 'POST',
      body: data
    }


    let storageRef = storage.ref();
    let fileRef = storageRef.child(`notes/${filename}`)

    let uploadTask = fileRef.put(dataFile);
    uploadTask.on('state_changed', // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused': // or 'paused'
            console.log('Upload is paused');
            break;
          case 'running': // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL()
          .then((downloadURL) => {
            data.append('fileurl', downloadURL)
            fetch(FLASK_ENDPOINT, requestOptions)
              .then(res => console.log(res))
          });
      }
    );



    setFilename("");
    setTitle("");
    setSchool("");
    setCourse("");
    setDescription("");

    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter in title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter in school..."
            value={school}
            onChange={e => setSchool(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Course ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter in course ID..."
            value={course}
            onChange={e => setCourse(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Upload your PDF notes</Form.Label>
          <Form.File
              id="custom-file"
              label={filename}
              accept="application/pdf"
              onChange={e => setFilename(e.target.files[0].name)}
              custom
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UploadNotesForm;
