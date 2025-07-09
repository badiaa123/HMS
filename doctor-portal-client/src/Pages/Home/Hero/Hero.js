import React from "react";
import bannerImg from "../../../Assets/images/chair.png";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between mt-10">
          <img
            src={bannerImg}
            alt="hero"
            className="max-w-sm object-cover rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold lg:w-80">A Brighter, Healthier Tomorrow Begins Today</h1>
            <p className="py-3 lg:w-96">
             At [Hospital Name], we believe in the power of hope, healing,
              and human kindness. Every day, we witness the courage of our patients and the
              dedication of our healthcare teams—reminders that even in difficult moments, better days are ahead.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
