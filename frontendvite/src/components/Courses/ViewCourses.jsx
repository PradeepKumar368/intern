import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewCourses = () => {
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

    const handleClick = () => {
        console.log("Add new Lecture"); // Debugging statement
        navigate(`/NewVideo`);
    };


    return (

        <div className="bg-indigo-100 py-6 md:py-12">
            <div className="container px-4 mx-auto">

                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-medium mb-4">Welcome to the First Course !</h1>
                </div>
            </div>
            {/* <ul>
                {courses.map(course => (
                    <li key={course.id} onClick={() => handleCourseClick(course.id)}>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id={`dropdown-${course.id}`}>
                                {course.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleCourseClick(course.id)}>View Course</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                ))}
            </ul> */}
            <div className="overflow-x-auto h-96">
                <table className="table table-pin-rows">
                    <thead>
                        <tr>
                            <th>Module 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr
                                key={course.id}
                                onClick={() => handleCourseClick(course.id)}
                                className="hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300"
                            >
                                <td className="hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300">{course.title}</td>
                            </tr>
                        ))}
                    </tbody>

                    <thead>
                        <tr>
                            <th>Module 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300"

                        >
                            <td className="hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300">Lecture</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center">
                    <button type="button" className="relative w-1/3 flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out" onClick={() => handleClick()}>
                        <span className="pl-2 mx-1">Add Lecture</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ViewCourses;
