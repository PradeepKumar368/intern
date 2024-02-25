import Coursecard from "../Course_card/coursecard";
import Curriculum from "./components/curriculum";
import Hero from "./components/hero";
import "./coursedetailspage.css";

const Coursedetailspage = () => {
  return (
    <div>
      <Hero />
      <Curriculum />
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

        <Coursecard />
      </div>
    </div>
  );
};

export default Coursedetailspage;
