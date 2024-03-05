import React from 'react';
import './trusted_company.css'; // Import the CSS file

const Trusted_Company = () => {
  return (
    <section>
      {/* <h1>Our Partners</h1> */}
      <h1 className="flex flex-row flex-nowrap items-center my-3">
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-white">
              Our Partners
              </span>
              <span
                className="flex-grow block border-t border-black"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h1>
      <div className="slider mb-4 pb-4">
        <div className="slider-items">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-a5ab8140cf60c3be5caf2f51c7d4cb0f-pjlq" alt="" />
          <img src="https://www.iitk.ac.in/new/images/page-images/logo/bluelog.jpg" alt="" />
          <img src="https://img.collegepravesh.com/2019/12/IIIT-Lucknow-Logo.png" alt="" />
          <img src="https://inc42.com/wp-content/uploads/2020/05/atmanirbhar.jpg" alt="" />
          <img src="https://lh3.googleusercontent.com/proxy/lLQcEWzn7KJaVA0B0x_ngsjd-X6Ov5t36Zbo3wWrulwmnOrNlmqUYMv-AWDnNFnYGMhdAOIBARrETLmtIRJ6XKO8NTk9" alt="" />
          <img src="https://csjmu.ac.in/wp-content/uploads/2023/03/csjmu-emplem.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/en/2/22/Indian_Institute_of_Information_Technology%2C_Guwahati_Logo.svg" alt="" />
          
        </div>
      </div>
    </section>
  );
};

export default Trusted_Company;
