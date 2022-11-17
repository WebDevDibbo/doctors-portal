import React from "react";
import treatment from '../../../assets/images/treatment.png'

const Exception = () => {
  return (
    <div>
      <div className="hero mt-36">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="w-full md:w-1/3 md:mr-24 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl hidden md:block font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
            <h1 className="text-5xl py-6 px-2 block md:hidden font-bold">Exceptional <br /> Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content <br /> here, content here', making it look like readable English. Many desktop <br /> publishing packages and web page
            </p>
            <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary font-bold text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
