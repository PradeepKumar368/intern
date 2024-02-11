import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoSaveSharp } from "react-icons/io5";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const navigate = useNavigate();

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

            // Check if the status is 201 (Created) or 200 (OK)
            if (response.status === 201 || response.status === 200) {
                console.log('Video added successfully!');
                navigate('/mycourses');
                // You can redirect or perform any other action upon successful login
            } else {
                console.error('Video add failed.');
            }

        } catch (error) {
            // Log any errors that occur
            console.error('Error:', error);
        }
    };



    return (
        // <form onSubmit={handleSubmit}>
        //     <label>
        //         Title:
        //         <input
        //             type="text"
        //             value={title}
        //             onChange={(e) => setTitle(e.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <label>
        //         YouTube URL:
        //         <input
        //             type="text"
        //             value={youtubeUrl}
        //             onChange={(e) => setYoutubeUrl(e.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <button type="submit">Submit</button>
        // </form>
        <div className="flex h-screen bg-gray-100">
            <div className="m-auto">
                <div className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out">
                    <Popover>
                        <PopoverTrigger className="pl-2 mx-1">Add Lecture</PopoverTrigger>
                        <PopoverContent>
                            {/* Place your form here */}
                            <form onSubmit={handleSubmit} className="px-5 pb-5">
                                <div className="mb-4 pt-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700">YouTube URL:</label>
                                    <input
                                        id="youtubeUrl"
                                        name="youtubeUrl"
                                        type="text"
                                        value={youtubeUrl}
                                        onChange={(e) => setYoutubeUrl(e.target.value)}
                                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <button type="submit" className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                                    <IoSaveSharp className="mr-2" /> Save
                                </button>

                            </form>
                            {/* End of form */}
                        </PopoverContent>
                    </Popover>
                    {/* <button type="button" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                            <g>
                                <rect fill="none" height="24" width="24"></rect>
                            </g>
                            <g>
                                <g>
                                    <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                                </g>
                            </g>
                        </svg>
                        <span className="pl-2 mx-1">Add Lecture</span>
                    </button>
                     <div className="mt-5 bg-white rounded-lg shadow">
                        
                    <form onSubmit={handleSubmit} className="px-5 pb-5">
                        <div className="mb-4 pt-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700">YouTube URL:</label>
                            <input
                                id="youtubeUrl"
                                name="youtubeUrl"
                                type="text"
                                value={youtubeUrl}
                                onChange={(e) => setYoutubeUrl(e.target.value)}
                                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <button type="submit" className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                            <IoSaveSharp className="mr-2" /> Save
                        </button>

                    </form>
                    
                </div>  */}
            </div>
        </div>
        </div >


    );
};

export default CourseForm;
