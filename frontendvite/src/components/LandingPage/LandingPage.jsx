import Searchbar from "./Search_bar/searchbar";
import Trusted_Company from "./Trusted_Company/trusted_company";
import Testimonial from "./testimonial/testimonial";
import Coursecard from "../Courses/Course_card/coursecard";
import { useState, useEffect } from "react";
import NavBar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import { useAuth } from "@/components/Auth/AuthContext";
import NavBar_postauth from "./Navbar/Navbar_postauth";

const LandingPage = () => {
  const [courses, setcourses] = useState([]);
  const { isAuthenticated } = useAuth();
 console.log(isAuthenticated);
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

  return (
    <div>
      {isAuthenticated ? <NavBar_postauth /> : <NavBar />}
      {/* <NavBar /> */}
      <Searchbar />
      <Hero />
      <Trusted_Company />
      <Testimonial />
      <div className=" flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {courses.map((course) => (
            <Coursecard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
