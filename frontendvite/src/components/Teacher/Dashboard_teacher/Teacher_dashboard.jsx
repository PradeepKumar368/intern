// TeacherDashboard.js
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/Auth/AuthContext';
import { Link } from 'react-router-dom';

function TeacherDashboard() {
  const { token } = useAuth(); // Destructure user and token from useAuth
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // const token = await getToken(); // Remove this line and use the token directly
        console.log(token);
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
  }, [token]); // Use token directly in the dependency array

  return (
    <div>
      <Link to="/coursecreate">Create New Course</Link>
      <h2>Your Courses:</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/editcourse?courseId=${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherDashboard;
