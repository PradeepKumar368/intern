import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Table } from "flowbite-react";

const EditNote = (props) => {
  const moduleId = props.moduleId;
  // console.log(moduleId)
  const [Notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDriveLink, setNewNoteDriveLink] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editedDetails, setEditedDetails] = useState({
    title: "",
    drive_link: "", // Add drive link field
    // Add other Note details here
  });

  useEffect(() => {
    const fetchNoteDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/notes/?module=${moduleId}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Notes Response:", data);
          setNotes(data);
        } else {
          console.error("Failed to fetch Note details.");
        }
      } catch (error) {
        console.error("Error during Note details fetch:", error);
      }
    };

    fetchNoteDetails();
  }, [moduleId]);

  useEffect(() => {
    // Set the editedDetails with the selected Note details when selectedNote changes
    if (selectedNote) {
      setEditedDetails({
        title: selectedNote.title,
        drive_link: selectedNote.drive_link,
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
      const response = await fetch(
        `http://localhost:8000/api/notes/${selectedNote.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDetails),
        }
      );

      if (response.ok) {
        console.log("Note details updated successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Failed to update Note details.");
      }
    } catch (error) {
      console.error("Error during Note details update:", error);
    }
  };

  const handleAddNote = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newNoteTitle,
          drive_link: newNoteDriveLink,
          module: moduleId,
        }), // Adjust the title as needed
      });

      if (response.ok) {
        console.log("Note added successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Failed to add Note.");
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

  const handleDeleteClick = (note) => {
    setSelectedNote(note);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/notes/${selectedNote.id}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Notes deleted successfully!");
        setShowDeleteConfirmation(false);
        window.location.reload();
      } else {
        console.error("Failed to delete notes.");
      }
    } catch (error) {
      console.error("Error during notes deletion:", error);
    }
  };

  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Note Title</Table.HeadCell>
              <Table.HeadCell>Drive Link</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {Notes.length > 0 ? (
                Notes.map((note) => (
                <Table.Row
                  key={note.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {note.title}
                  </Table.Cell>
                  <Table.Cell>{note.drive_link}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleEditClick(note)}
                    >
                      Edit Details
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                      onClick={() => handleDeleteClick(note)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
                ))
              ): (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    No notes available
                  </Table.Cell>
                  <Table.Cell>No link</Table.Cell>
                  <Table.Cell>No action</Table.Cell>
                  <Table.Cell>No Action</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div className="flex items-center justify-center">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Edit Note Details
                </h2>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  value={editedDetails.title}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="drive_link"
                  value={editedDetails.drive_link}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                  placeholder="Drive Link"
                />
                {/* Add other form fields for module details here */}
              </div>
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
          </div>
        </Modal>
      </div>
      <div className="flex justify-center mb-2 mt-2">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setShowModal(true)}
        >
          Add Note
        </Button>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNoteTitle">
                <Form.Label>Note Title</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="title"
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formNoteDriveLink">
                <Form.Label>Note Drive Link</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="Drive Link"
                  value={newNoteDriveLink}
                  onChange={(e) => setNewNoteDriveLink(e.target.value)}
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
              onClick={handleAddNote}
            >
              Add Notes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the notes "{selectedNote?.title}"?
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
              Delete Notes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EditNote;
