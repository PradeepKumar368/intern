import React, { useContext, useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Context for managing sidebar state
const SidebarContext = React.createContext();

// Sidebar component
export default function Sidebar({ children, teacher_id }) {
  const [teacherProfile, setTeacherProfile] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation
  const handleClick = () => {
    navigate(`/teacherprofile&settings/${teacher_id}`); // Navigate to the specified link
  };

  // Fetch teacher profile on component mount
  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/teacherprofile/${teacher_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setTeacherProfile(data);
        } else {
          console.error("Failed to fetch teacher profile.");
        }
      } catch (error) {
        console.error("Error during teacher profile fetch:", error);
      }
    };
    fetchTeacherProfile();
  }, [teacher_id]);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Sidebar header */}
        <div className="p-4 pb-4 flex justify-between items-center">
          {/* Sidebar logo */}
          <a href="/" className="cursor-pointer">
            <h4 className="overflow-hidden w-full">eGyanam Advance</h4>
          </a>
        </div>

        {/* Provide context value */}
        <SidebarContext.Provider value={{ expanded: true }}>
          {/* Render children */}
          <ul className="flex-1 px-3">{children}</ul>
          {/* Render teacher profile details */}
          {teacherProfile && (
            <div className="border-t p-3 flex" onClick={handleClick}>
              {/* Teacher avatar */}
              <div className="w-10 h-10 rounded-md overflow-hidden">
                {teacherProfile.profile_picture_url ? (
                  <img
                    src={teacherProfile.profile_picture_url}
                    alt={`${teacherProfile.username}'s Profile`}
                    className="w-full h-full object-cover cursor-pointer" // Add cursor pointer here
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 cursor-pointer">
                    {" "}
                    {/* Add cursor pointer here */}
                    {teacherProfile.username.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Teacher details */}
              <div
                className="flex justify-between items-center ml-2 cursor-pointer"
                onClick={handleClick}
              >
                {" "}
                {/* Add cursor pointer here */}
                <div className="leading-4">
                  {/* Teacher name */}
                  <h4 className="font-semibold">{teacherProfile.username}</h4>
                  {/* Teacher email */}
                  <span className="text-xs text-gray-600">
                    {teacherProfile.email}
                  </span>
                </div>
                {/* More options */}
                <Link
                  to={`/teacherprofile&settings/${teacher_id}`}
                  className="text-indigo-500"
                >
                  <MoreVertical size={20} />
                </Link>
              </div>
            </div>
          )}
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, link }) {
  // Access sidebar context
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation
  const handleClick = () => {
    navigate(link); // Navigate to the specified link
  };

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      onClick={handleClick}
    >
      {/* Icon */}
      <div className="relative">{icon}</div>

      {/* Text */}
      <span className="overflow-hidden ml-2">{text}</span>
      {/* Alert indicator */}
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />
      )}
    </li>
  );
}
