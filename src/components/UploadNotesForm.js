import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { db } from "../firebase";

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

    setFilename("");
    setTitle("");
    setSchool("");
    setCourse("");
    setDescription("");

  fetch(FLASK_ENDPOINT, requestOptions)
    .then(res => console.log(res))

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
