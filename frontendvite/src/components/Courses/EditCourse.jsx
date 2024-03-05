import { useState, useEffect } from "react"; // Import React library and necessary hooks
import { Modal, Form } from "react-bootstrap"; // Import necessary components from react-bootstrap
import { useLocation , useNavigate } from "react-router-dom"; // Import useLocation hook
import { useAuth } from "../Auth/AuthContext"; // Import useAuth hook
// import ReactPlayer from "react-player"; // Import ReactPlayer component
import EditModule from "./EditModule"; // Import EditModule component
import { Table } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi"; // Import icons
import Sidebar, {
  SidebarItem,
} from "../Teacher/Dashboard_teacher/Sidebar/sidebar";

const EditCourse = () => {
  const { token , userId } = useAuth(); // Get authentication token from useAuth hook
  const location = useLocation(); // Get current location using useLocation hook
  const courseId = new URLSearchParams(location.search).get("courseId"); // Extract courseId from query params
  const [course, setCourse] = useState({}); // State to store course details
  const [courseMode, setCourseMode] = useState(""); // State to store course mode
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  const [editedDetails, setEditedDetails] = useState({
    title: "",
    description: "",
    price: 0,
    mode: "",
    category: "",
    preview_video: "",
    image: "",
    // Add other course details here
  }); // State to store edited course details

  // Fetch course details on component mount or courseId change
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
          setCourseMode(data.mode);
          setEditedDetails({
            title: data.title,
            description: data.description,
            price: data.price,
            mode: data.mode,
            category: data.category,
            preview_video: data.preview_video,
            image: data.image,
          });
        } else {
          console.error("Failed to fetch course details.");
        }
      } catch (error) {
        console.error("Error during course details fetch:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId, token]);

  // Handler to open modal for editing course details
  const handleShowModal = () => setShowModal(true);
  // Handler to close modal
  const handleCloseModal = () => setShowModal(false);

  // Handler to save edited course details
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
        window.location.reload();
      } else {
        console.error("Failed to update course details.");
      }
    } catch (error) {
      console.error("Error during course details update:", error);
    }
  };

  // Handler for input change in the edit form
  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/courses/${courseId}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        console.log("Course deleted successfully!");
        setShowDeleteConfirmation(false);
        navigate('/teacherdashboard');
        // Redirect or navigate to the course list page
      } else {
        console.error("Failed to delete course.");
      }
    } catch (error) {
      console.error("Error during course deletion:", error);
    }
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="flex">
        <Sidebar teacher_id={userId}>
          <SidebarItem icon={<HiChartPie />} text="Dashboard" />
          <SidebarItem
            icon={<HiViewBoards />}
            text="Kanban"
            label="Pro"
            labelColor="dark"
          />
          <SidebarItem icon={<HiInbox />} text="Inbox" alert={3} />
          <SidebarItem icon={<HiUser />} text="Users" />
          <SidebarItem icon={<HiShoppingBag />} text="Products" />
          <SidebarItem icon={<HiArrowSmRight />} text="Sign In" />
          <SidebarItem icon={<HiTable />} text="Sign Up" />
        </Sidebar>
        <div>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Mode</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>Edit</Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {course.title}
                    </h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-600">${course.price}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-600">{courseMode}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-600">{course.category}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="leading-relaxed">{course.description}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={handleShowModal}
                    >
                      Edit
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <EditModule courseId={courseId} courseMode={courseMode} />
          </div>

          {/* Modal for editing course details */}
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
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
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
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="number"
                    name="price"
                    value={editedDetails.price || 0}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formMode">
                  <Form.Label>Mode</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="text"
                    name="mode"
                    value={editedDetails.mode || ""}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="text"
                    name="category"
                    value={editedDetails.category || ""}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPreviewVideo">
                  <Form.Label>Preview Video</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="text"
                    name="preview_video"
                    value={editedDetails.preview_video || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    type="text"
                    name="image"
                    value={editedDetails.image || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md mr-2"
                onClick={handleCloseModal}
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
      </div>
      <div>
        <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the course "{course.title}"?
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
              Delete Course
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default EditCourse;
