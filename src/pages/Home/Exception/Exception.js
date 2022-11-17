import React from "react";
import treatment from '../../../assets/images/treatment.png'

const Exception = () => {
  return (
    
      <div className="hero my-36">
        <div className="hero-content flex-col md:flex-row gap-16">
          <img
            src={treatment}
            className=" md:w-1/2 lg:w-1/4 rounded-lg shadow-2xl"
            alt=""
          />
          <div className=" md:w-2/5">
            <h1 className="text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point  of using Lorem Ipsumis that it has a more-or-less normal  distribution of letters,as opposed to using 'Content  here, content here', making it look like readable English. Many desktop  publishing packages and web page
            </p>
            <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary font-bold text-white">Get Started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Exception;
