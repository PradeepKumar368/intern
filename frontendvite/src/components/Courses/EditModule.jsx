import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Button, Modal, Form } from "react-bootstrap";
import EditLecture from "./EditLectures";
import EditAssignment from "./EditAssignments";
import EditNotes from "./EditNotes";

const EditModule = (props) => {
  const { courseId, courseMode } = props;

  const [modules, setModules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editedDetails, setEditedDetails] = useState({
    title: "",
  });
  const [showAddModuleForm, setShowAddModuleForm] = useState(false); // New state for showing add module form

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/modules/?course=${courseId}`
        );
        if (response.ok) {
          const data = await response.json();
          setModules(data);
        } else {
          console.error("Failed to fetch module details.");
        }
      } catch (error) {
        console.error("Error during module details fetch:", error);
      }
    };

    fetchModuleDetails();
  }, [courseId]);

  useEffect(() => {
    if (selectedModule) {
      setEditedDetails({
        title: selectedModule.title,
      });
    }
  }, [selectedModule]);

  const handleEditClick = (module) => {
    setSelectedModule(module);
    setShowModal(true);
  };

  const handleEditDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/modules/${selectedModule.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDetails),
        }
      );

      if (response.ok) {
        console.log("Module details updated successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Failed to update module details.");
      }
    } catch (error) {
      console.error("Error during module details update:", error);
    }
  };

  const handleAddModule = async () => {
    setShowAddModuleForm(true); // Show the add module form when "Add Module" button is clicked
  };

  const handleAddModuleSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/modules/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newModuleTitle, course: courseId }),
      });

      if (response.ok) {
        console.log("Module added successfully!");
        setShowAddModuleForm(false); // Hide the form after successfully adding the module
        setNewModuleTitle(""); // Clear the input field
        window.location.reload();
      } else {
        console.error("Failed to add module.");
      }
    } catch (error) {
      console.error("Error during module addition:", error);
    }
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteClick = (module) => {
    setSelectedModule(module);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/modules/${selectedModule.id}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Module deleted successfully!");
        setShowDeleteConfirmation(false);
        window.location.reload();
      } else {
        console.error("Failed to delete module.");
      }
    } catch (error) {
      console.error("Error during module deletion:", error);
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex justify-center mb-3">
          {showAddModuleForm && ( // Render the add module form if showAddModuleForm is true
            <Modal
              show={showAddModuleForm}
              onHide={() => setShowAddModuleForm(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Module</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formModuleTitle">
                    <Form.Label>Module Title</Form.Label>
                    <Form.Control
                      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                      type="text"
                      name="title"
                      value={newModuleTitle}
                      onChange={(e) => setNewModuleTitle(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
                  onClick={() => setShowAddModuleForm(false)}
                >
                  Close
                </button>
                <button
                  className="bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-md"
                  onClick={handleAddModuleSubmit}
                >
                  Add Module
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {!showAddModuleForm && ( // Render the "Add Module" button if showAddModuleForm is false
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleAddModule}
            >
              Add Module
            </Button>
          )}
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Module Title</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y  border rounded-lg shadow-lg p-4">
            {modules.length > 0 ? (
              modules.map((module) => (
                <React.Fragment key={module.id}>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {module.title}
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={() => handleEditClick(module)}
                      >
                        Edit Details
                      </button>
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => handleDeleteClick(module)}
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                  <div className="bg-gray-200 rounded-md p-4 shadow-md">
                    {courseMode.toLowerCase() !== "offline" && (
                      <EditLecture moduleId={module.id} />
                    )}
                    <EditAssignment moduleId={module.id} />
                    <EditNotes moduleId={module.id} />
                  </div>
                </React.Fragment>
              ))
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  No modules available
                </Table.Cell>
                <Table.Cell>Add Module</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      <div>
        {/* <Modal show={showModal} onHide={() => setShowModal(false)}> */}
        {/* <Modal.Header closeButton>
            <Modal.Title className="text-center font-bold text-2xl m-5 text-gray-800">
              Edit Module Details
            </Modal.Title>
          </Modal.Header> */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div className="editor mx-auto w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <input
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              spellCheck="false"
              placeholder="Title"
              type="text"
              value={editedDetails.title}
              onChange={handleChange}
            />
            {/* buttons */}
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-md"
                onClick={handleEditDetails}
              >
                Save Changes
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <div>
        <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the module "{selectedModule?.title}"?
          </Modal.Body>
          <Modal.Footer>
            <button
              className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
              onClick={() => setShowDeleteConfirmation(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-md"
              onClick={handleDeleteConfirmation}
            >
              Delete Module
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div className="flex justify-center mb-2 mt-2">
        {showAddModuleForm && ( // Render the add module form if showAddModuleForm is true
          <Modal
            show={showAddModuleForm}
            onHide={() => setShowAddModuleForm(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formModuleTitle">
                  <Form.Label>Module Title</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="text"
                    name="title"
                    value={newModuleTitle}
                    onChange={(e) => setNewModuleTitle(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
                onClick={() => setShowAddModuleForm(false)}
              >
                Close
              </button>
              <button
                className="bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-md"
                onClick={handleAddModuleSubmit}
              >
                Add Module
              </button>
            </Modal.Footer>
          </Modal>
        )}

        {!showAddModuleForm && ( // Render the "Add Module" button if showAddModuleForm is false
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleAddModule}
          >
            Add Module
          </Button>
        )}
      </div> */}
    </>
  );
};

export default EditModule;
