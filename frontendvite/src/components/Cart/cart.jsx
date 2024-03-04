// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Cart = () => {
//   const location = useLocation();
//   const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

//   const removeFromCart = () => {
//     const newCartItems = [];
//     setCartItems(newCartItems);
//   };

//   //   const calculateTotalPrice = () => {
//   //     return cartItems.reduce((total, item) => total + item.price, 0);
//   //   };

//   const handleCheckout = () => {
//     console.log("Checkout:", cartItems);
//   };

//   return (
//     <div>
//       <div
//         className="w-full h-full bg-white bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
//         id="chec-div"
//       >
//         <div
//           className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
//           id="checkout"
//         >
//           <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
//             {cartItems.length === 0 ? (
//               <p className="text-gray-800 dark:text-white">
//                 Your cart is empty
//               </p>
//             ) : (
//               <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
//                 {/* <div className="md:w-4/12 2xl:w-1/4 w-full">
//                     <img
//                       src={cartItems.image}
//                       alt={cartItems.name}
//                       className="h-full object-center object-cover md:block hidden"
//                     />
//                     <img
//                       src={cartItems.image}
//                       alt={cartItems.name}
//                       className="md:hidden w-full h-full object-center object-cover"
//                     />
//                   </div> */}
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
//             {/* {cartItems.length > 0 && (
//               <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
//                 <p className="text-2xl leading-normal text-gray-800 dark:text-white">
//                   Total
//                 </p>
//                 <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
//                   ${cartItems.price}
//                 </p>
//               </div>
//             )}
//             {cartItems.length > 0 && (
//               <button
//                 onClick={handleCheckout}
//                 className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
//               >
//                 Checkout
//               </button>
//             )} */}
//             <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
//               <p className="text-2xl leading-normal text-gray-800 dark:text-white">
//                 Total
//               </p>
//               <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
//                 ${cartItems.price}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={handleCheckout}
//             className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//       <style>{/* Add your custom styles here */}</style>
//     </div>
//   );
// };

// export default Cart;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

  const removeFromCart = () => {
    const newCartItems = [];
    setCartItems(newCartItems);
  };

  return (
    // <div className="h-screen bg-gray-100 pt-20">
    //   <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div
      className="w-full h-full bg-white bg-opacity-90 top-0 overflow-y-auto overflow-x-auto fixed sticky-0"
      id="chec-div"
    >
      <div
        className="w-full absolute z-10 right-0 h-full overflow-x-auto transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <h1 className="text-center text-2xl font-bold pt-10">Cart Items</h1>
        <div className="rounded-lg justify-center relative flex-col">
          {/* Your cart items go here */}
          {/* Replace this area with your dynamic cart item rendering */}
          <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-800 dark:text-white">
                Your cart is empty
              </p>
            ) : (
              <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                    {cartItems.category}
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      {cartItems.title}
                    </p>
                    <button onClick={() => removeFromCart()}>Remove</button>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                    Price: ${cartItems.price}
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 md:absolute md:right-0">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${cartItems.price}</p>
            </div>
            {/* <div className="flex justify-between">
              <p className="text-gray-700">Discount</p>
              <p className="text-gray-700">---</p>
            </div> */}
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${cartItems.price}</p>
                <p className="text-sm text-gray-700">including tax</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cart;
