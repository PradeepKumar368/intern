import React from "react";
import "./trusted_company.css"; // Import the CSS file

const Trusted_Company = () => {
  // return (
  //   <section>
  //     {/* <h1>Our Partners</h1> */}

  //     <h1 className="flex flex-row flex-nowrap items-center my-3">
  //             <span
  //               className="flex-grow block border-t border-black"
  //               aria-hidden="true"
  //               role="presentation"
  //             ></span>
  //             <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
  //             Our Partners
  //             </span>
  //             <span
  //               className="flex-grow block border-t border-black"
  //               aria-hidden="true"
  //               role="presentation"
  //             ></span>
  //           </h1>
  //     <div className="slider mb-4 pb-4">
  //       <div className="slider-items">
  //         <img src="https://qph.cf2.quoracdn.net/main-qimg-a5ab8140cf60c3be5caf2f51c7d4cb0f-pjlq" alt="" />
  //         <img src="https://www.iitk.ac.in/new/images/page-images/logo/bluelog.jpg" alt="" />
  //         <img src="https://img.collegepravesh.com/2019/12/IIIT-Lucknow-Logo.png" alt="" />
  //         <img src="https://inc42.com/wp-content/uploads/2020/05/atmanirbhar.jpg" alt="" />
  //         <img src="https://lh3.googleusercontent.com/proxy/lLQcEWzn7KJaVA0B0x_ngsjd-X6Ov5t36Zbo3wWrulwmnOrNlmqUYMv-AWDnNFnYGMhdAOIBARrETLmtIRJ6XKO8NTk9" alt="" />
  //         <img src="https://csjmu.ac.in/wp-content/uploads/2023/03/csjmu-emplem.png" alt="" />
  //         <img src="https://upload.wikimedia.org/wikipedia/en/2/22/Indian_Institute_of_Information_Technology%2C_Guwahati_Logo.svg" alt="" />

  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <h1 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the India’s most premier organizations
        </h1> */}
        <h2 className="flex flex-row flex-nowrap items-center my-3">
          <span
            className="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
            Trusted by the India’s most premier organizations
          </span>
          <span
            className="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
        <div className="mx-auto mt-10 grid-col max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="flex mb-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.iitk.ac.in/new/images/page-images/logo/bluelog.jpg"
              alt="IIT Kanpur"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://img.collegepravesh.com/2019/12/IIIT-Lucknow-Logo.png"
              alt="IIIT Lucknow"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://c3ihub.org/_nuxt/c3ihub-logo-plain.54b6a228.svg"
              alt="C3iHub"
              width={158}
              height={48}
            />
          </div>
          <div className="flex">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://imgs.search.brave.com/mt7-bhqtx84cKMTaqt4sPIOoCq_cf-2LKT0sfy6wJL4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2lpY2luY3ViYXRv/ci5jb20vYXNzZXRz/L2ltYWdlcy9pbmRl/eC9pbWdib3hfZWNv/c3lzdGVtL3NpaWMu/d2VicA"
              alt="IIT Kanpur"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://asset.brandfetch.io/idCDdGPWWY/idP72wU7cn.png?updated=1709129357120"
              alt="HBTU"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://csjmu.ac.in/wp-content/uploads/2023/03/csjmu-emplem.png"
              alt="CSJM"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted_Company;
