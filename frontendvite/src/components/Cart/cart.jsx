// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Cart = () => {
//   const location = useLocation();
//   const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

//   const removeFromCart = () => {
//     const newCartItems = [];
//     setCartItems(newCartItems);
//   };

//   return (
//     <div
//       className="w-full h-full bg-white bg-opacity-90 top-0 overflow-y-auto overflow-x-auto fixed sticky-0"
//       id="chec-div"
//     >
//       <div
//         className="w-full absolute z-10 right-0 h-full overflow-x-auto transform translate-x-0 transition ease-in-out duration-700"
//         id="checkout"
//       >
//         <h1 className="text-center text-2xl font-bold pt-10">Cart Items</h1>
//         <div className="rounded-lg justify-center relative flex-col">
//           <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
//             {cartItems.length === 0 ? (
//               <p className="text-gray-800 dark:text-white">
//                 Your cart is empty
//               </p>
//             ) : (
//               <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
//                 <img
//                   src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
//                   alt="product-image"
//                   className="w-full rounded-lg sm:w-40"
//                 />
//                 <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
//                   <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
//                     {cartItems.category}
//                   </p>
//                   <div className="flex items-center justify-between w-full pt-1">
//                     <p className="text-base font-black leading-none text-gray-800 dark:text-white">
//                       {cartItems.title}
//                     </p>
//                     <button onClick={() => removeFromCart()}>Remove</button>
//                   </div>
//                   <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
//                     Price: ${cartItems.price}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 md:absolute md:right-0">
//             <div className="mb-2 flex justify-between">
//               <p className="text-gray-700">Subtotal</p>
//               <p className="text-gray-700">${cartItems.price}</p>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between">
//               <p className="text-lg font-bold">Total</p>
//               <div className="">
//                 <p className="mb-1 text-lg font-bold">${cartItems.price}</p>
//                 <p className="text-sm text-gray-700">including tax</p>
//               </div>
//             </div>
//             <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
//               Check out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth/AuthContext";
// import { Navigate } from "react-router-dom";

const Cart = () => {
  const { userId } = useAuth();
  const [cartCourseIds, setCartCourseIds] = useState([]);
  const [cartCourses, setCartCourses] = useState([]);
  // const navigate = Navigate();

  useEffect(() => {
    const fetchCartCourseIds = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/student_courses/${userId}/cart_courses/`);
        if (!response.ok) {
          throw new Error("Failed to fetch cart course ids");
        }
        const data = await response.json();
        setCartCourseIds(data.cart_course_ids);
      } catch (error) {
        console.error("Error fetching cart course ids:", error.message);
      }
    };

    fetchCartCourseIds();
  }, [userId]);

  useEffect(() => {
    const fetchCartCourses = async () => {
      try {
        const coursesPromises = cartCourseIds.map(async (courseId) => {
          const response = await fetch(`http://127.0.0.1:8000/api/coursedetail/${courseId}/`);
          if (!response.ok) {
            throw new Error(`Failed to fetch course details for course id ${courseId}`);
          }
          const courseData = await response.json();
          return courseData;
        });

        const courses = await Promise.all(coursesPromises);
        setCartCourses(courses);
      } catch (error) {
        console.error("Error fetching cart courses:", error.message);
      }
    };

    if (cartCourseIds.length > 0) {
      fetchCartCourses();
    }
  }, [cartCourseIds]);

  const calculateTotalPrice = () => {
    const totalPrice = cartCourses.reduce((total, course) => total + parseFloat(course.price), 0);
    return totalPrice.toFixed(2); // Format to two decimal places
  };
  

  const handleRemoveCourse = async (courseId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student_courses/${userId}/cart_courses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operation: 'remove',
          course_id: courseId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to remove course id ${courseId} from cart`);
      }

      // Update the cartCourseIds state after successful removal
      setCartCourseIds((prevCourseIds) => prevCourseIds.filter((id) => id !== courseId));
      window.location.reload();
    } catch (error) {
      console.error("Error removing course from cart:", error.message);
    }
  };
  
  const handleCheckout = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student_courses/${userId}/registered_courses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operation: 'checkout',
          course_ids: cartCourseIds,  // Include the course_ids parameter for checkout
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to checkout");
      }
      window.location.reload();
      // navigate('/mylearnings');
      // Optionally, you can update the state or UI to reflect the successful checkout
    } catch (error) {
      console.error("Error during checkout:", error.message);
      // Handle errors as needed
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartCourses.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Course Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          </div>
          {cartCourses.map((course) => (
            <div key={course.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24" src={course.image} alt={course.title} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{course.title}</span>
                  <span className="text-red-500 text-xs">{course.brand}</span>
                  <button
                    onClick={() => handleRemoveCourse(course.id)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">${course.price}</span>
            </div>
          ))}
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          {/* <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Total items {cartCourses.length}</span>
            <span className="font-semibold text-sm">${calculateTotalPrice()}</span>
          </div> */}
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
              Promo Code
            </label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <button onClick={handleCheckout} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
