import Carousal from "../Carousal/Carousal";
import Searchbar from "./Search_bar/searchbar";
import Trusted_Company from "./Trusted_Company/trusted_company";
import Testimonial from "./testimonial/testimonial";
import Coursecard from "../Course_card/coursecard";


const LandingPage = () => {
    return (
        <div>
            <Carousal/>
            <Searchbar/>
            <Trusted_Company/>
            <Testimonial/>
            <Coursecard/>
        </div>
    );
};

export default LandingPage;
