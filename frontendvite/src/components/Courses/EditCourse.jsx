import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAuth } from '../Auth/AuthContext';
import EditModule from './EditModule';

const EditCourse = () => {
  const { token } = useAuth();
  // console.log('EditCourse : Authentication state -', { token });
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get('courseId');
  // console.log(courseId);
  const [course, setCourse] = useState({});
  const [courseMode, setcourseMode] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedDetails, setEditedDetails] = useState({
    title: '',
    description: '',
    price: 0,
    mode: '',
    category: '',
    PreviewVideo: '',
    // Add other course details here
  });

  useEffect(() => {
    // Fetch course details based on courseId when the component mounts
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/courses/${courseId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCourse(data);
          setcourseMode(data.mode);
          setEditedDetails({
            title: data.title,
            description: data.description,
            price: data.price,
            mode: data.mode,
            category: data.category,
            preview_video: data.PreviewVideo
            // Set other course details accordingly
          });
        } else {
          console.error('Failed to fetch course details.');
        }
      } catch (error) {
        console.error('Error during course details fetch:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEditDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/courses/${courseId}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          // Add your authentication headers if needed
        },
        body: JSON.stringify(editedDetails),
      });

      if (response.ok) {
        console.log('Course details updated successfully!');
        handleCloseModal();
      } else {
        console.error('Failed to update course details.');
      }
    } catch (error) {
      console.error('Error during course details update:', error);
    }
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Course Details</h1>
      <p>Title: {course.title}</p>
      <p>Description: {course.description}</p>
      <p>Price: {course.price}</p>
      <p>Mode: {course.mode}</p>
      <p>Category: {course.category}</p>
      <p>Preview: {course.preview_video}</p>
      {/* Add other course details display here */}
      <Button variant="primary" onClick={handleShowModal}>
        Edit Details
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course Details</Modal.Title>
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

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={editedDetails.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedDetails.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMode">
              <Form.Label>Mode</Form.Label>
              <Form.Control
                type="text"
                name="mode"
                value={editedDetails.mode}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={editedDetails.category}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>PreviewVideo</Form.Label>
              <Form.Control
                type="text"
                name="preview_video"
                value={editedDetails.PreviewVideo}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Add other form fields for course details here */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <EditModule courseId={courseId} courseMode={courseMode} />
    </div>
  );
};

export default EditCourse;
