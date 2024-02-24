import { useState, useEffect } from 'react';
import { useAuth } from '@/components/Auth/AuthContext';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar/sidebar';
import AddCourseButton from './AddCourseButton';
import CourseTable from './Table/table';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi'; // Import icons

function TeacherDashboard() {
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/courses/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Failed to fetch courses.');
        }
      } catch (error) {
        console.error('Error during course fetch:', error);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<HiChartPie />} text="Dashboard" />
        <SidebarItem icon={<HiViewBoards />} text="Kanban" label="Pro" labelColor="dark" />
        <SidebarItem icon={<HiInbox />} text="Inbox" alert={3} />
        <SidebarItem icon={<HiUser />} text="Users" />
        <SidebarItem icon={<HiShoppingBag />} text="Products" />
        <SidebarItem icon={<HiArrowSmRight />} text="Sign In" />
        <SidebarItem icon={<HiTable />} text="Sign Up" />
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
