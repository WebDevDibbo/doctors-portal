import React from "react";
import chair from '../../../assets/images/chair.png'

const Banner = () => {
  return (
    
      <div className="hero mb-32 ">
        <div className="hero-content py-5 lg:py-24 flex-col lg:flex-row-reverse border">
          <img
            src={chair}
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="mt-14">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
