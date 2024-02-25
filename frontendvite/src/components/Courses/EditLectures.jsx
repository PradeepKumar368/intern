import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditLecture = (props) => {
  const moduleId = props.moduleId;
  // console.log(moduleId)
  const [lectures, setlectures] = useState([]);
  const [selectedLecture, setSelectedlecture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newLectureTitle, setNewLectureTitle] = useState('');
  const [newLectureYoutubeUrl, setNewLectureYoutubeUrl] = useState('');
  const [editedDetails, setEditedDetails] = useState({
    title: '',
    youtube_url: '', // Add drive link field
    // Add other lecture details here
  });

  useEffect(() => {
    const fetchLectureDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/lectures/?module=${moduleId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Lectures Response:', data);
          setlectures(data);
        } else {
          console.error('Failed to fetch lecture details.');
        }
      } catch (error) {
        console.error('Error during lecture details fetch:', error);
      }
    };

    fetchLectureDetails();
  }, [moduleId]);

  useEffect(() => {
    // Set the editedDetails with the selected lecture details when selectedLecture changes
    if (selectedLecture) {
      setEditedDetails({
        title: selectedLecture.title,
        youtube_url: selectedLecture.youtube_url
        // Set other lecture details accordingly
      });
    }
  }, [selectedLecture]);

  const handleEditClick = (lecture) => {
    // Set the selected module
    setSelectedlecture(lecture);
    setShowModal(true);
  };
  

  const handleEditDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/lectures/${selectedLecture.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDetails),
      });

      if (response.ok) {
        console.log('Lecture details updated successfully!');
        setShowModal(false);
      } else {
        console.error('Failed to update lecture details.');
      }
    } catch (error) {
      console.error('Error during lecture details update:', error);
    }
  };

  const handleAddLecture = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/lectures/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newLectureTitle, youtube_url: newLectureYoutubeUrl ,module: moduleId }),  // Adjust the title as needed
      });
  
      if (response.ok) {
        console.log('Lecture added successfully!');
        // window.location.reload();
        
      } else {
        console.error('Failed to add lecture.');
      }
    } catch (error) {
      console.error('Error during module addition:', error);
    }
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>Lecture Details</h1>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <p>Title: {lecture.title}</p>
              <p>Youtube_Url: {lecture.youtube_url}</p>
              {/* Add other module details display here */}
              <Button variant="primary" onClick={() => handleEditClick(lecture)}>
                Edit Details
              </Button>
            </li>
          ))}
        </ul>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit lecture Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editedDetails.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formYoutubeUrl">
                <Form.Label>Youtube Url</Form.Label>
                <Form.Control
                  type="text"
                  name="youtube_url"
                  value={editedDetails.youtube_url}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Add other form fields for module details here */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEditDetails}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <Form>
          <Form.Group controlId="formLectureTitle">
            <Form.Label>Lecture Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newLectureTitle}
              onChange={(e) => setNewLectureTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLectureTitle">
            <Form.Label>Lecture Youtube Url</Form.Label>
            <Form.Control
              type="text"
              name="YouTube Url"
              value={newLectureYoutubeUrl}
              onChange={(e) => setNewLectureYoutubeUrl(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" onClick={handleAddLecture}>
            Add Lecture
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditLecture;
