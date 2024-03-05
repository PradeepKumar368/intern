import Searchbar from "./Search_bar/searchbar";
import Trusted_Company from "./Trusted_Company/trusted_company";
import Testimonial from "./testimonial/testimonial";
import Coursecard from "../Courses/Course_card/coursecard";
import { useState, useEffect } from "react";
import NavBar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Info from "./Contact/contact";
import Tutor from "./Tutor/tutor";
import { useAuth } from "@/components/Auth/AuthContext";
import NavBar_postauth from "./Navbar/Navbar_postauth";

const LandingPage = () => {
  const [courses, setcourses] = useState([]);
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [mostPopularCourses, setMostPopularCourses] = useState([]);

  useEffect(() => {
    const fetchcoursedetail = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/coursedetail/");
        if (response.ok) {
          const data = await response.json();
          setcourses(data);
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
    // Filter courses based on categories
    setFeaturedCourses(courses.filter((course) => course.is_featured));
    setTrendingCourses(courses.filter((course) => course.is_trending));
    setMostPopularCourses(courses.filter((course) => course.is_mostpopular));
  }, [courses]);

  return (
    <div>
      {isAuthenticated ? <NavBar_postauth /> : <NavBar />}
      {/* <NavBar /> */}
      {/* <Searchbar /> */}
      <Hero />
      <Trusted_Company />
      <Tutor/>
      
      <Testimonial />
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
      <Info/>
    </div>
  );
};

export default LandingPage;
