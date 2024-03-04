import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { useAuth } from "@/components/Auth/AuthContext";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const TeacherProfileSettingsPage = () => {
  console.log("Inside teacher profile settings");
  const { token } = useAuth();
  const { teacher_id } = useParams();
  const [editedDetails, setEditedDetails] = useState({
    email: "",
    username: "",
    organization_name: "",
    phone_no: "",
    profile_picture_url: null,
  });

  // State for the "Change Password" modal
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [changePasswordDetails, setChangePasswordDetails] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    // Fetch teacher details based on the teacher_id
    const fetchTeacherDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/teacherprofile/${teacher_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setEditedDetails({
            email: data.email,
            username: data.username,
            organization_name: data.organization_name || "",
            phone_no: data.phone_no || "",
            profile_picture_url: data.profile_picture_url || "",
          });
        } else {
          console.error("Failed to fetch teacher details.");
        }
      } catch (error) {
        console.error("Error during teacher details fetch:", error);
      }
    };

    fetchTeacherDetails();
  }, [teacher_id]);

  const handleSaveChanges = async () => {
    try {
      // Send a request to update teacher details
      const formData = new FormData();
      formData.append("email", editedDetails.email);
      formData.append("username", editedDetails.username);
      formData.append("organization_name", editedDetails.organization_name);
      formData.append("phone_no", editedDetails.phone_no);
      formData.append("profile_picture_url", editedDetails.profile_picture_url);

      const response = await fetch(
        `http://localhost:8000/api/teacherprofile/${teacher_id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Teacher details updated successfully!");
        window.location.reload();
        // You may fetch updated details here if needed
      } else {
        console.error("Failed to update teacher details.");
      }
    } catch (error) {
      console.error("Error during teacher details update:", error);
    }
  };

  const handleChangePassword = () => {
    setShowChangePasswordModal(true);
  };

  const handleSavePasswordChanges = async () => {
    try {
      // Send a request to update the password
      const response = await fetch(
        `http://localhost:8000/api/changepassword/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(changePasswordDetails),
        }
      );

      if (response.ok) {
        console.log("Password updated successfully!");
        setShowChangePasswordModal(false);
      } else {
        console.error("Failed to update password.");
      }
    } catch (error) {
      console.error("Error during password update:", error);
    }
  };

  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePasswordDetails = (e) => {
    setChangePasswordDetails({
      ...changePasswordDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen">
      {/* <h1 className="text-3xl font-bold text-center -mb-6 mt-4">Profile & Settings</h1> */}
      <h1 className="flex flex-row flex-nowrap items-center my-3">
        <span
          className="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
        <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
          Profile & Settings
        </span>
        <span
          className="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
      </h1>
      <div className="max-w-md mx-auto pt-4">
        {/* Input fields for editing */}
        <form className="flex flex-col gap-4 justify-center w-full overflow-x-auto p-12 bg-white -mt-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="formEmail" value="Email:" />
            </div>
            <TextInput
              id="formEmail"
              type="text"
              name="email"
              value={editedDetails.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="formUsername" value="Username:" />
            </div>
            <TextInput
              id="formUsername"
              type="text"
              name="username"
              value={editedDetails.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="formOrganization" value="Organization Name:" />
            </div>
            <TextInput
              id="formOrganization"
              type="text"
              name="organization_name"
              value={editedDetails.organization_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="formPhoneNo" value="Phone Number:" />
            </div>
            <TextInput
              id="formPhoneNo"
              type="text"
              name="phone_no"
              value={editedDetails.phone_no}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="formProfilePicture" value="Profile Picture:" />
            </div>
            <TextInput
              id="formProfilePicture"
              type="text"
              name="profile_picture_url"
              value={editedDetails.profile_picture_url}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
          <div className="mb-2 block">
              <Label htmlFor="formChangepassword" value="Change Password:" />
            </div>
            {/* <span className="mr-2">Change Password:</span> */}
            <PencilSquare
              size={20}
              className="ml-2"
              onClick={handleChangePassword}
            />
          </div>

          {/* Save Changes button */}
          <div className="w-2/3">
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>

      {/* Change Password Modal */}
      <Modal
        show={showChangePasswordModal}
        onHide={handleCloseChangePasswordModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields for changing password */}
          <Form.Group controlId="formCurrentPassword">
            <Form.Label>Current Password:</Form.Label>
            <Form.Control
              type="password"
              name="current_password"
              value={changePasswordDetails.current_password}
              onChange={handleChangePasswordDetails}
            />
          </Form.Group>

          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password:</Form.Label>
            <Form.Control
              type="password"
              name="new_password"
              value={changePasswordDetails.new_password}
              onChange={handleChangePasswordDetails}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirm_password"
              value={changePasswordDetails.confirm_password}
              onChange={handleChangePasswordDetails}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* Save Changes button for password */}
          <Button variant="primary" onClick={handleSavePasswordChanges}>
            Save Changes
          </Button>
          <Button color="gray" onClick={handleCloseChangePasswordModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeacherProfileSettingsPage;
