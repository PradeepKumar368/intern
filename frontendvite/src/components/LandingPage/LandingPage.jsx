import Searchbar from "./Search_bar/searchbar";
import Trusted_Company from "./Trusted_Company/trusted_company";
import Testimonial from "./testimonial/testimonial";
import Coursecard from "../Courses/Course_card/coursecard";
import { useState, useEffect } from "react";
import NavBar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const LandingPage = () => {
  const [courses, setcourses] = useState([]);
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
      <NavBar/>
      <Searchbar />
      <Hero />
      <Trusted_Company />
      <Testimonial />
      <div>
        {featuredCourses.length > 0 && (
          <div>
            <h2>Featured Courses</h2>
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
            <h2>Trending Courses</h2>
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
            <h2>Most Popular Courses</h2>
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
  );
};

export default LandingPage;
