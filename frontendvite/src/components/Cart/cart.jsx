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


import React from 'react'; // Importing React library

const Cart = () => { // Defining a functional component named Cart
  return (
      <div className="container mx-auto mt-10"> {/* Container div */}
        <div className="flex shadow-md my-10"> {/* Flex container */}
          <div className="w-3/4 bg-white px-10 py-10"> {/* 3/4 width white background div */}
            <div className="flex justify-between border-b pb-8"> {/* Flex container with border bottom */}
              <h1 className="font-semibold text-2xl">Shopping Cart</h1> {/* Shopping Cart heading */}
              <h2 className="font-semibold text-2xl">3 Items</h2> {/* Number of items heading */}
            </div>
            <div className="flex mt-10 mb-5"> {/* Flex container with top and bottom margin */}
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3> {/* Product Details heading */}
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3> {/* Quantity heading */}
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3> {/* Price heading */}
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3> {/* Total heading */}
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"> {/* Flex container with hover effect */}
              <div className="flex w-2/5"> {/* Product div */}
                <div className="w-20"> {/* Product image div */}
                  <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" /> {/* Product image */}
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow"> {/* Flex container */}
                  <span className="font-bold text-sm">Iphone 6S</span> {/* Product name */}
                  <span className="text-red-500 text-xs">Apple</span> {/* Product brand */}
                  <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> {/* Remove link */}
                </div>
              </div>
              <div className="flex justify-center w-1/5"> {/* Flex container */}
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg> {/* Decrease quantity icon */}
                <input className="mx-2 border text-center w-8" type="text" value="1" /> {/* Quantity input */}
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg> {/* Increase quantity icon */}
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">$400.00</span> {/* Price */}
              <span className="text-center w-1/5 font-semibold text-sm">$400.00</span> {/* Total */}
            </div>

            {/* Similar structure for other products */}
            
            <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10"> {/* Continue shopping link */}
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg> {/* Arrow icon */}
              Continue Shopping
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10"> {/* Summary div */}
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1> {/* Order summary heading */}
            <div className="flex justify-between mt-10 mb-5"> {/* Flex container */}
              <span className="font-semibold text-sm uppercase">Items 3</span> {/* Number of items */}
              <span className="font-semibold text-sm">590$</span> {/* Total price */}
            </div>
            <div> {/* Shipping div */}
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label> {/* Shipping label */}
              <select className="block p-2 text-gray-600 w-full text-sm"> {/* Shipping select */}
                <option>Standard shipping - $10.00</option> {/* Standard shipping option */}
              </select>
            </div>
            <div className="py-10"> {/* Promo code div */}
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label> {/* Promo code label */}
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" /> {/* Promo code input */}
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> {/* Apply button */}
            <div className="border-t mt-8"> {/* Total cost div */}
              <div className="flex font-semibold justify-between py-6 text-sm uppercase"> {/* Flex container */}
                <span>Total cost</span> {/* Total cost label */}
                <span>$600</span> {/* Total cost value */}
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button> {/* Checkout button */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cart; // Exporting Cart component


