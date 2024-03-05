import { useState, useEffect } from "react";
import { useAuth } from "@/components/Auth/AuthContext";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar/sidebar";
import AddCourseButton from "./AddCourseButton";
import CourseTable from "./Table/table";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi"; // Import icons

function TeacherDashboard() {
  // const { isAuthenticated, token, userId } = useAuth();
  // console.log('TeacherDashboard: Authentication state -', { isAuthenticated, token, userId });
  const { token, userId } = useAuth(); // Destructure user and token from useAuth
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        console.log(token, userId);
        const response = await fetch("http://localhost:8000/api/courses/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error("Failed to fetch courses.");
        }
      } catch (error) {
        console.error("Error during course fetch:", error);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="flex">
      <Sidebar teacher_id={userId}>
        <SidebarItem icon={<HiUser />} text="Profile" link={`/teacherprofile&settings/${userId}`} />
        {/* <SidebarItem icon={<HiViewBoards />} text="Kanban" label="Pro" labelColor="dark" /> */}
        <SidebarItem icon={<HiInbox />} text="Inbox" alert={3} link="/inbox" />
        <SidebarItem icon={<HiChartPie />} text="My Courses" link="/teacherdashboard" />
        {/* <SidebarItem icon={<HiUser />} text="Profile" /> */}
        {/* <SidebarItem icon={<HiShoppingBag />} text="Products" /> */}
        <SidebarItem
          icon={<HiArrowSmRight />}
          text="My Students"
          link="/students"
        />
        {/* <SidebarItem icon={<HiTable />} text="Sign Up" /> */}
      </Sidebar>

      <div className="flex-1">
        <Link to="/coursecreate">
          <AddCourseButton />
        </Link>
        <h2 className="text-2xl font-bold mt-2 mb-4 ml-4">Your Courses:</h2>
        <CourseTable courses={courses} />
      </div>
    </div>
  );
}

export default TeacherDashboard;
