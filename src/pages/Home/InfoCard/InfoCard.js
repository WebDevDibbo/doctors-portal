import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div>
      <div className={`py:7 p-6 mt-6 text-white card md:card-side shadow-xl ${bgClass}`}>
        <figure className="mr-2">
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body pl-0">
          <h2 className="card-title ">{name}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
