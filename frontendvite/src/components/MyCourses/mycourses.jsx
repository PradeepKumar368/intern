import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/courses/');
                console.log('Courses fetched successfully:', response.data); // Debugging statement
                setCourses(response.data);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error('Error response from server:', error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something else happened in making the request
                    console.error('Error making request:', error.message);
                }
            }
        };
        fetchCourses();
    }, []);
    

    const handleCourseClick = (id) => {
        console.log('Clicked course ID:', id); // Debugging statement
        navigate(`/courseplayer/${id}`);
    };
    

    return (
        <div>
            <h1>My Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id} onClick={() => handleCourseClick(course.id)}>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id={`dropdown-${course.id}`}>
                                {course.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleCourseClick(course.id)}>View Course</Dropdown.Item>
                                {/* Add more dropdown items as needed */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyCourses;
