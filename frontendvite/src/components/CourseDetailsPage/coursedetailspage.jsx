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
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [mostPopularCourses, setMostPopularCourses] = useState([]);

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

  useEffect(() => {
    // Filter courses based on categories
    setFeaturedCourses(courses.filter((course) => course.is_featured));
    setTrendingCourses(courses.filter((course) => course.is_trending));
    setMostPopularCourses(courses.filter((course) => course.is_mostpopular));
  }, [courses]);

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

        <div>
        {featuredCourses.length > 0 && (
          <div>
            {/* <h2>Featured Courses</h2> */}
            <h1 className="flex flex-row flex-nowrap items-center my-3">
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
                Featured Courses
              </span>
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h1>
            <div className="flex justify-center items-center py-20">
              <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {featuredCourses.map((course) => (
                  <Coursecard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        )}

        {trendingCourses.length > 0 && (
          <div>
            {/* <h2>Trending Courses</h2> */}
            <h1 className="flex flex-row flex-nowrap items-center my-3">
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
              Trending Courses
              </span>
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h1>
            <div className="flex justify-center items-center py-20">
              <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {trendingCourses.map((course) => (
                  <Coursecard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        )}

        {mostPopularCourses.length > 0 && (
          <div>
            {/* <h2>Most Popular Courses</h2> */}
            <h1 className="flex flex-row flex-nowrap items-center my-3">
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
              Most Popular Courses
              </span>
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h1>
            <div className="flex justify-center items-center py-20">
              <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {mostPopularCourses.map((course) => (
                  <Coursecard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Coursedetailspage;
