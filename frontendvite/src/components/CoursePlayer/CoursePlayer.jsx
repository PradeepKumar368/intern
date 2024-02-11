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
        <div className="flex justify-center bg-white text-white">
            {courseDetails && (
                <div className="w-full lg:w-2/3 p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="flex justify-center text-3xl font-bold mb-4">{courseDetails.title}</h2>
                    <div className="w-full aspect-video">
                        <ReactPlayer
                            className="rounded-lg overflow-hidden "
                            controls
                            url={courseDetails.youtubeUrl}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}
        </div>


    );
}

export default CoursePlayer;
