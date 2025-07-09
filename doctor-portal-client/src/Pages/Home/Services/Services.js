import React from "react";
import whitening from "../../../Assets/images/whitening.png";
import cavity from "../../../Assets/images/cavity.png";
import fluoride from "../../../Assets/images/fluoride.png";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const serviceCardInfo = [
    {
      id: 1,
      title: "Cardiology",
      description:
        "Heart-related treatments.",
      img: fluoride,
    },
    {
      id: 2,
      title: "Neurology",
      description:
        "Brain and nervous system care.",
      img: cavity,
    },
    {
      id: 3,
      title: "Dantist",
      description:
        "Examine teeth, gums, and mouth to diagnose dental issues.",
      img: whitening,
    },
  ];

  return (
    <div className="lg:px-52">
      <h5 className="text-center mt-16 text-lg uppercase text-cyan-400">
        Our Services
      </h5>
      <h1 className="text-center text-3xl">Services We Provide</h1>
      <div className="flex justify-evenly items-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {
                serviceCardInfo.map(cardData => <ServiceCard key={cardData.id} cardData={cardData}></ServiceCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Services;
