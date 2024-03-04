import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { IndianRupee } from "lucide-react";

const Coursecard = (props) => {
  const navigate = useNavigate();
  const course = props.course;
  const teacherId = course.teacher;
  const courseId = course.id;
  const [teacher, setteacher] = useState([]);
  const [modules, setModules] = useState([]);

  const handleEnrollClick = () => {
    // Redirect to the course details page with course ID appended to the URL
    navigate(`/coursedetails/${course.id}`);
  };

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
    const fetchteacherdetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/teacherprofile/${teacherId}`
        );
        if (response.ok) {
          const data = await response.json();
          setteacher(data);
          console.log("teacher detail: ", teacher);
        } else {
          console.error("failed to fetch teacher detail");
        }
      } catch (error) {
        console.error("Error while fetching teacher detail:", error);
      }
    };

    fetchteacherdetail();
  }, []);

  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 outline rounded-xl transform hover:scale-105 transition duration-500">
      <h5 className="mb-3 text-md font-bold text-slate-800 border flex justify-center items-center w-1/2 rounded-full p-1">
        {course.category}
      </h5>

      <div className="relative">
        {/* <img
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Colors"
            /> */}
        {/* <img
              className="w-full rounded-xl"
              src={course.image}  // Use course.image instead of course.preview_video
              alt="Course Image"
            /> */}
        <ReactPlayer
          className="w-full rounded-xl overflow-hidden"
          controls
          url={course.preview_video}
          width="100%"
          height="100%"
        />

        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg flex flex-wrap">
          <IndianRupee />
          {course.price}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {course.title}
      </h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-700 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          {teacher.organization_name ? ( // If organization_name is not empty
            <p>{teacher.organization_name}</p>
          ) : (
            <p>{teacher.username}</p>
          )}
        </div>
        {modules && (
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-700 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>{modules.length} modules</p>
          </div>
        )}

        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-700 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <p
            className={
              course.mode.toUpperCase() === "ONLINE"
                ? "text-red-800"
                : "text-green-900"
            }
          >
            {course.mode.toUpperCase()}
          </p>
        </div>
        <button
          className="mt-4 text-xl w-full text-white bg-red-500 py-2 rounded-xl shadow-sm"
          onClick={handleEnrollClick}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Coursecard;
