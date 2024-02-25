import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import EditLecture from './EditLectures';
import EditAssignment from './EditAssignments';
import EditNotes from './EditNotes';

const EditModule = (props) => {
  const { courseId, courseMode } = props;
  console.log(courseMode,courseId);
  const [modules, setModules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState('');
  // const navigate = useNavigate();
  const [editedDetails, setEditedDetails] = useState({
    title: '',
    // Add other module details here
  });

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/modules/?course=${courseId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Modules Response:', data);
          setModules(data);
        } else {
          console.error('Failed to fetch module details.');
        }
      } catch (error) {
        console.error('Error during module details fetch:', error);
      }
    };
  
    fetchModuleDetails();
  }, [courseId]);
  

  useEffect(() => {
    // Set the editedDetails with the selected module details when selectedModule changes
    if (selectedModule) {
      setEditedDetails({
        title: selectedModule.title,
        // Set other module details accordingly
      });
    }
  }, [selectedModule]);

  const handleEditClick = (module) => {
    // Set the selected module
    setSelectedModule(module);
    setShowModal(true);
  };

  const handleEditDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/modules/${selectedModule.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDetails),
      });

      if (response.ok) {
        console.log('Module details updated successfully!');
        setShowModal(false);
        // Implement any logic needed after saving changes
      } else {
        console.error('Failed to update module details.');
      }
    } catch (error) {
      console.error('Error during module details update:', error);
    }
  };

  const handleAddModule = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/modules/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newModuleTitle, course: courseId }),  // Adjust the title as needed
      });
  
      if (response.ok) {
        console.log('Module added successfully!');
        // navigate(`/editcourse/${courseId}`);
        // Refresh the module list or perform any other necessary actions
      } else {
        console.error('Failed to add module.');
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
        <h1>Module Details</h1>
        <ul>
          {modules.map((module) => (
            <li key={module.id}>
              
              <p>Title: {module.title}</p>
              {/* Add other module details display here */}
              <Button variant="primary" onClick={() => handleEditClick(module)}>
                Edit Details
              </Button>
              {courseMode.toLowerCase() !== 'offline' && <EditLecture moduleId={module.id} />}
              <EditAssignment moduleId={module.id}/>
              <EditNotes moduleId={module.id}/>
            </li>
          ))}
        </ul>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Module Details</Modal.Title>
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
          <Form.Group controlId="formModuleTitle">
            <Form.Label>Module Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" onClick={handleAddModule}>
            Add Module
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditModule;
