// Import necessary libraries
import { useState } from 'react';
import { useEffect } from 'react';

// Component definition
function Curriculum() {
    // State for search input
    const [search, setSearch] = useState('');
    
    // State for calculating scroll height
    const [scrollHeight, setScrollHeight] = useState(0);

    // State for module open/close
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle scroll and calculate scroll height
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollHeightPercentage = (scrollTop / totalHeight) * 100;
            setScrollHeight(scrollHeightPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dummy data for course modules and lectures
    const courseModules = [
        {
            moduleName: 'Introduction to Data Science',
            lectures: ['What is Data Science?', 'Importance of Data Science', 'Applications of Data Science']
        },
        {
            moduleName: 'Data Acquisition and Cleaning',
            lectures: ['Data Collection Methods', 'Data Cleaning Techniques', 'Data Preprocessing']
        },
        {
            moduleName: 'Introduction to Data Science',
            lectures: ['What is Data Science?', 'Importance of Data Science', 'Applications of Data Science']
        },
        {
            moduleName: 'Data Acquisition and Cleaning',
            lectures: ['Data Collection Methods', 'Data Cleaning Techniques', 'Data Preprocessing']
        },
        {
            moduleName: 'Introduction to Data Science',
            lectures: ['What is Data Science?', 'Importance of Data Science', 'Applications of Data Science']
        },
        {
            moduleName: 'Data Acquisition and Cleaning',
            lectures: ['Data Collection Methods', 'Data Cleaning Techniques', 'Data Preprocessing']
        },
        // Add more modules as needed
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">Course Curriculum</h2>
                <p className="text-neutral-500 text-xl mt-3">Explore the modules and lectures</p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {courseModules.map((module, index) => (
                    <div key={index} className="py-5 pb-2">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{module.moduleName}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg className={isOpen ? 'w-6 h-6 text-gray-500 transform rotate-180' : 'w-6 h-6 text-gray-500'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                {/* Render lectures for this module */}
                                <ul>
                                    {module.lectures.map((lecture, index) => (
                                        <li key={index}>{lecture}</li>
                                    ))}
                                </ul>
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Curriculum;
