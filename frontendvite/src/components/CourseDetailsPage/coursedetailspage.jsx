import Coursecard from "../Courses/Course_card/coursecard";
import Curriculum from "./components/curriculum";
import Hero from "./components/hero";
import "./coursedetailspage.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 

const Coursedetailspage = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  // const [cartItems, setCartItems] = useState([]); // State to manage cart items

  useEffect(() => {
    const fetchcoursedetail = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/coursedetail/");
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error("failed to fetch course detail");
        }
      } catch (error) {
        console.error("Error fetching course detail: ", error);
      }
    };

    fetchcoursedetail();
  }, []);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/coursecurriculum/${courseId}/`
        );
        if (response.ok) {
          const data = await response.json();
          setCourseDetails(data);
        } else {
          console.error("Failed to fetch course details.");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  // Function to add an item to the cart
  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  return (
    <div>
      {courseDetails && <Hero courseDetails={courseDetails} />}

      {courseDetails && <Curriculum courseDetails={courseDetails} />}
      <div>
        <div className="flex min-h/2-screen items-center justify-center bg-indigo-600/85 font-bold text-white pb-2">
          <div className=" text-center space-y-5">
            <div className="text-center text-5xl font-bold pt-2">
              Courses offered in
              <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                <span className="animate-word col-span-full row-span-full">
                  Data Science
                </span>
                <span className="animate-word-delay-1 col-span-full row-span-full">
                  AI
                </span>
                <span className="animate-word-delay-2 col-span-full row-span-full">
                  Blockchain
                </span>
                <span className="animate-word-delay-3 col-span-full row-span-full">
                  Cyber Security
                </span>
              </div>
            </div>
            <p className=" text-white">
              Want more details{" "}
              <a className="underline" href="mailto:info@egyanam.in">
                mail here
              </a>
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            {courses.map((course) => (
              <Coursecard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetailspage;
