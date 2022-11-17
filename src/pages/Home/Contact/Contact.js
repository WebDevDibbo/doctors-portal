import React from "react";
import contact from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="mt-36"
      style={{
        background: `url(${contact})`,
      }}
    >
      <div className="card py-10 text-center shadow-xl border border-black">
        
        <p className="text-xl font-bold text-secondary">Contact Us</p>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
        <div className="card-body mx-auto w-full md:w-2/5 text-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered "
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered"
          />
          
            
            <textarea
              className="textarea textarea-bordered h-24 "
              placeholder="Your message"
            ></textarea>
            
          
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-primary font-bold  bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
