import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditAssignment = (props) => {
  const moduleId = props.moduleId;
  // console.log(moduleId)
  const [Assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newAssignmentTitle, setNewAssignmentTitle] = useState('');
  const [newAssignmentDriveLink, setNewAssignmentDriveLink] = useState('');
  const [editedDetails, setEditedDetails] = useState({
    title: '',
    drive_link: '', // Add drive link field
    // Add other Assignment details here
  });

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/assignments/?module=${moduleId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Assignments Response:', data);
          setAssignments(data);
        } else {
          console.error('Failed to fetch Assignment details.');
        }
      } catch (error) {
        console.error('Error during Assignment details fetch:', error);
      }
    };

    fetchAssignmentDetails();
  }, [moduleId]);

  useEffect(() => {
    // Set the editedDetails with the selected Assignment details when selectedAssignment changes
    if (selectedAssignment) {
      setEditedDetails({
        title: selectedAssignment.title,
        drive_link: selectedAssignment.drive_link
        // Set other Assignment details accordingly
      });
    }
  }, [selectedAssignment]);

  const handleEditClick = (Assignment) => {
    // Set the selected module
    setSelectedAssignment(Assignment);
    setShowModal(true);
  };
  

  const handleEditDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/assignments/${selectedAssignment.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDetails),
      });

      if (response.ok) {
        console.log('Assignment details updated successfully!');
        setShowModal(false);
      } else {
        console.error('Failed to update Assignment details.');
      }
    } catch (error) {
      console.error('Error during Assignment details update:', error);
    }
  };

  const handleAddAssignment = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/assignments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newAssignmentTitle, drive_link: newAssignmentDriveLink ,module: moduleId }),  // Adjust the title as needed
      });
  
      if (response.ok) {
        console.log('Assignment added successfully!');
        // window.location.reload();
        
      } else {
        console.error('Failed to add Assignment.');
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
        <h1>Assignment Details</h1>
        <ul>
          {Assignments.map((Assignment) => (
            <li key={Assignment.id}>
              <p>Title: {Assignment.title}</p>
              <p>drive_link: {Assignment.drive_link}</p>
              {/* Add other module details display here */}
              <Button variant="primary" onClick={() => handleEditClick(Assignment)}>
                Edit Details
              </Button>
            </li>
          ))}
        </ul>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Assignment Details</Modal.Title>
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

              <Form.Group controlId="formDriveLink">
                <Form.Label>Drive Link</Form.Label>
                <Form.Control
                  type="text"
                  name="drive_link"
                  value={editedDetails.drive_link}
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
          <Form.Group controlId="formAssignmentTitle">
            <Form.Label>Assignment Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newAssignmentTitle}
              onChange={(e) => setNewAssignmentTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAssignmentTitle">
            <Form.Label>Assignment Drive Link</Form.Label>
            <Form.Control
              type="text"
              name="Drive Link"
              value={newAssignmentDriveLink}
              onChange={(e) => setNewAssignmentDriveLink(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" onClick={handleAddAssignment}>
            Add Assignment
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditAssignment;
