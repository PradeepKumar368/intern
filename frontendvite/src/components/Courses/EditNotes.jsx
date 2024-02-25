import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditNote = (props) => {
  const moduleId = props.moduleId;
  // console.log(moduleId)
  const [Notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteDriveLink, setNewNoteDriveLink] = useState('');
  const [editedDetails, setEditedDetails] = useState({
    title: '',
    drive_link: '', // Add drive link field
    // Add other Note details here
  });

  useEffect(() => {
    const fetchNoteDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/notes/?module=${moduleId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Notes Response:', data);
          setNotes(data);
        } else {
          console.error('Failed to fetch Note details.');
        }
      } catch (error) {
        console.error('Error during Note details fetch:', error);
      }
    };

    fetchNoteDetails();
  }, [moduleId]);

  useEffect(() => {
    // Set the editedDetails with the selected Note details when selectedNote changes
    if (selectedNote) {
      setEditedDetails({
        title: selectedNote.title,
        drive_link: selectedNote.drive_link
        // Set other Note details accordingly
      });
    }
  }, [selectedNote]);

  const handleEditClick = (Note) => {
    // Set the selected module
    setSelectedNote(Note);
    setShowModal(true);
  };
  

  const handleEditDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/notes/${selectedNote.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDetails),
      });

      if (response.ok) {
        console.log('Note details updated successfully!');
        setShowModal(false);
      } else {
        console.error('Failed to update Note details.');
      }
    } catch (error) {
      console.error('Error during Note details update:', error);
    }
  };

  const handleAddNote = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/notes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newNoteTitle, drive_link: newNoteDriveLink ,module: moduleId }),  // Adjust the title as needed
      });
  
      if (response.ok) {
        console.log('Note added successfully!');
        // window.location.reload();
        
      } else {
        console.error('Failed to add Note.');
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
        <h1>Note Details</h1>
        <ul>
          {Notes.map((Note) => (
            <li key={Note.id}>
              <p>Title: {Note.title}</p>
              <p>drive_link: {Note.drive_link}</p>
              {/* Add other module details display here */}
              <Button variant="primary" onClick={() => handleEditClick(Note)}>
                Edit Details
              </Button>
            </li>
          ))}
        </ul>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Note Details</Modal.Title>
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
          <Form.Group controlId="formNoteTitle">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNoteTitle">
            <Form.Label>Note Drive Link</Form.Label>
            <Form.Control
              type="text"
              name="Drive Link"
              value={newNoteDriveLink}
              onChange={(e) => setNewNoteDriveLink(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" onClick={handleAddNote}>
            Add Note
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditNote;
