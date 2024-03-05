import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { Dropdown,Button } from "flowbite-react";
import { useAuth } from "../Auth/AuthContext";

function CourseCreate() {
  const { userId, token } = useAuth();
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [previewVideo, setPreviewVideo] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory); // Update the selected category when changed
  };

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode); // Update the selected mode when changed
  };

  const handleCreateCourse = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/courses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          teacher: userId,
          title,
          mode,
          category,
          price,
          description,
          preview_video: previewVideo,
        }),
      });

      if (response.ok) {
        console.log("Course created successfully!");
        navigate("/teacherdashboard");
      } else {
        console.error("Failed to create course.");
      }
    } catch (error) {
      console.error("Error during course creation:", error);
    }
  };

  return (
    <div>
      <h1 className="flex flex-row flex-nowrap items-center my-3">
          <span
            className="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
            Create New Course
          </span>
          <span
            className="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h1>
      <div className="max-w-md mx-auto pt-4 mb-5 pb-5">
        {/* <h1 className="text-3xl font-bold mb-6">Create New Course</h1> */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Course Title
            </label>
            <input
              type="text"
              id="title"
              className="rounded-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter course title"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="mode"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mode
            </label>
            <Dropdown
              label=""
              dismissOnClick={true} // Close dropdown on item click
              renderTrigger={() => (
                <span className="cursor-pointer border rounded-r-full p-1 mt-2 text-xs">
                  Choose Mode
                </span>
              )}
            >
              <Dropdown.Item onClick={() => handleModeChange("Online")}>
                Online
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleModeChange("Offline")}>
                Offline
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleModeChange("Hybrid")}>
                Hybrid
              </Dropdown.Item>
            </Dropdown>
            <input
              type="text"
              id="mode"
              className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 mt-2" // Add pr-10 for right padding to accommodate dropdown icon
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              placeholder="Choose mode"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <Dropdown
              label=""
              dismissOnClick={true} // Close dropdown on item click
              renderTrigger={() => (
                <span className="cursor-pointer border rounded-r-full p-1 mt-2 text-xs">
                  Choose category
                </span>
              )} // Custom trigger for the dropdown
            >
              <Dropdown.Item
                onClick={() => handleCategoryChange("Data Science")}
              >
                Data Science
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleCategoryChange("Cyber Security")}
              >
                Cyber Security
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("AI")}>
                AI
              </Dropdown.Item>
            </Dropdown>
            <input
              type="text"
              id="category"
              className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 mt-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              className="rounded-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="rounded-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="previewVideo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Preview Video URL
            </label>
            <input
              type="text"
              id="previewVideo"
              className="rounded-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
              value={previewVideo}
              onChange={(e) => setPreviewVideo(e.target.value)}
              placeholder="Enter preview video URL"
            />
          </div>

          <Button
            onClick={handleCreateCourse}
          >
            Create Course
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CourseCreate;
