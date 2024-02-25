import React, { useContext, useState, useEffect } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";

// Context for managing sidebar state
const SidebarContext = React.createContext();

// Sidebar component
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [teacherProfile, setTeacherProfile] = useState(null);

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setExpanded((curr) => !curr);
  };

  // Fetch teacher profile on component mount
  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/teacherprofile/"
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
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Sidebar header */}
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Sidebar logo */}
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}
          <h4
            className={`overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            eGyanam Advance
          </h4>
          {/* Toggle button */}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Provide context value */}
        <SidebarContext.Provider value={{ expanded }}>
          {/* Render teacher profile details */}
          {teacherProfile && (
            <div className="border-b p-3">
              {/* Teacher avatar */}
              <img
                src={teacherProfile.avatar}
                alt=""
                className="w-10 h-10 rounded-md"
              />
              {/* Teacher details */}
              <div
                className={`
                  flex justify-between items-center
                  overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                  }
              `}
              >
                <div className="leading-4">
                  {/* Teacher name */}
                  <h4 className="font-semibold">{teacherProfile.username}</h4>
                  {/* Teacher email */}
                  <span className="text-xs text-gray-600">
                    {teacherProfile.email}
                  </span>
                </div>
                {/* More options */}
                <MoreVertical size={20} />
              </div>
            </div>
          )}

          {/* Render children */}
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

// Sidebar item component
export function SidebarItem({ icon, text, active, alert }) {
  // Access sidebar context
  const { expanded } = useContext(SidebarContext);

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
    >
      {/* Icon */}
      {icon}
      {/* Text */}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {/* Alert indicator */}
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {/* Collapsed text */}
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
