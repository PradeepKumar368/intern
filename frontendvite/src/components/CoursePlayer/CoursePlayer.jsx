import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

// Component to display YouTube video using React Player
const CoursePlayer = () => {
    const [courseDetails, setCourseDetails] = useState(null);
    const { courseId } = useParams(); // Get courseId from URL params

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/courses/${courseId}/`);
                setCourseDetails(response.data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };

        fetchCourseDetails();
    }, [courseId]);

    return (
        <div>
            {courseDetails && (
                <div>
                    <h2>{courseDetails.title}</h2>
                    <ReactPlayer controls url={courseDetails.youtubeUrl} />
                </div>
            )}
        </div>
    );
}

export default CoursePlayer;
