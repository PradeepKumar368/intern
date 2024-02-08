import { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Log the request data before sending
            console.log('Sending POST request to /api/courses/', { title, youtubeUrl });

            const response = await axios.post('http://127.0.0.1:8000/api/courses/', {
                title: title,
                youtubeUrl: youtubeUrl
            });

            // Log the response data after receiving
            console.log('Response:', response.data);

        } catch (error) {
            // Log any errors that occur
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <br />
            <label>
                YouTube URL:
                <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CourseForm;
