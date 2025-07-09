import React from "react";
import treatment from "../../../Assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-52">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <img
          src={treatment}
          className="max-w-sm object-cover rounded-lg shadow-2xl"
          alt=""
        />
        <div className="px-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
          At [Hospital Name], we provide comprehensive, high-quality dental care in a modern,
           patient-centered environment. Whether you need a routine check-up, emergency treatment,
           or advanced oral surgery, our expert dental team is here to ensure your smile stays healthy and bright.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
