import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import CardInfo from "./CardInfo";

const CardsInfos = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Opening Hours 9:00 AM - 10:00 PM",
      img: clock,
      background: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Visit Our Location",
      description: "No. 66, Changjiang West Road, Huangdao District, Qindao, China, 266580",
      img: marker,
      background: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Contact Us Now",
      description: "+15697854124",
      img: phone,
      background: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-52 mt-10">
      {cardInfo.map((info) => (
        <CardInfo key={info.id} info={info}></CardInfo>
      ))}
    </div>
  );
};

export default CardsInfos;
