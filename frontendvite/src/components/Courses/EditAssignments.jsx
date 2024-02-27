import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Table } from "flowbite-react";

const EditAssignment = (props) => {
  const moduleId = props.moduleId;
  // console.log(moduleId)
  const [Assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentDriveLink, setNewAssignmentDriveLink] = useState("");
  const [editedDetails, setEditedDetails] = useState({
    title: "",
    drive_link: "", // Add drive link field
    // Add other Assignment details here
  });

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/assignments/?module=${moduleId}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Assignments Response:", data);
          setAssignments(data);
        } else {
          console.error("Failed to fetch Assignment details.");
        }
      } catch (error) {
        console.error("Error during Assignment details fetch:", error);
      }
    };

    fetchAssignmentDetails();
  }, [moduleId]);

  useEffect(() => {
    // Set the editedDetails with the selected Assignment details when selectedAssignment changes
    if (selectedAssignment) {
      setEditedDetails({
        title: selectedAssignment.title,
        drive_link: selectedAssignment.drive_link,
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
      const response = await fetch(
        `http://localhost:8000/api/assignments/${selectedAssignment.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDetails),
        }
      );

      if (response.ok) {
        console.log("Assignment details updated successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Failed to update Assignment details.");
      }
    } catch (error) {
      console.error("Error during Assignment details update:", error);
    }
  };

  const handleAddAssignment = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/assignments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newAssignmentTitle,
          drive_link: newAssignmentDriveLink,
          module: moduleId,
        }), // Adjust the title as needed
      });

      if (response.ok) {
        console.log("Assignment added successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Failed to add Assignment.");
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

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Assignment Title</Table.HeadCell>
            <Table.HeadCell>Drive Link</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Assignments.length > 0 ? (
              Assignments.map((Assignment) => (
                <Table.Row
                  key={Assignment.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {Assignment.title}
                  </Table.Cell>
                  <Table.Cell>{Assignment.drive_link}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleEditClick(Assignment)}
                    >
                      Edit Details
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  No assignments available
                </Table.Cell>
                <Table.Cell>No link</Table.Cell>
                <Table.Cell>No action</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div className="flex items-center justify-center ">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Edit Assignment Details
                </h2>
              </div>
              <div>
                <Form>
                  <Form.Group controlId="formTitle" className="mb-4">
                    <Form.Label className="block text-gray-700">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={editedDetails.title}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </Form.Group>

                  <Form.Group controlId="formDriveLink" className="mb-4">
                    <Form.Label className="block text-gray-700">
                      Drive Link
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="drive_link"
                      value={editedDetails.drive_link}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </Form.Group>

                  {/* Add other form fields for module details here */}
                </Form>
              </div>
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
      <div className="flex justify-center mb-2 mt-2">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setShowModal(true)}
        >
          Add Assignment
        </Button>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Assignment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formAssignmentTitle">
                <Form.Label>Assignment Title</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="title"
                  value={newAssignmentTitle}
                  onChange={(e) => setNewAssignmentTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formAssignmentTitle">
                <Form.Label>Assignment Drive Link</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="Drive Link"
                  value={newAssignmentDriveLink}
                  onChange={(e) => setNewAssignmentDriveLink(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-md"
              onClick={handleAddAssignment}
            >
              Add Assignment
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EditAssignment;
