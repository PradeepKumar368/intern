import Carousal from "../Carousal/Carousal";
import Searchbar from "./Search_bar/searchbar";
import Trusted_Company from "./Trusted_Company/trusted_company";
import Testimonial from "./testimonial/testimonial";
import Coursecard from "../Course_card/coursecard";
import { useState , useEffect } from "react";

const LandingPage = () => {
    const [courses,setcourses] = useState([]);

    useEffect(() => {
        const fetchcoursedetail = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/coursedetail/');
                if(response.ok){
                    const data  = await response.json();
                    setcourses(data);
                }else{
                    console.error('failed to fetch course detail');
                }
            } catch (error) {
                console.error('Error fetching course detail: ',error);
            }
        };

        fetchcoursedetail();

    },[]);

    return (
        <div>
            <Carousal/>
            <Searchbar/>
            <Trusted_Company/>
            <Testimonial/>
            {courses.map((course) => (
                <Coursecard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default LandingPage;
