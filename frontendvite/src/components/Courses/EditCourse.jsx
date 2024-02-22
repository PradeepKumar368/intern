import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";

const EditCourse = () => {
  const { token } = useAuth();
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("courseId");
  const [course, setCourse] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/courses/${courseId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCourse(data);
          setEditedDetails({
            title: data.title,
            description: data.description,
            price: data.price,
            mode: data.mode,
            category: data.category,
          });
        } else {
          console.error("Failed to fetch course details.");
        }
      } catch (error) {
        console.error("Error during course details fetch:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEditDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/courses/${courseId}/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDetails),
        }
      );

      if (response.ok) {
        console.log("Course details updated successfully!");
        handleCloseModal();
      } else {
        console.error("Failed to update course details.");
      }
    } catch (error) {
      console.error("Error during course details update:", error);
    }
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="course-preview"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
            // {course.previewImageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Title : {course.title}
            </h1>
            <div className="flex-col mb-4 realtive">
              <p className="text-gray-600">Price: ${course.price}</p>
              <p className=" text-gray-600">Mode: {course.mode}</p>
              <p className=" text-gray-600">Category: {course.category}</p>
            </div>
            <p className="leading-relaxed">{course.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleShowModal}>
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>

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
                value={editedDetails.title || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={editedDetails.description || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedDetails.price || 0}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMode">
              <Form.Label>Mode</Form.Label>
              <Form.Control
                type="text"
                name="mode"
                value={editedDetails.mode || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={editedDetails.category || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleEditDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default EditCourse;
