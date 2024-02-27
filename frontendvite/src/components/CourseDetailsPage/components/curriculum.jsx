import { useState } from 'react';

function Curriculum({ courseDetails }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen mb-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">Course Curriculum</h2>
          <p className="text-neutral-500 text-xl mt-3">Explore the modules and lectures</p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {courseDetails.modules.map((module) => (
            <div key={module.id} className="py-5 pb-2">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{module.title}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className={isOpen ? 'w-6 h-6 text-gray-500 transform rotate-180' : 'w-6 h-6 text-gray-500'}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {/* Render lectures for this module */}
                  <ul>
                    {courseDetails.lectures
                      .filter((lecture) => lecture.module === module.id)
                      .map((lecture) => (
                        <li key={lecture.id}>{lecture.title}</li>
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
  