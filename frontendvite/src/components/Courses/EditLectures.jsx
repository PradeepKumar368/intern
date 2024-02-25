import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Table } from "flowbite-react";

function EditLecture(props) {
  const moduleId = props.moduleId;
  const [lectures, setLectures] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newLectureTitle, setNewLectureTitle] = useState("");
  const [newLectureYoutubeUrl, setNewLectureYoutubeUrl] = useState("");
  const [editedDetails, setEditedDetails] = useState({
    title: "",
    youtube_url: "",
  });

  useEffect(() => {
    const fetchLectureDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/lectures/?module=${moduleId}`
        );
        if (response.ok) {
          const data = await response.json();
          setLectures(data);
        } else {
          console.error("Failed to fetch lecture details.");
        }
      } catch (error) {
        console.error("Error during lecture details fetch:", error);
      }
    };

    fetchLectureDetails();
  }, [moduleId]);

  useEffect(() => {
    if (selectedLecture) {
      setEditedDetails({
        title: selectedLecture.title,
        youtube_url: selectedLecture.youtube_url,
      });
    }
  }, [selectedLecture]);

  const handleEditClick = (lecture) => {
    setSelectedLecture(lecture);
    setShowModal(true);
  };

  const handleEditDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/lectures/${selectedLecture.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDetails),
        }
      );

      if (response.ok) {
        console.log("Lecture details updated successfully!");
        setShowModal(false);
      } else {
        console.error("Failed to update lecture details.");
      }
    } catch (error) {
      console.error("Error during lecture details update:", error);
    }
  };

  const handleAddLecture = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/lectures/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newLectureTitle,
          youtube_url: newLectureYoutubeUrl,
          module: moduleId,
        }),
      });

      if (response.ok) {
        console.log("Lecture added successfully!");
        setShowModal(false);
        // Fetch updated lectures or perform necessary actions
      } else {
        console.error("Failed to add lecture.");
      }
    } catch (error) {
      console.error("Error during lecture addition:", error);
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
            <Table.HeadCell>Lecture Title</Table.HeadCell>
            <Table.HeadCell>Youtube URL</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {lectures.length > 0 ? (
              lectures.map((lecture) => (
                <Table.Row
                  key={lecture.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {lecture.title}
                  </Table.Cell>
                  <Table.Cell>{lecture.youtube_url}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleEditClick(lecture)}
                    >
                      Edit
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  No lectures available
                </Table.Cell>
                <Table.Cell>--</Table.Cell>
                <Table.Cell>--</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Lecture Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="title"
                  value={editedDetails.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formYoutubeUrl">
                <Form.Label>Youtube URL</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="youtube_url"
                  value={editedDetails.youtube_url}
                  onChange={handleChange}
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
              onClick={handleEditDetails}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="flex justify-center mb-3">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setShowModal(true)}
        >
          Add Lecture
        </Button>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Lecture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formLectureTitle">
                <Form.Label>Lecture Title</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="title"
                  value={newLectureTitle}
                  onChange={(e) => setNewLectureTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formYoutubeUrl">
                <Form.Label>Lecture Youtube URL</Form.Label>
                <Form.Control
                  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  type="text"
                  name="youtube_url"
                  value={newLectureYoutubeUrl}
                  onChange={(e) => setNewLectureYoutubeUrl(e.target.value)}
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
              onClick={handleAddLecture}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default EditLecture;
