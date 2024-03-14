import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';

const Hero = ({ courseDetails }) => {
  const navigate = useNavigate()
  const { title, price, preview_video, description ,category} = courseDetails.course;

  // const cartItems = {
  //   items: [],
  
  //   addToCart: function(item) {
  //     this.items.push(item);
  //     console.log("Item added to cart:", item);
  //   }
  // };
  
  
  const handleEnrollment = () => {
    // Here you can add logic to add the course to the cart and perform any other necessary actions
    // For now, let's just navigate to the cart page
    const cartItems = { title, price, category };
    navigate('/cart', { state: { cartItems } }); // Pass cartItem data to the next page
};
const handleAddTocart = () => {
  // Here you can add logic to add the course to the cart and perform any other necessary actions
  // For now, let's just navigate to the cart page
  const cartItems = { title, price, category };
  navigate('/cart', { state: { cartItems } }); // Pass cartItem data to the next page
};



  return (
    <div>
      {/* <div className="bg-white shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <div className="flex items-center justify-between md:justify-start">
            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            >
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <a href="/" className="font-bold text-gray-700 text-2xl">
              eGyanam Advance
            </a>
            <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Cyber Security
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                AI
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Data Science
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Blockchain
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                More
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="search"
                  className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                  placeholder="Search"
                />
                <svg
                  className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <a
                href="#"
                className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              >
                <svg
                  className="h-6 w-6 leading-none text-gray-300 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="pl-1 text-gray-500 text-md">0</span>
              </a>
              <button
                type="button"
                className="md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
              >
                <img
                  src="https://avatars.dicebear.com/api/bottts/2.svg"
                  alt="bottts"
                  width="28"
                  height="28"
                  className="rounded-lg mx-auto"
                />
              </button>
            </div>
          </div>
          <div className="relative md:hidden">
            <input
              type="search"
              className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />
            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div> */}
      <div className="antialiased">
        <div className="bg-indigo-700 text-indigo-200 md:text-center py-2 px-4">
          Welcome to{" "}
          <a href="/" className="font-bold underline hover:text-indigo-100">
            eGyanam Advance
          </a>
          . Learn, Explore ,{" "}
          <a href="" className="font-bold underline hover:text-indigo-100">
            Upskill
          </a>
          .
        </div>
      </div>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              Category
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{category}</span>
          </div>
        </div>
      </div>
      <div className="antialiased">
        {/* <div className="bg-indigo-700 text-indigo-200 md:text-center py-2 px-4">
          Welcome to{" "}
          <a href="/" className="font-bold underline hover:text-indigo-100">
            eGyanam Advance
          </a>
          . Learn, Explore ,{" "}
          <a href="" className="font-bold underline hover:text-indigo-100">
            Upskill
          </a>
          .
        </div> */}
        <div className="bg-white shadow-sm sticky top-0">
          {/* Header content */}
        </div>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <ReactPlayer
                    className="rounded-lg overflow-hidden "
                    controls
                    url={preview_video}
                    width="100%"
                    height="100%"
                  />

                  {/* <iframe
                    width="100%"
                    height="100%"
                    src={preview_video}
                    title="Course Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {title}
                </h2>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-indigo-400 mr-1 mt-1">$</span>
                      <span className="font-bold text-indigo-600 text-3xl">
                        {price}
                      </span>
                    </div>

                    {/* Price and saving */}
                  </div>
                  {/* Course description */}
                  <div className="flex py-4 space-x-4">
                    <div className="flex-1">
                      <p className="text-green-500 text-xl font-semibold">
                        Save 12%
                      </p>
                      <p className="text-gray-400 text-sm">
                        Inclusive of all Taxes.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500">{description}</p>
                <div className="flex py-4 space-x-4 ml-2">
                <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-red-600 hover:bg-red-500 text-white"
                    onClick={handleAddTocart}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                    onClick={handleEnrollment}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
